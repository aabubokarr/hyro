const Vector = ({
  variant,
  ...props
}: {
  variant?: "home" | "about" | "footer";
} & React.ComponentProps<"svg">) => {
  if (variant === "home") {
    return (
      <svg
        width="243"
        height="565"
        viewBox="0 0 243 565"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M1.5 3C104.5 41.1667 293.4 206.8 225 564"
          stroke="url(#paint0_linear_2_34)"
          strokeOpacity="0.06"
          strokeWidth="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_34"
            x1="-23.5"
            y1="-37.5"
            x2="333"
            y2="602.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#343045" />
            <stop offset="0.151042" stopColor="#C0B7E8" />
            <stop offset="0.760417" stopColor="#8176AF" />
            <stop offset="0.973958" stopColor="#343045" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "about") {
    return (
      <svg
        width="1280"
        height="504"
        viewBox="0 0 1440 504"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M1442.5 215C1387.5 104.333 1242.8 -83.7999 1104 49.0001C930.5 215 761.5 331.5 554.5 203.5C347.5 75.5001 34.5 175.5 -6.5 260"
          stroke="url(#paint0_linear_117_39)"
          strokeOpacity="0.13"
          strokeWidth="6"
        />
        <path
          d="M-4.5 359.5C153.667 306.167 504.6 231.5 643 359.5C816 519.5 1071.5 543.5 1186.5 431C1278.5 341 1394.17 355.833 1440.5 374.5"
          stroke="url(#paint1_linear_117_39)"
          strokeOpacity="0.13"
          strokeWidth="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_117_39"
            x1="-7"
            y1="105.5"
            x2="1443"
            y2="89.0001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#211E2E" />
            <stop offset="0.3125" stopColor="#C0B7E8" />
            <stop offset="0.765625" stopColor="#8176AF" />
            <stop offset="0.994792" stopColor="#211E2E" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_117_39"
            x1="-5"
            y1="348"
            x2="1462"
            y2="348"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#343045" />
            <stop offset="0.224242" stopColor="#C0B7E8" />
            <stop offset="0.786458" stopColor="#8176AF" />
            <stop offset="0.96875" stopColor="#343045" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "footer") {
    return (
      <svg
        width="1380"
        height="270"
        viewBox="0 0 1440 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1439.5 3C1315.17 14.3333 1084.71 109.757 957 215C795 348.5 543.167 194 391 97C283.5 30 55.3 -36.3 2.5 234.5"
          stroke="url(#paint0_linear_13_65)"
          strokeOpacity="0.13"
          strokeWidth="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_13_65"
            x1="1439.5"
            y1="3.63123"
            x2="2.5"
            y2="3.63112"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#343045" />
            <stop offset="0.348958" stopColor="#C0B7E8" />
            <stop offset="0.6875" stopColor="#8176AF" />
            <stop offset="1" stopColor="#343045" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
};

export { Vector };
