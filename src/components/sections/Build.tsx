import Image from "next/image";
import { CompanyIcon } from "../icons/company";
import Marquee from "react-fast-marquee";
import Circle from "../ui/circle";
import { Vector } from "../icons/vector";

export default function Build() {
  return (
    <div className="mt-24 flex flex-col items-center gap-24">
      <div className="relative">
        <p className="text-4xl font-light text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="font-bold">TECHNOLOGIES & HARDWARE</span> <br />
          USED BY HYDRA VR.
        </p>
        <Image
          src="/images/build.svg"
          width={1280}
          height={1280}
          alt="build"
          className="rounded-[1000px] m-auto"
        />
      </div>
      <Marquee gradient gradientColor="#302c42" pauseOnHover>
        <div className="flex items-center gap-20 ml-20">
          <CompanyIcon name="unreal" className="w-16"></CompanyIcon>
          <CompanyIcon name="unity" className="w-16"></CompanyIcon>
          <CompanyIcon name="microsoft" className="w-16"></CompanyIcon>
          <CompanyIcon name="netflix" className="w-16"></CompanyIcon>
          <CompanyIcon name="playstation" className="w-16"></CompanyIcon>
          <CompanyIcon name="facebook" className="w-16"></CompanyIcon>
          <CompanyIcon name="apple" className="w-16"></CompanyIcon>
          <CompanyIcon name="google" className="w-16"></CompanyIcon>
          <CompanyIcon name="xbox" className="w-16"></CompanyIcon>
          <CompanyIcon name="razer" className="w-16"></CompanyIcon>
        </div>
      </Marquee>
      <div className="relative">
        <Vector variant="build"></Vector>
        <div className="flex items-center justify-center gap-24 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Circle size={160} desc="3D Conception & Design">
            01
          </Circle>
          <Circle size={160} desc="Interaction Design">
            02
          </Circle>
          <Circle size={160} desc="VR World User Testing">
            03
          </Circle>
          <Circle size={160} desc="Hydra VR Deploy">
            04
          </Circle>
        </div>
      </div>
    </div>
  );
}
