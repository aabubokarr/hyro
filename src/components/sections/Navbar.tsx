import { Logo } from "../icons/logo";
import localFont from "next/font/local";
import Link from "next/link";

const gumok = localFont({
  src: "../../../public/fonts/gumok.otf",
});

export default function Navbar() {
  return (
    <div className="h-16 flex items-center justify-between w-[95%] m-auto">
      <div className={`flex items-center gap-2 text-5xl ${gumok.className}`}>
        <Logo></Logo>
        HYRO
      </div>
      <div className="flex items-center gap-10">
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Products</Link>
        <Link href="">Contact</Link>
      </div>
    </div>
  );
}
