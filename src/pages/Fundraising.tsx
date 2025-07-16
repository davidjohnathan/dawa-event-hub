import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Users, Target, Calendar } from 'lucide-react';

const Fundraising = () => {
  const campaigns = [
    {
      id: 1,
      title: "Dire Dawa Youth Education Center",
      description: "Building a modern education center to provide computer training and language classes for local youth.",
      goal: 50000,
      raised: 32500,
      supporters: 127,
      daysLeft: 25,
      category: "Education",
      organizer: "Dire Dawa Development Foundation"
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      description: "Installing water pumps and filtration systems in underserved neighborhoods of Dire Dawa.",
      goal: 25000,
      raised: 18750,
      supporters: 89,
      daysLeft: 18,
      category: "Health",
      organizer: "Community Health Alliance"
    },
    {
      id: 3,
      title: "Heritage Museum Restoration",
      description: "Preserving and restoring historical artifacts and buildings that showcase Dire Dawa's rich cultural heritage.",
      goal: 35000,
      raised: 14000,
      supporters: 56,
      daysLeft: 42,
      category: "Culture",
      organizer: "Dire Dawa Cultural Society"
    },
    {
      id: 4,
      title: "Women's Entrepreneurship Program",
      description: "Providing microloans and business training for women entrepreneurs in Dire Dawa to start their own businesses.",
      goal: 20000,
      raised: 12800,
      supporters: 73,
      daysLeft: 30,
      category: "Economic Development",
      organizer: "Women's Empowerment Network"
    }
  ];

  const calculateProgress = (raised: number, goal: number) => (raised / goal) * 100;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-hero bg-clip-text text-transparent mb-4">
            Community Fundraising
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Support community-driven initiatives that make a difference in Dire Dawa. 
            Together, we can build a better future for our city and its people.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">$127,850</div>
              <p className="text-muted-foreground">Total Raised</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">345</div>
              <p className="text-muted-foreground">Total Supporters</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">12</div>
              <p className="text-muted-foreground">Active Campaigns</p>
            </CardContent>
          </Card>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-card transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{campaign.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {campaign.daysLeft} days left
                  </div>
                </div>
                <CardTitle className="text-xl">{campaign.title}</CardTitle>
                <CardDescription>{campaign.description}</CardDescription>
                <p className="text-sm text-muted-foreground">
                  Organized by: {campaign.organizer}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">${campaign.raised.toLocaleString()} raised</span>
                    <span className="text-muted-foreground">of ${campaign.goal.toLocaleString()}</span>
                  </div>
                  <Progress value={calculateProgress(campaign.raised, campaign.goal)} className="h-2" />
                  <div className="text-center text-sm text-muted-foreground">
                    {Math.round(calculateProgress(campaign.raised, campaign.goal))}% funded
                  </div>
                </div>

                {/* Supporters */}
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  {campaign.supporters} supporters
                </div>

                {/* Donate Button */}
                <Button className="w-full bg-hero hover:shadow-glow">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Have a Project Idea?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start your own fundraising campaign and make a positive impact in your community.
          </p>
          <Button size="lg" className="bg-hero hover:shadow-glow">
            Start a Campaign
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Fundraising;