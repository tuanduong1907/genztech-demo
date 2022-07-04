import * as React from "react";

const SvgIntroLetter = (props) => (
  <svg
    width={111}
    height={68}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M110.704 11.53H90.011v56.463h20.693V11.53Z" fill="#A5ACBA" />
    <path d="M102.575 0H0v56.464h102.575V0Z" fill="#FBB03B" />
    <path
      d="M51.287 56.464h51.288L51.287 21.137 0 56.464h51.287Z"
      fill="#FBBF62"
    />
    <path d="M51.287 0H0l51.287 35.327L102.575 0H51.287Z" fill="#FF9129" />
  </svg>
);

export default SvgIntroLetter;
