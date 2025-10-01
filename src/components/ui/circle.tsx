import React from "react";

interface CircleProps {
  children: React.ReactNode;
  desc?: string;
  size?: number;
  className?: string;
}

const Circle: React.FC<CircleProps> = ({
  children,
  desc,
  size = 120,
  className,
}) => {
  return (
    <div className="flex flex-col gap-2" style={{ width: size }}>
      <div
        className={`flex items-center justify-center rounded-full text-grey border-[18px] border-grey font-bold text-6xl bg-gradient-to-r from-purple-light to-purple-dark ${
          className || ""
        }`}
        style={{
          width: size,
          height: size,
        }}
      >
        {children}
      </div>
      <p className="font-bold text-xl text-center">{desc}</p>
    </div>
  );
};

export default Circle;
