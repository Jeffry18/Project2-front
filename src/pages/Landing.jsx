import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import Workflow from "../components/Landing/Workflow";
import CTA from "../components/Landing/CTA";
import Footer from "../components/Landing/Footer";
import TechStack from "../components/Landing/TechStack";

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
        <TechStack />
      <CTA />
      <Footer />
    </div>
  );
}

export default Landing;