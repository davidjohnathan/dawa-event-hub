import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Wifi, Car, UtensilsCrossed, Dumbbell } from 'lucide-react';

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Dire Dawa Grand Hotel",
      description: "Luxury accommodation in the heart of Dire Dawa with modern amenities and traditional hospitality.",
      rating: 4.5,
      price: "$120/night",
      location: "Central District",
      amenities: ["Free WiFi", "Parking", "Restaurant", "Gym"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Heritage Palace Hotel",
      description: "Historic hotel with colonial architecture offering comfortable stays and cultural experiences.",
      rating: 4.2,
      price: "$85/night",
      location: "Old Town",
      amenities: ["Free WiFi", "Restaurant", "Pool"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Samrat Hotel",
      description: "Modern business hotel with excellent facilities for both leisure and business travelers.",
      rating: 4.0,
      price: "$95/night",
      location: "Business District",
      amenities: ["Free WiFi", "Parking", "Conference Room"],
      image: "/placeholder.svg"
    }
  ];

  const amenityIcons = {
    "Free WiFi": Wifi,
    "Parking": Car,
    "Restaurant": UtensilsCrossed,
    "Gym": Dumbbell
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-hero bg-clip-text text-transparent mb-4">
            Hotels in Dire Dawa
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect accommodation for your stay in Dire Dawa. From luxury hotels to 
            budget-friendly options, we have something for every traveler.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="hover:shadow-card transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg"></div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(hotel.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-sm text-muted-foreground">
                      {hotel.rating}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-primary">{hotel.price}</span>
                </div>
                <CardTitle className="text-xl">{hotel.name}</CardTitle>
                <CardDescription>{hotel.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {hotel.location}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity) => {
                    const IconComponent = amenityIcons[amenity];
                    return (
                      <Badge key={amenity} variant="secondary" className="flex items-center gap-1">
                        {IconComponent && <IconComponent className="h-3 w-3" />}
                        {amenity}
                      </Badge>
                    );
                  })}
                </div>
                
                <Button className="w-full mt-4 bg-hero hover:shadow-glow">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Hotels;