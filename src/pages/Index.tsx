import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VehiclesSection from "@/components/VehiclesSection";
import ServicesSection from "@/components/ServicesSection";
import WhyVantSection from "@/components/WhyVantSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VehiclesSection />
      <ServicesSection />
      <WhyVantSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
