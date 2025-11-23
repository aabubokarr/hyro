import { Logo } from "../icons/logo";
import localFont from "next/font/local";
import Link from "next/link";

const gumok = localFont({
  src: "../../../public/fonts/gumok.otf",
});

export default function Navbar() {
  return (
    <div className="h-14 sm:h-16 flex items-center justify-between m-auto px-4 md:px-6 lg:px-8 w-full max-w-7xl">
      <div className={`flex items-center gap-1 sm:gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${gumok.className}`}>
        <Logo className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"></Logo>
        <span className="hidden sm:inline">HYRO</span>
      </div>
      <div className="flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10">
        <Link href="#hero" className="text-xs sm:text-sm md:text-base hover:text-purple-light transition-colors">Home</Link>
        <Link href="#about" className="text-xs sm:text-sm md:text-base hover:text-purple-light transition-colors">About</Link>
        <Link href="#products" className="text-xs sm:text-sm md:text-base hover:text-purple-light transition-colors">Products</Link>
        <Link href="#build" className="text-xs sm:text-sm md:text-base hover:text-purple-light transition-colors hidden sm:inline">Build</Link>
        <Link href="#contact" className="text-xs sm:text-sm md:text-base hover:text-purple-light transition-colors">Contact</Link>
      </div>
    </div>
  );
}
