import Link from "next/link";
import { Logo } from "../icons/logo";
import { SocialIcon } from "../icons/social";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-8 mt-24 mb-10">
      <Logo className="animate-pulse"></Logo>
      <div className="flex flex-col gap-3">
        <p>FOLLOW US ON:</p>
        <div className="flex items-center gap-5">
          {["instagram", "linkedin", "youtube", "twitter", "tiktok"].map(
            (name) => (
              <div
                key={name}
                className="w-16 h-16 border-2 flex flex-col items-center justify-center rounded-full cursor-pointer"
              >
                <SocialIcon name={name} className="w-8" />
              </div>
            )
          )}
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-light to-purple-dark w-1/2 m-auto h-px"></div>
      <p>Copyright © {new Date().getFullYear()} Hyro. All rights reserved.</p>
    </div>
  );
}
