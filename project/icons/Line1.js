import * as React from "react";

const SvgLine1 = (props) => (
  <svg
    width={1440}
    height={779}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2821.5-98.5c0 242.071-163.09 461.31-426.94 620.058C2130.71 680.3 1766.18 778.5 1363.5 778.5c-402.678 0-767.211-98.2-1031.057-256.942C68.586 362.81-94.5 143.571-94.5-98.5c0-242.071 163.086-461.31 426.943-620.058C596.289-877.3 960.822-975.5 1363.5-975.5c402.68 0 767.21 98.2 1031.06 256.942C2658.41-559.81 2821.5-340.571 2821.5-98.5Z"
      stroke="url(#Line1_svg__a)"
    />
    <defs>
      <linearGradient
        id="Line1_svg__a"
        x1={1363.5}
        y1={570.634}
        x2={1363.5}
        y2={779}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C801DA" stopOpacity={0.56} />
        <stop offset={1} stopColor="#00C2FF" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgLine1;
