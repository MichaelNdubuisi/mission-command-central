import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/ui/HeroSection";
import ValuesSection from "../components/ui/ValuesSection";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071009] text-white">
      <Navbar />
      <HeroSection />
      <ValuesSection />
    </main>
  );
};

export default Home;