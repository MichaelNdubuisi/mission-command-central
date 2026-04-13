import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#08110b] text-white">
      <Navbar />

      <section className="flex min-h-[calc(100vh-62px)] items-center justify-center">
        <h1 className="text-5xl font-bold uppercase">Mission Command Central</h1>
      </section>
    </main>
  );
};

export default Home;