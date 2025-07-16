import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, DollarSign } from 'lucide-react';

const Restaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Habesha Restaurant",
      description: "Authentic Ethiopian cuisine with traditional injera and berbere-spiced dishes in a cultural setting.",
      rating: 4.6,
      priceRange: "$$",
      cuisine: "Ethiopian",
      location: "Central Market Area",
      hours: "11:00 AM - 10:00 PM",
      specialties: ["Doro Wat", "Injera", "Kitfo"]
    },
    {
      id: 2,
      name: "Dire Dawa Coffee House",
      description: "Traditional coffee house serving freshly roasted Ethiopian coffee with light meals and pastries.",
      rating: 4.4,
      priceRange: "$",
      cuisine: "Coffee & Cafe",
      location: "Railway District",
      hours: "6:00 AM - 9:00 PM",
      specialties: ["Ethiopian Coffee", "Pastries", "Light Meals"]
    },
    {
      id: 3,
      name: "Somali Cultural Restaurant",
      description: "Experience Somali flavors with aromatic rice dishes, grilled meats, and traditional sweets.",
      rating: 4.3,
      priceRange: "$$",
      cuisine: "Somali",
      location: "Megala District",
      hours: "12:00 PM - 11:00 PM",
      specialties: ["Basmati Rice", "Grilled Goat", "Halwa"]
    },
    {
      id: 4,
      name: "French Connection Bistro",
      description: "Colonial-era French bistro offering European dishes with local ingredients and fine wines.",
      rating: 4.1,
      priceRange: "$$$",
      cuisine: "French",
      location: "Historic District",
      hours: "5:00 PM - 12:00 AM",
      specialties: ["Coq au Vin", "Ratatouille", "Wine Selection"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-hero bg-clip-text text-transparent mb-4">
            Restaurants & Dining
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the diverse culinary landscape of Dire Dawa. From traditional Ethiopian dishes 
            to international cuisine, explore flavors that reflect our multicultural heritage.
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="hover:shadow-card transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg"></div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(restaurant.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-sm text-muted-foreground">
                      {restaurant.rating}
                    </span>
                  </div>
                  <Badge variant="outline">{restaurant.cuisine}</Badge>
                </div>
                <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                <CardDescription>{restaurant.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {restaurant.location}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {restaurant.hours}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Price Range: {restaurant.priceRange}
                </div>
                
                <div className="pt-2">
                  <p className="text-sm font-medium mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-hero hover:shadow-glow">
                  View Menu
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Restaurants;