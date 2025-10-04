import { Logo } from "../icons/logo";
import localFont from "next/font/local";
import Link from "next/link";

const gumok = localFont({
  src: "../../../public/fonts/gumok.otf",
});

export default function Navbar() {
  return (
    <div className="h-16 flex items-center justify-between m-auto">
      <div className={`flex items-center gap-2 text-5xl ${gumok.className}`}>
        <Logo></Logo>
        HYRO
      </div>
      <div className="flex items-center gap-10">
        <Link href="#hero">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#products">Products</Link>
        <Link href="#build">Build</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
}
