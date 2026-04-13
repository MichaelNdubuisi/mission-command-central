import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/ui/HeroSection";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071009] text-white">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default Home;