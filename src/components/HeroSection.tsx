import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  MapPin, 
  Search,
  Users,
  Star,
  Camera
} from 'lucide-react';
import heroImage from '@/assets/dire-dawa-hero.jpg';

export function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Heart of
            <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Dire Dawa
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Experience unforgettable events, authentic dining, comfortable stays, 
            and contribute to community initiatives in Ethiopia's vibrant cultural hub.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <Input 
                    placeholder="Search events, hotels, restaurants..."
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
              </div>
              <Button className="bg-hero hover:shadow-glow px-8">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
              <Calendar className="h-6 w-6 text-primary-glow mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-white/80 text-sm">Events</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
              <MapPin className="h-6 w-6 text-primary-glow mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-white/80 text-sm">Hotels</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
              <Star className="h-6 w-6 text-primary-glow mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-white/80 text-sm">Restaurants</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
              <Camera className="h-6 w-6 text-primary-glow mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1k+</div>
              <div className="text-white/80 text-sm">Memories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}