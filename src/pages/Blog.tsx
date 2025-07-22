import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Hidden Gems of Dire Dawa: A Local's Guide",
      excerpt: "Discover the secret spots and lesser-known attractions that make Dire Dawa truly special, from hidden cafes to scenic viewpoints.",
      author: "Amina Hassan",
      date: "March 15, 2024",
      category: "Travel Guide",
      readTime: "5 min read",
      featured: true,
      image: "photo-1506744038136-46273834b3fb"
    },
    {
      id: 2,
      title: "Traditional Ethiopian Coffee Culture in Dire Dawa",
      excerpt: "Explore the rich coffee culture of Dire Dawa and learn about the traditional ceremonies that bring communities together.",
      author: "Solomon Tesfaye",
      date: "March 12, 2024",
      category: "Culture",
      readTime: "7 min read",
      featured: false,
      image: "photo-1501286353178-1ec881214838"
    },
    {
      id: 3,
      title: "A Journey Through Dire Dawa's Railway History",
      excerpt: "The historic railway that connected Ethiopia to the world shaped Dire Dawa's identity. Learn about its fascinating past and present.",
      author: "Ahmed Ali",
      date: "March 10, 2024",
      category: "History",
      readTime: "6 min read",
      featured: false,
      image: "photo-1488972685288-c3fd157d7c7a"
    },
    {
      id: 4,
      title: "Best Street Food Adventures in Dire Dawa",
      excerpt: "From traditional injera to fusion delights, discover the vibrant street food scene that reflects our multicultural heritage.",
      author: "Fatima Omar",
      date: "March 8, 2024",
      category: "Food",
      readTime: "4 min read",
      featured: true,
      image: "photo-1618160702438-9b02ab6515c9"
    },
    {
      id: 5,
      title: "Preserving Dire Dawa's Colonial Architecture",
      excerpt: "The unique architectural blend of Ethiopian, French, and Italian influences tells the story of our city's diverse past.",
      author: "Dr. Henok Gebru",
      date: "March 5, 2024",
      category: "Architecture",
      readTime: "8 min read",
      featured: false,
      image: "photo-1496307653780-42ee777d4833"
    },
    {
      id: 6,
      title: "Community Initiatives Making a Difference",
      excerpt: "Highlighting local organizations and individuals who are working to improve life in Dire Dawa through innovative projects.",
      author: "Meron Tadesse",
      date: "March 3, 2024",
      category: "Community",
      readTime: "6 min read",
      featured: false,
      image: "photo-1465379944081-7f47de8d74ac"
    },
    {
      id: 7,
      title: "Digital Transformation in Dire Dawa",
      excerpt: "How technology is reshaping business and daily life in Dire Dawa, from mobile banking to digital marketplaces.",
      author: "Tekle Worku",
      date: "March 1, 2024",
      category: "Technology",
      readTime: "5 min read",
      featured: false,
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 8,
      title: "Youth Entrepreneurship Rising",
      excerpt: "Meet the young entrepreneurs who are creating innovative businesses and driving economic growth in Dire Dawa.",
      author: "Sara Mohammed",
      date: "February 28, 2024",
      category: "Business",
      readTime: "6 min read",
      featured: false,
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 9,
      title: "Sustainable Tourism in Dire Dawa",
      excerpt: "Exploring eco-friendly tourism initiatives that preserve our natural beauty while supporting local communities.",
      author: "Dawit Negash",
      date: "February 25, 2024",
      category: "Environment",
      readTime: "7 min read",
      featured: false,
      image: "photo-1500673922987-e212871fec22"
    },
    {
      id: 10,
      title: "Art and Culture Revival Movement",
      excerpt: "The renaissance of traditional arts and crafts in Dire Dawa, supported by young artists and cultural activists.",
      author: "Zara Ibrahim",
      date: "February 22, 2024",
      category: "Arts",
      readTime: "5 min read",
      featured: false,
      image: "photo-1439337153520-7082a56a81f4"
    },
    {
      id: 11,
      title: "Women Leadership in Local Government",
      excerpt: "Celebrating the increasing role of women in Dire Dawa's governance and their impact on community development.",
      author: "Hanan Ahmed",
      date: "February 20, 2024",
      category: "Politics",
      readTime: "8 min read",
      featured: false,
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 12,
      title: "Sports Development Programs",
      excerpt: "How sports initiatives are bringing youth together and creating opportunities for athletic excellence in Dire Dawa.",
      author: "Abdi Osman",
      date: "February 18, 2024",
      category: "Sports",
      readTime: "4 min read",
      featured: false,
      image: "photo-1438565434616-3ef039228b15"
    }
  ];

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-hero bg-clip-text text-transparent mb-4">
            Dire Dawa Stories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories, insights, and experiences from the heart of Dire Dawa. 
            Discover local culture, history, and the vibrant life of our community.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-card transition-shadow cursor-pointer group">
                  <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=600&q=80`}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center text-primary mt-4 group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-card transition-shadow cursor-pointer group">
                <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <div className="text-center mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Subscribe to our newsletter to get the latest stories and updates from Dire Dawa.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <button className="px-6 py-2 bg-hero text-white rounded-lg hover:shadow-glow transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;