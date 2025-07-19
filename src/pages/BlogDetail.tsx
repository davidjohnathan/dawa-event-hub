import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  
  // Mock blog data
  const post = {
    id: parseInt(id || "1"),
    title: "Discovering the Hidden Gems of Dire Dawa",
    excerpt: "Explore the lesser-known attractions and cultural treasures that make Dire Dawa a unique destination in Ethiopia.",
    content: `
      <p>Dire Dawa, often overshadowed by its more famous Ethiopian counterparts, holds within its boundaries a treasure trove of experiences waiting to be discovered. As Ethiopia's second-largest city, it serves as a crucial commercial hub while maintaining its unique cultural identity.</p>
      
      <h2>The Historic Railway Heritage</h2>
      <p>The city's most iconic feature is undoubtedly the historic railway station, built during the French colonial period. This architectural marvel not only serves as a transportation hub but also as a window into Ethiopia's complex history. The station's distinctive design reflects the intersection of Ethiopian and European architectural influences.</p>
      
      <h2>Cultural Diversity at Every Corner</h2>
      <p>What sets Dire Dawa apart is its remarkable cultural diversity. Walking through the streets, you'll encounter a fascinating blend of Oromo, Amhara, Somali, and other ethnic communities, each contributing to the city's rich tapestry. This diversity is most evident in the local markets, where spices, textiles, and crafts from across the region come together.</p>
      
      <h2>The Coffee Culture Experience</h2>
      <p>No visit to Dire Dawa would be complete without experiencing the traditional Ethiopian coffee ceremony. Local cafés and homes alike practice this ancient ritual, where coffee beans are roasted, ground, and brewed in a process that takes hours but creates bonds that last a lifetime.</p>
      
      <h2>Hidden Natural Wonders</h2>
      <p>Beyond the urban landscape, Dire Dawa is surrounded by stunning natural beauty. The nearby hills offer excellent hiking opportunities with panoramic views of the city and the surrounding plains. These less-traveled paths lead to hidden waterfalls and ancient rock formations that tell the story of millions of years of geological history.</p>
      
      <h2>A Culinary Adventure</h2>
      <p>The food scene in Dire Dawa is a reflection of its cultural diversity. From traditional Ethiopian injera and wat to Somali-influenced dishes, the local cuisine offers flavors that cannot be found anywhere else. Street food vendors serve up delicious sambusas and fresh fruit juices that provide the perfect energy boost for exploration.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-07-18",
    readTime: "8 min read",
    category: "Travel",
    image: "photo-1433086966358-54859d0ed716",
    tags: ["Travel", "Culture", "Ethiopia", "Hidden Gems"]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="aspect-video mb-8">
            <img 
              src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=1200&q=80`}
              alt={post.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold bg-hero bg-clip-text text-transparent mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <div 
              className="text-muted-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Author Bio */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">About the Author</h3>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-medium">{post.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    Travel writer and cultural enthusiast with a passion for discovering hidden gems 
                    across Ethiopia. Sarah has been exploring and documenting the rich heritage of 
                    Ethiopian cities for over 5 years.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </Layout>
  );
};

export default BlogDetail;