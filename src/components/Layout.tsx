import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // Added Link import for client-side routing
import { 
  MapPin, 
  Calendar, 
  Building2, 
  UtensilsCrossed, 
  Heart, 
  Camera,
  Menu,
  X,
  User,
  Globe,
  LogOut
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { AuthModals } from '@/components/AuthModals';
import { useToast } from '@/hooks/use-toast';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: 'Error signing out',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Signed out',
        description: 'You have been successfully signed out.',
      });
    }
  };

  const navigation = [
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Hotels', href: '/hotels', icon: Building2 },
    { name: 'Restaurants', href: '/restaurants', icon: UtensilsCrossed },
    { name: 'Gallery', href: '/gallery', icon: Camera },
    { name: 'Fundraising', href: '/fundraising', icon: Heart },
    { name: 'Blog', href: '/blog', icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="bg-card border-b shadow-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-hero bg-clip-text text-transparent">
                NuDire
              </div>
            </div>

            {/* Desktop Navigation - replaced <a> tags with <Link> for SPA navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href} // changed from href to to
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                EN
              </Button>
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-foreground">
                    {user.email}
                  </span>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={() => setIsSignInOpen(true)}>
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button size="sm" className="bg-hero hover:shadow-glow" onClick={() => setIsSignUpOpen(true)}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation - replaced <a> tags with <Link> */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href} // changed from href to to
                    className="flex items-center space-x-2 px-4 py-2 text-foreground hover:bg-muted rounded-md"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <div className="flex space-x-2 px-4 pt-2">
                  {user ? (
                    <Button variant="outline" size="sm" className="flex-1" onClick={handleSignOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" size="sm" className="flex-1" onClick={() => setIsSignInOpen(true)}>
                        Login
                      </Button>
                      <Button size="sm" className="flex-1 bg-hero" onClick={() => setIsSignUpOpen(true)}>
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Auth Modals */}
      <AuthModals
        isSignInOpen={isSignInOpen}
        isSignUpOpen={isSignUpOpen}
        onSignInClose={() => setIsSignInOpen(false)}
        onSignUpClose={() => setIsSignUpOpen(false)}
      />

      {/* Footer - replaced <a> tags with <Link> */}
      <footer className="bg-card border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold bg-hero bg-clip-text text-transparent mb-4">
                NuDire
              </div>
              <p className="text-muted-foreground">
                Discover the beauty and culture of Dire Dawa through unforgettable experiences.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Explore</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/events" className="hover:text-primary">Events</Link></li>
                <li><Link to="/hotels" className="hover:text-primary">Hotels</Link></li>
                <li><Link to="/restaurants" className="hover:text-primary">Restaurants</Link></li>
                <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Community</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/fundraising" className="hover:text-primary">Fundraising</Link></li>
                <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
                <li><Link to="/reviews" className="hover:text-primary">Reviews</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
                <li><Link to="/about" className="hover:text-primary">About</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 NuDire. Connecting you to the heart of Dire Dawa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
