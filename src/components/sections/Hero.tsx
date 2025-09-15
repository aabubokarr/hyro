import { Vector } from "../icons/vector";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex items-center justify-between w-[85%] mt-28 m-auto">
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
          Discover limitless possibilities in VR. Whether you're gaming,
          learning, or exploring, we make every moment feel real.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="default">Products</Button>
        </div>
      </div>
      <div>
        <img
          src="/images/home.svg"
          className="rounded-[20%] rounded-bl-[50%] border-[12px] border-[#2A2639] m-auto"
          alt="home"
        />
      </div>
    </div>
  );
}
