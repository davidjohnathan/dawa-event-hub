import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Wifi, Car, Coffee, ArrowLeft, Phone, Mail } from 'lucide-react';

const HotelDetail = () => {
  const { id } = useParams();
  
  // Mock hotel data
  const hotel = {
    id: parseInt(id || "1"),
    name: "Grand Dire Dawa Hotel",
    description: "A luxury hotel in the heart of Dire Dawa offering world-class amenities and traditional Ethiopian hospitality.",
    longDescription: "Experience the perfect blend of modern comfort and traditional Ethiopian charm at Grand Dire Dawa Hotel. Located in the city center, our hotel offers easy access to major attractions while providing a peaceful retreat for travelers. Each room is elegantly furnished with modern amenities and local artistic touches.",
    location: "City Center, Dire Dawa",
    rating: 4.5,
    price: "$85",
    image: "photo-1721322800607-8c38375eef04",
    amenities: ["Free WiFi", "Parking", "Restaurant", "Room Service", "Airport Shuttle", "Fitness Center"],
    contact: {
      phone: "+251 25 112 7890",
      email: "info@granddiredawa.com",
      website: "www.granddiredawa.com"
    },
    rooms: [
      { type: "Standard Room", price: "$65", description: "Comfortable room with city view" },
      { type: "Deluxe Room", price: "$85", description: "Spacious room with premium amenities" },
      { type: "Suite", price: "$120", description: "Luxury suite with separate living area" }
    ]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/hotels" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Hotels
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hotel Image */}
          <div className="aspect-video lg:aspect-square">
            <img 
              src={`https://images.unsplash.com/${hotel.image}?auto=format&fit=crop&w=800&q=80`}
              alt={hotel.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Hotel Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold bg-hero bg-clip-text text-transparent mb-4">
                {hotel.name}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">({hotel.rating})</span>
                </div>
              </div>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                {hotel.location}
              </div>
              <p className="text-muted-foreground">{hotel.description}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {hotel.amenities.map((amenity, index) => (
                    <Badge key={index} variant="outline" className="justify-start">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-3 text-primary" />
                  <span>{hotel.contact.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-3 text-primary" />
                  <span>{hotel.contact.email}</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <span className="text-2xl font-bold text-primary">From {hotel.price}/night</span>
              <Button className="w-full bg-hero hover:shadow-glow" size="lg">
                Book Now
              </Button>
            </div>
          </div>
        </div>

        {/* Room Types */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Room Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotel.rooms.map((room, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{room.type}</CardTitle>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{room.price}/night</span>
                    <Button variant="outline">Select</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">About This Hotel</h2>
          <p className="text-muted-foreground leading-relaxed">{hotel.longDescription}</p>
        </div>
      </div>
    </Layout>
  );
};

export default HotelDetail;