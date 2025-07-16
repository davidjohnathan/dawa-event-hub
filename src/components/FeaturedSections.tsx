import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users,
  Clock,
  Star,
  Heart,
  QrCode,
  Building2,
  UtensilsCrossed,
  Camera,
  DollarSign
} from 'lucide-react';

export function FeaturedSections() {
  const featuredEvents = [
    {
      id: 1,
      title: "Dire Dawa Cultural Festival",
      date: "Dec 15, 2024",
      time: "6:00 PM",
      location: "Cultural Center",
      attendees: 250,
      price: "$25",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400",
      category: "Cultural"
    },
    {
      id: 2,
      title: "Traditional Coffee Ceremony",
      date: "Dec 20, 2024",
      time: "3:00 PM",
      location: "Heritage House",
      attendees: 50,
      price: "$15",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400",
      category: "Traditional"
    },
    {
      id: 3,
      title: "Mountain Hiking Adventure",
      date: "Dec 22, 2024",
      time: "7:00 AM",
      location: "Dire Dawa Hills",
      attendees: 30,
      price: "$40",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400",
      category: "Adventure"
    }
  ];

  const featuredHotels = [
    {
      id: 1,
      name: "Dire Dawa Plaza Hotel",
      rating: 4.5,
      price: "$120/night",
      amenities: ["WiFi", "Pool", "Restaurant"],
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400"
    },
    {
      id: 2,
      name: "Heritage Boutique Hotel",
      rating: 4.8,
      price: "$85/night",
      amenities: ["WiFi", "Spa", "Garden"],
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400"
    }
  ];

  const featuredRestaurants = [
    {
      id: 1,
      name: "Authentic Ethiopian Cuisine",
      cuisine: "Ethiopian",
      rating: 4.7,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400"
    },
    {
      id: 2,
      name: "Dire Dawa Coffee House",
      cuisine: "Coffee & Pastries",
      rating: 4.6,
      priceRange: "$",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400"
    }
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Featured Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground">
            Join memorable experiences in the heart of Dire Dawa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-warm transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-primary">
                  {event.category}
                </Badge>
                <div className="absolute top-3 right-3">
                  <QrCode className="h-6 w-6 text-white bg-black/50 p-1 rounded" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                <div className="flex items-center text-muted-foreground text-sm space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {event.time}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {event.attendees}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{event.price}</span>
                  <Button size="sm" className="bg-hero hover:shadow-glow">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="bg-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Hotels
            </h2>
            <p className="text-xl text-muted-foreground">
              Comfortable stays for your visit to Dire Dawa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-warm transition-shadow group">
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{hotel.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm">{hotel.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{hotel.price}</span>
                      <Button size="sm" className="bg-hero hover:shadow-glow">
                        <Building2 className="h-4 w-4 mr-2" />
                        Book Room
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Hotels
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Local Flavors
          </h2>
          <p className="text-xl text-muted-foreground">
            Savor authentic Ethiopian cuisine and local specialties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featuredRestaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-warm transition-shadow group">
              <div className="flex">
                <div className="w-1/3 h-32">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{restaurant.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm">{restaurant.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{restaurant.priceRange}</span>
                    <Button size="sm" variant="outline">
                      <UtensilsCrossed className="h-4 w-4 mr-2" />
                      View Menu
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Explore All Restaurants
          </Button>
        </div>
      </section>

      {/* Fundraising Section */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Support Our Community
            </h2>
            <p className="text-xl text-muted-foreground">
              Help us build a better Dire Dawa through community initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-warm transition-shadow">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Education Fund</h3>
              <p className="text-muted-foreground mb-4">
                Supporting local schools and educational programs
              </p>
              <div className="mb-4">
                <div className="text-2xl font-bold text-primary">$12,500</div>
                <div className="text-sm text-muted-foreground">of $20,000 goal</div>
              </div>
              <Button className="w-full bg-hero hover:shadow-glow">
                <DollarSign className="h-4 w-4 mr-2" />
                Donate Now
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-warm transition-shadow">
              <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cultural Preservation</h3>
              <p className="text-muted-foreground mb-4">
                Documenting and preserving local traditions
              </p>
              <div className="mb-4">
                <div className="text-2xl font-bold text-primary">$8,200</div>
                <div className="text-sm text-muted-foreground">of $15,000 goal</div>
              </div>
              <Button className="w-full bg-hero hover:shadow-glow">
                <DollarSign className="h-4 w-4 mr-2" />
                Donate Now
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-warm transition-shadow">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
              <p className="text-muted-foreground mb-4">
                Improving public spaces and facilities
              </p>
              <div className="mb-4">
                <div className="text-2xl font-bold text-primary">$15,800</div>
                <div className="text-sm text-muted-foreground">of $25,000 goal</div>
              </div>
              <Button className="w-full bg-hero hover:shadow-glow">
                <DollarSign className="h-4 w-4 mr-2" />
                Donate Now
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}