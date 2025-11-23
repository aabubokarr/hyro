import { Logo } from "../icons/logo";
import { SocialIcon } from "../icons/social";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-8 mt-24 mb-10 px-4 md:px-6 lg:px-8">
      <Logo className="animate-pulse w-12 h-12 sm:w-16 sm:h-16"></Logo>
      <div className="flex flex-col gap-3 items-center">
        <p className="text-sm md:text-base">FOLLOW US ON:</p>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 flex-wrap justify-center">
          {(["instagram", "linkedin", "youtube", "twitter", "tiktok"] as const).map(
            (name) => (
              <div
                key={name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 flex flex-col items-center justify-center rounded-full cursor-pointer hover:border-purple-light transition-colors"
              >
                <SocialIcon name={name} className="w-6 sm:w-7 md:w-8" />
              </div>
            )
          )}
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-light to-purple-dark w-full sm:w-3/4 md:w-1/2 m-auto h-px"></div>
      <p className="text-xs sm:text-sm md:text-base text-center">Copyright © {new Date().getFullYear()} Hyro. All rights reserved.</p>
    </div>
  );
}
