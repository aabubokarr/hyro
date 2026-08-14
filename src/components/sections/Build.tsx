import Image from "next/image";
import { CompanyIcon } from "../icons/company";
import Marquee from "react-fast-marquee";
import Circle from "../ui/circle";
import { BASE_PATH } from "@/lib/config";

export default function Build() {
  return (
    <div id="build" className="mt-24 scroll-mt-24 flex flex-col items-center gap-12 md:gap-16 lg:gap-24 px-4 md:px-6 lg:px-8 w-full">
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        <div className="relative w-full flex items-center justify-center">
          <Image
            src={`${BASE_PATH}/images/build.png`}
            width={1280}
            height={1280}
            alt="build"
            className="rounded-[1000px] m-auto w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] h-auto opacity-40 sm:opacity-50 md:opacity-60"
          />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 w-full">
            <span className="font-bold">TECHNOLOGIES & HARDWARE</span> <br className="hidden sm:block" />
            USED BY HYRO VR.
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <Marquee gradient gradientColor="#302c42" pauseOnHover speed={50}>
          <div className="flex items-center gap-8 md:gap-12 lg:gap-20 ml-4 md:ml-8 lg:ml-20">
            <CompanyIcon name="unreal" className="w-8 sm:w-10 md:w-12"></CompanyIcon>
            <CompanyIcon name="unity" className="w-8 sm:w-10 md:w-12"></CompanyIcon>
            <CompanyIcon name="microsoft" className="w-8 sm:w-10 md:w-12"></CompanyIcon>
            <CompanyIcon name="netflix" className="w-8 sm:w-10 md:w-12"></CompanyIcon>
            <CompanyIcon name="playstation" className="w-8 sm:w-10 md:w-12"></CompanyIcon>
            <CompanyIcon name="facebook" className="w-8 sm:w-10 md:w-12"></CompanyIcon>
            <CompanyIcon name="apple" className="w-8 sm:w-10 md:w-12"></CompanyIcon>
            <CompanyIcon name="google" className="w-8 sm:w-10 md:w-12"></CompanyIcon>
            <CompanyIcon name="xbox" className="w-8 sm:w-10 md:w-12"></CompanyIcon>
            <CompanyIcon name="razer" className="w-8 sm:w-10 md:w-12"></CompanyIcon>
          </div>
        </Marquee>
      </div>
      <div className="relative w-full max-w-7xl min-h-[200px] sm:min-h-[250px] md:min-h-[300px] overflow-hidden">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 mt-8 px-4">
          <Circle desc="3D Conception & Design">
            01
          </Circle>
          <Circle desc="Interaction Design">
            02
          </Circle>
          <Circle desc="VR World User Testing">
            03
          </Circle>
          <Circle desc="Hyro VR Deploy">
            04
          </Circle>
        </div>
      </div>
    </div>
  );
}
