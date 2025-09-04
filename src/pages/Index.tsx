import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
