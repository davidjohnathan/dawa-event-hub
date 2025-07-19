import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Calendar, Target, Users, Heart } from 'lucide-react';

const FundraisingDetail = () => {
  const { id } = useParams();
  
  // Mock fundraising data
  const campaign = {
    id: parseInt(id || "1"),
    title: "Clean Water for Rural Schools",
    description: "Help us install clean water systems in 5 rural schools around Dire Dawa, providing safe drinking water for over 1,000 children.",
    longDescription: "Access to clean water is a fundamental right, yet many rural schools around Dire Dawa lack proper water facilities. This campaign aims to install modern water filtration systems and wells in 5 schools, ensuring that over 1,000 children have access to safe, clean drinking water every day. Your donation will directly impact the health and education of these children, allowing them to focus on learning rather than worrying about waterborne diseases.",
    organizer: "Dire Dawa Education Foundation",
    target: 25000,
    raised: 18750,
    donors: 156,
    daysLeft: 12,
    category: "Education",
    image: "photo-1465146344425-f00d5f5c8f07",
    impact: [
      "1,000+ children will have access to clean water",
      "5 schools will get modern water systems",
      "Reduced waterborne diseases by 80%",
      "Improved school attendance rates"
    ],
    updates: [
      {
        date: "2024-07-15",
        title: "75% of our goal reached!",
        content: "Thanks to your amazing support, we've reached 75% of our fundraising goal. We've already started surveying the first two schools."
      },
      {
        date: "2024-07-01",
        title: "Campaign launched",
        content: "We're excited to announce the launch of our clean water campaign. Together, we can make a difference!"
      }
    ]
  };

  const progressPercentage = (campaign.raised / campaign.target) * 100;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/fundraising" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Fundraising
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Campaign Image */}
          <div className="aspect-video lg:aspect-square">
            <img 
              src={`https://images.unsplash.com/${campaign.image}?auto=format&fit=crop&w=800&q=80`}
              alt={campaign.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Campaign Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{campaign.category}</Badge>
              <h1 className="text-3xl font-bold bg-hero bg-clip-text text-transparent mb-4">
                {campaign.title}
              </h1>
              <p className="text-muted-foreground">{campaign.description}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>${campaign.raised.toLocaleString()} raised</span>
                    <span>${campaign.target.toLocaleString()} goal</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <div className="text-center text-2xl font-bold text-primary">
                    {Math.round(progressPercentage)}% funded
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 mr-1 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{campaign.donors}</div>
                    <div className="text-sm text-muted-foreground">donors</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Calendar className="h-4 w-4 mr-1 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{campaign.daysLeft}</div>
                    <div className="text-sm text-muted-foreground">days left</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button className="w-full bg-hero hover:shadow-glow" size="lg">
                <Heart className="h-4 w-4 mr-2" />
                Donate Now
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Organized by {campaign.organizer}
              </p>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Expected Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {campaign.impact.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-primary mr-3" />
                    <span>{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">About This Campaign</h2>
          <p className="text-muted-foreground leading-relaxed">{campaign.longDescription}</p>
        </div>

        {/* Updates */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Campaign Updates</h2>
          <div className="space-y-6">
            {campaign.updates.map((update, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{update.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{update.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{update.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FundraisingDetail;