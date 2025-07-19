import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, ArrowLeft } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();
  
  // Mock event data - in real app, this would come from database
  const event = {
    id: parseInt(id || "1"),
    title: "Dire Dawa Cultural Festival",
    description: "Celebrate the rich heritage of Dire Dawa with traditional music, dance, and cuisine. Experience authentic Ethiopian culture through performances, workshops, and local food tastings.",
    longDescription: "Join us for an unforgettable celebration of Dire Dawa's cultural diversity. This festival brings together communities to showcase traditional arts, crafts, music, and dance. Visitors can participate in coffee ceremonies, traditional cooking classes, and artisan workshops. The event features live performances from local musicians and dancers, cultural exhibitions, and authentic food from various Ethiopian regions.",
    date: "2024-08-15",
    time: "6:00 PM",
    location: "Cultural Center, Dire Dawa",
    capacity: 500,
    price: "Free",
    category: "Cultural",
    image: "photo-1517024242587-d5be632b3c10",
    organizer: "Dire Dawa Cultural Association",
    contact: "+251 25 112 3456"
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/events" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Image */}
          <div className="aspect-video lg:aspect-square">
            <img 
              src={`https://images.unsplash.com/${event.image}?auto=format&fit=crop&w=800&q=80`}
              alt={event.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Event Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{event.category}</Badge>
              <h1 className="text-3xl font-bold bg-hero bg-clip-text text-transparent mb-4">
                {event.title}
              </h1>
              <p className="text-lg text-muted-foreground">{event.description}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Event Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-3 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-3 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-3 text-primary" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-3 text-primary" />
                  <span>{event.capacity} spots available</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">Organized by: {event.organizer}</p>
                  <p className="text-sm text-muted-foreground">Contact: {event.contact}</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <span className="text-2xl font-bold text-primary">{event.price}</span>
              <Button className="w-full bg-hero hover:shadow-glow" size="lg">
                Book Event
              </Button>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">About This Event</h2>
          <p className="text-muted-foreground leading-relaxed">{event.longDescription}</p>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;