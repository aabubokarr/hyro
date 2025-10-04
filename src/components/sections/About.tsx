import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Vector } from "../icons/vector";
import Image from "next/image";
import MagicBento from "../animations/MagicBento";

export default function About() {
  return (
    <div id="about" className="mt-24 scroll-mt-24 flex flex-col items-center gap-24">
      <Vector variant="about" className="absolute -z-10"></Vector>
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <Image
            src="/images/about.png"
            width={350}
            height={350}
            alt="about"
            className="rounded-[20%] rounded-tl-[50%] rounded-br-[50%] m-auto"
          />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center gap-10">
          <h1 className="text-4xl">
            <span className="font-bold">ABOUT</span>
            <br />
            HYRO VR
          </h1>
          <p>
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
              buttonVariants({ variant: "default" }) + " relative z-50"
            }
          >
            Get in Touch
          </Link>
        </div>
      </div>
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
  );
}
