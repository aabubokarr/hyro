import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Build from "@/components/sections/Build";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="w-7xl m-auto">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Build />
      <Contact />
      <Footer />
    </div>
  );
}
