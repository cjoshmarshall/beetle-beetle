import Hero from "../components/Hero";
import Calculator from "../components/Calculator";
import Blog from "../components/Blog";

function Home() {
  return (
    <main className="text-satoshi text-white">
      <Hero />
      <Calculator />
      <Blog />
    </main>
  );
}

export default Home;
