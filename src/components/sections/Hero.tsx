import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Vector } from "../icons/vector";
import { LocationIcon } from "../icons/location";
import { PhoneIcon } from "../icons/phone";
import { MailIcon } from "../icons/mail";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero" className="flex flex-col gap-24">
      <Vector
        variant="home-left"
        className="absolute left-0 2xl:left-60"
      ></Vector>
      <Vector
        variant="home-right"
        className="absolute right-0 2xl:right-60 top-0 -z-10"
      ></Vector>
      <div className="flex items-center justify-between mt-28 m-auto">
        <div className="flex flex-col items-start justify-center gap-10">
          <h1 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent">
              Dive
            </span>{" "}
            Into The Depths <br /> Of{" "}
            <span className="bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent">
              Virtual Reality
            </span>
          </h1>
          <p className="w-[70%]">
            Discover limitless possibilities in VR. Whether you are gaming,
            learning, or exploring, we make every moment feel real.
          </p>
          <Link
            href="#products"
            className={
              buttonVariants({ variant: "default" }) + " relative z-50"
            }
          >
            Products
          </Link>
        </div>
        <div>
          <Image
            src="/images/hero.png"
            width={500}
            height={500}
            alt="home"
            className="rounded-[20%] rounded-bl-[50%] border-[12px] border-[#2A2639] m-auto"
          />
        </div>
      </div>
      <div className="flex items-center h-32 py-4 bg-[#3A3456] rounded-[90px]">
        <div className="flex items-center justify-center gap-2  w-1/3 border-r-[.5px] border-r-purple-light h-full">
          <LocationIcon></LocationIcon>
          <div>
            <h1 className="font-bold">Pay Us a Visit</h1>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 w-1/3 border-r-[.5px] border-r-purple-light h-full">
          <PhoneIcon></PhoneIcon>
          <div>
            <h1 className="font-bold">Give Us a Call</h1>
            <p>017 1111 2222</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2  w-1/3">
          <MailIcon></MailIcon>
          <div>
            <h1 className="font-bold">Send Us a Message</h1>
            <p>contact@hyro.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
