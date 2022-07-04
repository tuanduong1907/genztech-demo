import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AppButton from "../../controls/app-button/AppButton";
import SvgLogo from "../../icons/Logo";
import HeaderMenuList from "../headerMenu/HeaderMenuList";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// styles
const HeaderStyles = styled.header`
  z-index: 10;
  height: ${(props) => props.theme.header};
  display: flex;
  align-items: center;
  border-bottom: 1px solid #05427f;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      142.88deg,
      rgba(52, 52, 52, 0.35) -3.53%,
      rgba(52, 52, 52, 0) 103.36%
    );
    backdrop-filter: blur(40px);
  }
  .header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .menu-icon {
    height: 26px;
    width: 26px;
    fill: #fff;
    display: none;
  }
  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    height: 65px;
    .menu-icon {
      display: block;
      z-index: 20;
    }
    .contact-btn {
      position: fixed;
      bottom: 20px;
      left: 12px;
      z-index: 2;
      animation: fadeIn linear 2s;
    }
  }
`;
// end styles

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowOverlay(true);
      } else {
        setShowOverlay(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <HeaderStyles className={`HeaderStyles`}>
      {showOverlay ? <div className="overlay"></div> : ""}

      <div className="container header-main">
        <Link href="/">
          <a>
            <SvgLogo></SvgLogo>
          </a>
        </Link>
        {!showMenu ? (
          <AiOutlineMenu
            className="menu-icon"
            onClick={() => setShowMenu(!showMenu)}
          ></AiOutlineMenu>
        ) : (
          <AiOutlineClose
            className="menu-icon"
            onClick={() => setShowMenu(!showMenu)}
          ></AiOutlineClose>
        )}

        <HeaderMenuList
          className={`${showMenu ? "active" : ""}`}
        ></HeaderMenuList>
        <AppButton className="contact-btn" primary>
          Đăng kí tư vấn
        </AppButton>
      </div>
    </HeaderStyles>
  );
};
