import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Vector } from "../icons/vector";
import Image from "next/image";
import MagicBento from "../animations/MagicBento";
import { BASE_PATH } from "@/lib/config";

export default function About() {
  return (
    <div id="about" className="mt-24 scroll-mt-24 flex flex-col items-center gap-12 md:gap-16 lg:gap-24 relative px-4 md:px-6 lg:px-8">
      <Vector variant="about" className="hidden lg:block absolute -z-10 top-0 left-0 w-full h-auto"></Vector>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full max-w-7xl">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={`${BASE_PATH}/images/about.png`}
            width={350}
            height={350}
            alt="about"
            className="rounded-[20%] rounded-tl-[50%] rounded-br-[50%] m-auto w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-6 md:gap-8 lg:gap-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center lg:text-left">
            <span className="font-bold bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent">ABOUT</span>
            <br />
            HYRO VR
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 text-center lg:text-left">
            At Hyro, we make virtual reality simple, fun, and accessible for
            everyone. Explore immersive worlds, play interactive games, and
            connect with people worldwide — all in one platform. Our experiences
            are designed to be smooth, realistic, and engaging, whether you are
            a beginner or an expert. More than just entertainment, Hyro is a
            place to meet, learn, and share moments with others. Step into a new
            dimension and see how we are shaping the future of VR.
          </p>
          <Link
            href="#contact"
            className={
              buttonVariants({ variant: "default" }) + " relative z-50 w-3/4 max-w-[200px] sm:w-auto sm:max-w-none mx-auto sm:mx-0 px-6 py-2.5 sm:px-8 sm:py-2.5 md:px-10 md:py-3 text-sm sm:text-base text-center"
            }
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto flex justify-center">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={120}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </div>
  );
}
