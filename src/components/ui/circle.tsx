import type { ReactNode, FC } from "react";

interface CircleProps {
  children: ReactNode;
  desc?: string;
  className?: string;
}

const Circle: FC<CircleProps> = ({
  children,
  desc,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-2 sm:gap-3 ${className} w-full sm:w-auto`}>
      <div
        className="flex items-center justify-center rounded-full text-grey border-[10px] sm:border-[12px] md:border-[14px] lg:border-[16px] xl:border-[18px] border-grey font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-purple-light to-purple-dark w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px] mx-auto"
      >
        {children}
      </div>
      <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center max-w-[120px] sm:max-w-[140px] md:max-w-[160px] mx-auto leading-tight">{desc}</p>
    </div>
  );
};

export default Circle;
