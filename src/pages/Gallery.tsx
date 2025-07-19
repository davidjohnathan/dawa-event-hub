import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Cultural Festival 2024",
      category: "Events",
      type: "photo",
      date: "March 2024",
      image: "photo-1517024242587-d5be632b3c10"
    },
    {
      id: 2,
      title: "Historic Railway Station",
      category: "Architecture",
      type: "photo",
      date: "February 2024",
      image: "photo-1488972685288-c3fd157d7c7a"
    },
    {
      id: 3,
      title: "Traditional Market Life",
      category: "Culture",
      type: "photo",
      date: "January 2024",
      image: "photo-1582562124811-c09040d0a901"
    },
    {
      id: 4,
      title: "Sunset over Dire Dawa",
      category: "Nature",
      type: "photo",
      date: "December 2023",
      image: "photo-1470813740244-df37b8c1edcb"
    },
    {
      id: 5,
      title: "Coffee Ceremony Experience",
      category: "Culture",
      type: "video",
      date: "November 2023",
      image: "photo-1501286353178-1ec881214838"
    },
    {
      id: 6,
      title: "Local Artisan Workshop",
      category: "Crafts",
      type: "photo",
      date: "October 2023",
      image: "photo-1527576539890-dfa815648363"
    },
    {
      id: 7,
      title: "Food Tour Highlights",
      category: "Food",
      type: "video",
      date: "September 2023",
      image: "photo-1618160702438-9b02ab6515c9"
    },
    {
      id: 8,
      title: "Colonial Architecture Tour",
      category: "Architecture",
      type: "photo",
      date: "August 2023",
      image: "photo-1496307653780-42ee777d4833"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-hero bg-clip-text text-transparent mb-4">
            Media Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the beauty and culture of Dire Dawa through our curated collection of photos and videos. 
            Witness the vibrant life, stunning architecture, and rich traditions of our beloved city.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "Events", "Culture", "Architecture", "Nature", "Food"].map((filter) => (
            <Badge key={filter} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              {filter}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group cursor-pointer hover:shadow-card transition-all duration-300 overflow-hidden">
              <div className="relative aspect-square bg-muted">
                <img 
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.date}</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm"
                >
                  {item.category}
                </Badge>
                
                {/* Type Badge */}
                <Badge 
                  variant="outline" 
                  className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                >
                  {item.type}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-hero text-white rounded-lg hover:shadow-glow transition-all duration-300">
            Load More
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;