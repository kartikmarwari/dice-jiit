import { useEffect, useState } from "react";
import "@/App.css";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Team from "@/components/sections/Team";
import Faculty from "@/components/sections/Faculty";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App" data-testid="dice-app">
      {loading && <Loader />}
      <Nav />
      <main>
        <Hero />
        <About />
        <Features />
        <Team />
        <Faculty />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
