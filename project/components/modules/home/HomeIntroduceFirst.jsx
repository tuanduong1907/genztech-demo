import React from "react";
import SvgLine1 from "../../../icons/Line1";
import styled from "styled-components";
import IntroImage1 from "../introImages/IntroImage1";
import AppCircle from "../../../controls/app-circle/AppCircle";
import IntroContent from "./IntroContent";
// styles
const HomeIntro1 = styled.section`
  &.HomeIntro1 {
    margin-top: 215px;
    .Intro-main {
      display: flex;
      justify-content: space-between;
      gap: 0 40px;
    }
    .line-1 {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .circle-1 {
      left: 120px;
      top: 0;
      opacity: 0.1;
    }
    .circle-2 {
      top: -60px;
      right: 600px;
      opacity: 0.1;
    }
    .intro-content {
      flex: 1;
    }
    .intro-content {
    }

    /* Responsive */
    /* Mobile & tablet: width <1024px */
    @media only screen and (max-width: 1023px) {

    }
    /* Tablet: width >= 740px and width < 1024px */
    @media only screen and (min-width: 740px) and (max-width: 1023px) {
      .Intro-main {
        align-items: center;
      }
      &.HomeIntro1 {
        margin-top: 140px;
      }
    }
    /* Mobie: width < 740px */
    @media only screen and (max-width: 739px) {
      &.HomeIntro1 {
        margin-top: 100px;
      }
      .Intro-main {
        flex-direction: column;
        gap: 40px;
      }
    }
  }
`;
// end styles

const HomeIntroduceFirst = () => {
  return (
    <HomeIntro1 className="HomeIntro1 relative">
      <SvgLine1 className="line-1 absolute"></SvgLine1>
      <div className="container relative Intro-main">
        <AppCircle className="absolute circle-1"></AppCircle>
        <AppCircle size="135px" className="absolute circle-2"></AppCircle>
        <IntroContent></IntroContent>
        <IntroImage1></IntroImage1>
      </div>
    </HomeIntro1>
  );
};

export default HomeIntroduceFirst;
