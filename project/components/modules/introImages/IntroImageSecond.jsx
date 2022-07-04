import React from "react";
import SvgIntroImageSecond from "../../../icons/IntroImageSecond";
import styled from "styled-components";
import Image from "next/image";

// styles
const IntroImageSecondStyles = styled.div`
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 531.64px;
    height: 531.64px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      rgb(192 38 211);
    transform: translate(-50%, -50%);
    filter: blur(100px);
    mix-blend-mode: normal;
    opacity: 0.3;
    z-index: -1;
  }
  span {
    width: 652px !important;
  }
  /* Responsive */
/* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    &::after {
      width: 100%;
    }
  }
`;
// end styles

const IntroImageSecond = ({ ...props }) => {
  return (
    <IntroImageSecondStyles {...props}>
      <Image
        src={require("../../../../public/intro-2.png")}
        alt=""
        className="img"
      ></Image>
    </IntroImageSecondStyles>
  );
};

export default IntroImageSecond;
