const Vector = ({
  variant,
  ...props
}: {
  variant?: "home-left" | "home-right" | "about" | "used" | "build" | "footer";
} & React.ComponentProps<"svg">) => {
  if (variant === "home-left") {
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
          stroke-opacity="0.06"
          stroke-width="6"
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
            <stop stop-color="#343045" />
            <stop offset="0.151042" stop-color="#C0B7E8" />
            <stop offset="0.760417" stop-color="#8176AF" />
            <stop offset="0.973958" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "home-right") {
    return (
      <svg
        width="736"
        height="846"
        viewBox="0 0 736 846"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M733 170C643.774 184.843 473.913 269.224 508.271 487.998C542.63 706.772 396.407 813.155 319 839"
          stroke="url(#paint0_linear_117_38)"
          stroke-width="6"
        />
        <path
          d="M738.5 420.5C491.667 408.333 -0.900015 474.9 3.49999 838.5"
          stroke="url(#paint1_linear_117_38)"
          stroke-width="6"
        />
        <path
          d="M225.193 0C221.912 140.127 259.209 433.314 434.642 485.053C610.075 536.792 613.776 746.576 593.697 845"
          stroke="url(#paint2_linear_117_38)"
          stroke-width="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_117_38"
            x1="683.5"
            y1="195"
            x2="428"
            y2="761"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#343045" />
            <stop offset="0.276042" stop-color="#8176AF" />
            <stop offset="0.739583" stop-color="#C0B7E8" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_117_38"
            x1="700.5"
            y1="412"
            x2="14.5"
            y2="777"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#343045" />
            <stop offset="0.213542" stop-color="#C0B7E8" />
            <stop offset="0.71875" stop-color="#8176AF" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_117_38"
            x1="238.5"
            y1="39.5"
            x2="585"
            y2="814"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0104167" stop-color="#343045" />
            <stop offset="0.229167" stop-color="#C0B7E8" />
            <stop offset="0.776042" stop-color="#8176AF" />
            <stop offset="1" stop-color="#343045" />
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
          stroke-opacity="0.13"
          stroke-width="6"
        />
        <path
          d="M-4.5 359.5C153.667 306.167 504.6 231.5 643 359.5C816 519.5 1071.5 543.5 1186.5 431C1278.5 341 1394.17 355.833 1440.5 374.5"
          stroke="url(#paint1_linear_117_39)"
          stroke-opacity="0.13"
          stroke-width="6"
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
            <stop stop-color="#211E2E" />
            <stop offset="0.3125" stop-color="#C0B7E8" />
            <stop offset="0.765625" stop-color="#8176AF" />
            <stop offset="0.994792" stop-color="#211E2E" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_117_39"
            x1="-5"
            y1="348"
            x2="1462"
            y2="348"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#343045" />
            <stop offset="0.224242" stop-color="#C0B7E8" />
            <stop offset="0.786458" stop-color="#8176AF" />
            <stop offset="0.96875" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "used") {
    return (
      <svg
        width="1440"
        height="820"
        viewBox="0 0 1440 820"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-3 231.214C96.569 254.827 300.21 358.641 318.223 584.988C336.235 811.336 680.641 830.311 850.592 811.505C959 791.003 1139.69 689.084 995.192 445.43C850.692 201.775 1230.86 48.9539 1439 3"
          stroke="url(#paint0_linear_11_14)"
          stroke-opacity="0.13"
          stroke-width="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11_14"
            x1="718"
            y1="3"
            x2="718"
            y2="817"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0260417" stop-color="#C0B7E8" />
            <stop offset="0.265625" stop-color="#C0B7E8" />
            <stop offset="0.71875" stop-color="#8176AF" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "build") {
    return (
      <svg
        width="1440"
        height="169"
        viewBox="0 0 1440 169"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-9 21.7335C6.47753 71.4205 88.0505 181.243 245.37 106.768C350.5 57 405.361 2.72575 539.107 91.2619C672.853 179.798 776.317 173.796 841.423 82.2582C906.53 -9.27916 1076.11 -33.7892 1139.7 74.7552C1203.29 183.3 1417.79 196.305 1440 106.768"
          stroke="url(#paint0_linear_11_136)"
          stroke-width="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11_136"
            x1="0.49999"
            y1="84.9999"
            x2="1440"
            y2="84.9998"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#343045" />
            <stop offset="0.302083" stop-color="#C0B7E8" />
            <stop offset="0.739583" stop-color="#8176AF" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "footer") {
    return (
      <svg
        width="1440"
        height="270"
        viewBox="0 0 1440 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1439.5 3C1315.17 14.3333 1084.71 109.757 957 215C795 348.5 543.167 194 391 97C283.5 30 55.3 -36.3 2.5 234.5"
          stroke="url(#paint0_linear_13_65)"
          stroke-opacity="0.13"
          stroke-width="6"
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
            <stop stop-color="#343045" />
            <stop offset="0.348958" stop-color="#C0B7E8" />
            <stop offset="0.6875" stop-color="#8176AF" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
};

export { Vector };
