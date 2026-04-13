import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/ui/HeroSection";
import ValuesSection from "../components/ui/ValuesSection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#071009] text-white">
      <Navbar />

      <HeroSection />

      <ValuesSection />

      <Footer /> {/* 👈 THIS IS WHERE IT GOES */}
    </main>
  );
};

export default Home;