import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedSections } from '@/components/FeaturedSections';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedSections />
    </Layout>
  );
};

export default Index;
