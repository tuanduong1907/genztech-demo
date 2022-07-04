import React from "react";
import Image from "next/image";
import AppDots from "../../../controls/app-dots/AppDots";
import AppLoadingIntro from "../../../controls/app-loading-intro/AppLoadingIntro";
import SvgIntroChat from "../../../icons/IntroChat";
import SvgIntroLetter from "../../../icons/IntroLetter";
import SvgIntroSetting1 from "../../../icons/IntroSetting1";
import SvgIntroSetting2 from "../../../icons/IntroSetting2";
import SvgIntroSetting3 from "../../../icons/IntroSetting3";
import styled from "styled-components";

// styles
const IntroImage1Styles = styled.div`
  &.IntroImage1Styles {
    flex: 1;
    position: relative;
    display: inline-block;
    &::after {
      content: "";
      display: block;
      width: 629px;
      height: 629px;
      position: absolute;
      top: 50%;
      left: 50%;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        #0a84ff;
      transform: translate(-50%, -50%);
      filter: blur(100px);
      mix-blend-mode: normal;
      opacity: 0.3;
      z-index: -1;
    }
    .setting-icon-1 {
      left: 120px;
      animation: spin 8s linear infinite;
    }
    .setting-icon-2 {
      left: 210px;
      animation: spin 4s linear infinite;
    }
    .loading-icon-1 {
      left: 290px;
    }
    .loading-icon-2 {
      bottom: 60px;
      left: 20px;
    }
    .dots-icon-pink {
      left: 40px;
      top: 50px;
      animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
    .dots-icon-blue {
      left: 200px;
      bottom: 70px;
      animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
    .dots-icon-green {
      right: 30px;
      bottom: 70px;
      animation: ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
    .setting-icon-3 {
      right: 33px;
      top: 103px;
      animation: bounce 2s infinite;
    }
    .letter-icon {
      animation: bounce 2.5s infinite;
      top: 150px;
      z-index: 1;
    }
    .chat-icon {
      top: 340px;
      right: 150px;
      animation: bounce 3s infinite;
      z-index: 1;
    }
    .setting-1 {
      animation: fadeBottom linear 1s;
      position: absolute;
      z-index: 1;
      top: -5px;
      left: 120px;
    }
    .setting-image-1 {
      animation: spin 10s linear infinite;
      z-index: 1;
      span {
        max-width: 71.68px !important;
      }
    }
    .setting-2 {
      animation: fadeBottom linear 0.8s;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 210px;
    }
    .setting-image-2 {
      animation: spin 4s linear infinite;
      z-index: 1;
      span {
        max-width: 36.8px !important;
      }
    }
    .setting-3 {
      animation: fadeLeft linear 1.1s;
      position: absolute;
      top: 88px;
      right: 15px;
      z-index: 1;
    }
    .setting-image-3 {
      animation: bounce 2.5s infinite;
      z-index: 1;
      span {
        max-width: 119.56px !important;
      }
    }
    .letter {
      animation: fadeRight linear 1.2s;
      position: absolute;
      top: 35%;
      transform: translateY(-35%);
      z-index: 1;
      display: inline-block;
    }
    .letter-image {
      animation: bounce 3s infinite;
      z-index: 1;
      span {
        max-width: 110.7px !important;
      }
    }
    .chat {
      position: absolute;
      bottom: 40px;
      right: 141px;
      animation: fadeTop linear 1.3s;
      z-index: 1;
    }
    .chat-image {
      top: 340px;
      right: 150px;
      animation: bounce 3.5s infinite;
      z-index: 1;
      span {
        max-width: 89.27px !important;
      }
    }
    .intro-img-wrap {
      position: relative;
      span {
        max-width: 585px !important;
      }
    }

    /* Responsive */
    /* Mobile & tablet: width <1024px */
    @media only screen and (max-width: 1023px) {
      &.IntroImage1Styles {
        &::after {
          width: 100%;
        }
      }
    }
    /* Mobie: width < 740px */
    @media only screen and (max-width: 1023px){
      .letter-image {
        span {
          max-width: 70.5px !important;
        }
      }
      .setting-3 {
        top: 66px;
        right: 0px;
      }
      .setting-1 {
        top: -10px;
        left: 90px;
      }
      .setting-2 {
        left: 155px;
      }
      .setting-image-1 {
        span {
          max-width: 53.68px !important;
        }
      }
      .setting-image-2 {
        span {
          max-width: 27.8px !important;
        }
      }
      .setting-image-3 {
        span {
          max-width: 67.56px !important;
        }
      }
      .chat {
        bottom: 35px;
        right: 71px;
      }
      .chat-image {
        span {
          max-width: 50.27px !important;
        }
      }
      .loading-icon-1 {
        left: 240px;
      }
      .loading-icon-2 {
        bottom: 33px;
      }
    }
  }
`;
// end styles

const IntroImage1 = () => {
  return (
    <IntroImage1Styles className="IntroImage1Styles">
      <div className="setting-1">
        <div className="setting-image-1">
          <Image
            src={require("../../../../public/setting-item-1.png")}
            alt=""
            className="img"
          ></Image>
        </div>
      </div>
      <div className="setting-2">
        <div className="setting-image-2">
          <Image
            src={require("../../../../public/setting-item-2.png")}
            alt=""
            className="img"
          ></Image>
        </div>
      </div>
      <div className="setting-3">
        <div className="setting-image-3">
          <Image
            src={require("../../../../public/setting-item-3.png")}
            alt=""
            className="img"
          ></Image>
        </div>
      </div>
      <div className="chat">
        <div className="chat-image">
          <Image
            src={require("../../../../public/chat-item.png")}
            alt=""
            className="img"
          ></Image>
        </div>
      </div>
      <AppLoadingIntro className="absolute loading-icon-1"></AppLoadingIntro>
      <AppLoadingIntro className="absolute loading-icon-2"></AppLoadingIntro>
      <div className="letter">
        <div className="letter-image">
          <Image
            src={require("../../../../public/letter-item.png")}
            alt=""
            className="img"
          ></Image>
        </div>
      </div>
      <AppDots className="absolute bg-pink dots-icon-pink"></AppDots>
      <AppDots className="absolute bg-green dots-icon-green"></AppDots>
      <AppDots className="absolute bg-blue dots-icon-blue"></AppDots>
      <div className="intro-img-wrap">
        <Image
          src={require("../../../../public/intro-1.png")}
          alt=""
          className="img"
        ></Image>
      </div>
    </IntroImage1Styles>
  );
};

export default IntroImage1;
