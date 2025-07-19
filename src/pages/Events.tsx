import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Dire Dawa Cultural Festival",
      description: "Celebrate the rich heritage of Dire Dawa with traditional music, dance, and cuisine.",
      date: "2024-08-15",
      time: "6:00 PM",
      location: "Cultural Center, Dire Dawa",
      capacity: 500,
      price: "Free",
      category: "Cultural"
    },
    {
      id: 2,
      title: "Ethiopian Coffee Ceremony",
      description: "Experience the traditional Ethiopian coffee ceremony with local experts.",
      date: "2024-08-20",
      time: "3:00 PM",
      location: "Heritage Café",
      capacity: 50,
      price: "$15",
      category: "Cultural"
    },
    {
      id: 3,
      title: "Dire Dawa Food Tour",
      description: "Explore local cuisine with guided tours to the best restaurants and street food.",
      date: "2024-08-25",
      time: "11:00 AM",
      location: "Central Market",
      capacity: 30,
      price: "$25",
      category: "Food"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-hero bg-clip-text text-transparent mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exciting events and experiences in Dire Dawa. From cultural festivals to food tours, 
            there's always something happening in our vibrant city.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link key={event.id} to={`/events/${event.id}`}>
              <Card className="hover:shadow-card transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{event.category}</Badge>
                    <span className="text-sm font-semibold text-primary">{event.price}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.capacity} spots available
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

export default Events;