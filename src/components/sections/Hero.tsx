import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Vector } from "../icons/vector";
import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

export default function Hero() {
  return (
    <div id="hero" className="flex flex-col gap-12 md:gap-16 lg:gap-24 relative px-4 md:px-6 lg:px-8">
      <Vector
        variant="home"
        className="hidden lg:block absolute left-0 2xl:left-60 -z-10"
      ></Vector>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-12 md:mt-20 lg:mt-28 gap-8 lg:gap-12 m-auto w-full max-w-7xl">
        <div className="flex flex-col items-center lg:items-start justify-center gap-6 md:gap-8 lg:gap-10 w-full lg:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left">
            <span className="bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent">
              Dive
            </span>{" "}
            Into The Depths <br className="hidden sm:block" /> Of{" "}
            <span className="bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent">
              Virtual Reality
            </span>
          </h1>
          <p className="w-full lg:w-[70%] text-sm md:text-base lg:text-lg text-center lg:text-left text-gray-300">
            Discover limitless possibilities in VR. Whether you are gaming,
            learning, or exploring, we make every moment feel real.
          </p>
          <Link
            href="#products"
            className={
              buttonVariants({ variant: "default" }) + " relative z-50 w-3/4 max-w-[200px] sm:w-auto sm:max-w-none mx-auto sm:mx-0 px-6 py-2.5 sm:px-8 sm:py-2.5 md:px-10 md:py-3 text-sm sm:text-base text-center"
            }
          >
            Products
          </Link>
        </div>
        <div className="w-full lg:w-auto flex justify-center">
          <Image
            src={`${BASE_PATH}/images/hero.png`}
            width={500}
            height={500}
            alt="home"
            className="rounded-[20%] rounded-bl-[50%] border-4 md:border-8 lg:border-[12px] border-[#2A2639] m-auto w-[280px] sm:w-[350px] md:w-[400px] lg:w-[550px] xl:w-[650px] 2xl:w-[750px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
