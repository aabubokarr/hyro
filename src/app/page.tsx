import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Why from "@/components/sections/Why";
import How from "@/components/sections/How";
import Join from "@/components/sections/Join";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="w-[1440px]">
      <Navbar />
      <Hero />
      <About />
      <Why />
      <How />
      <Join />
      <Footer />
    </div>
  );
}
