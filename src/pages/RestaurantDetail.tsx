import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Phone, ArrowLeft } from 'lucide-react';

const RestaurantDetail = () => {
  const { id } = useParams();
  
  // Mock restaurant data
  const restaurant = {
    id: parseInt(id || "1"),
    name: "Traditional Ethiopian Kitchen",
    description: "Authentic Ethiopian cuisine featuring traditional dishes like injera, doro wat, and fresh coffee ceremonies.",
    longDescription: "Experience the authentic flavors of Ethiopia at Traditional Ethiopian Kitchen. Our family-owned restaurant has been serving traditional dishes for over 20 years, using recipes passed down through generations. Every meal is prepared with love and the finest local ingredients.",
    location: "Heritage Quarter, Dire Dawa",
    rating: 4.8,
    priceRange: "$$",
    image: "photo-1618160702438-9b02ab6515c9",
    cuisine: "Ethiopian",
    hours: "11:00 AM - 10:00 PM",
    contact: "+251 25 112 5432",
    specialties: ["Doro Wat", "Injera", "Tibs", "Coffee Ceremony", "Vegetarian Platter"],
    menu: [
      {
        category: "Main Dishes",
        items: [
          { name: "Doro Wat", price: "$12", description: "Traditional chicken stew with berbere spice" },
          { name: "Beef Tibs", price: "$15", description: "Sautéed beef with onions and peppers" },
          { name: "Vegetarian Combo", price: "$10", description: "Selection of lentils, vegetables, and salads" }
        ]
      },
      {
        category: "Beverages",
        items: [
          { name: "Ethiopian Coffee", price: "$3", description: "Fresh roasted coffee ceremony" },
          { name: "Honey Wine", price: "$8", description: "Traditional tej honey wine" },
          { name: "Fresh Juice", price: "$4", description: "Mixed tropical fruit juice" }
        ]
      }
    ]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/restaurants" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Restaurants
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Restaurant Image */}
          <div className="aspect-video lg:aspect-square">
            <img 
              src={`https://images.unsplash.com/${restaurant.image}?auto=format&fit=crop&w=800&q=80`}
              alt={restaurant.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Restaurant Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{restaurant.cuisine}</Badge>
              <h1 className="text-3xl font-bold bg-hero bg-clip-text text-transparent mb-4">
                {restaurant.name}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(restaurant.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">({restaurant.rating})</span>
                </div>
                <span className="ml-4 text-sm font-medium">{restaurant.priceRange}</span>
              </div>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                {restaurant.location}
              </div>
              <p className="text-muted-foreground">{restaurant.description}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Restaurant Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-3 text-primary" />
                  <span>{restaurant.hours}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-3 text-primary" />
                  <span>{restaurant.contact}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Specialties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {restaurant.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-hero hover:shadow-glow" size="lg">
              Make Reservation
            </Button>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <div className="space-y-8">
            {restaurant.menu.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <span className="font-bold text-primary ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">About This Restaurant</h2>
          <p className="text-muted-foreground leading-relaxed">{restaurant.longDescription}</p>
        </div>
      </div>
    </Layout>
  );
};

export default RestaurantDetail;