import { Link } from 'react-router-dom';
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
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      id: 2,
      name: "Heritage Palace Hotel",
      description: "Historic hotel with colonial architecture offering comfortable stays and cultural experiences.",
      rating: 4.2,
      price: "$85/night",
      location: "Old Town",
      amenities: ["Free WiFi", "Restaurant", "Pool"],
      image: "photo-1439886183900-e79ec0057170"
    },
    {
      id: 3,
      name: "Samrat Hotel",
      description: "Modern business hotel with excellent facilities for both leisure and business travelers.",
      rating: 4.0,
      price: "$95/night",
      location: "Business District",
      amenities: ["Free WiFi", "Parking", "Conference Room"],
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 4,
      name: "Ethiopian Railway Hotel",
      description: "Historic railway hotel with authentic colonial charm and modern comforts near the train station.",
      rating: 4.3,
      price: "$75/night",
      location: "Railway District",
      amenities: ["Free WiFi", "Restaurant", "Historic Tours"],
      image: "photo-1488972685288-c3fd157d7c7a"
    },
    {
      id: 5,
      name: "Oasis Resort & Spa",
      description: "Tranquil retreat with spa services, beautiful gardens, and panoramic views of the surrounding landscape.",
      rating: 4.7,
      price: "$150/night",
      location: "Outskirts",
      amenities: ["Free WiFi", "Spa", "Pool", "Garden"],
      image: "photo-1506744038136-46273834b3fb"
    },
    {
      id: 6,
      name: "City View Hotel",
      description: "Modern hotel with spectacular city views, rooftop restaurant, and convenient location for business travelers.",
      rating: 4.1,
      price: "$90/night",
      location: "Downtown",
      amenities: ["Free WiFi", "Rooftop Bar", "Business Center"],
      image: "photo-1518005020951-eccb494ad742"
    },
    {
      id: 7,
      name: "Cultural Heritage Inn",
      description: "Boutique hotel celebrating Dire Dawa's multicultural heritage with themed rooms and cultural activities.",
      rating: 4.4,
      price: "$110/night",
      location: "Cultural District",
      amenities: ["Free WiFi", "Cultural Tours", "Traditional Music"],
      image: "photo-1466442929976-97f336a657be"
    },
    {
      id: 8,
      name: "Budget Comfort Lodge",
      description: "Clean, comfortable, and affordable accommodation perfect for backpackers and budget-conscious travelers.",
      rating: 3.8,
      price: "$35/night",
      location: "Market Area",
      amenities: ["Free WiFi", "Shared Kitchen", "Laundry"],
      image: "photo-1582562124811-c09040d0a901"
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
            <Link key={hotel.id} to={`/hotels/${hotel.id}`}>
              <Card className="hover:shadow-card transition-shadow cursor-pointer">
              <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${hotel.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
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
                  View Details
                </Button>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Hotels;