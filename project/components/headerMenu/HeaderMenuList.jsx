import React from "react";
import styled from "styled-components";
import { headerMenuData } from "../../../data/headerMenuData";
import HeaderMenuItem from "./HeaderMenuItem";

// styles
const HeaderMenuListStyles = styled.ul`
  &.HeaderMenuListStyles {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 0 16px;
  }
/* Mobile & tablet: width <1024px */
@media only screen and (max-width: 1023px){
    &.HeaderMenuListStyles {
      position: fixed !important;
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      transform: translate(0, 0) !important;
      transform: translateX(200%) !important;
      flex-direction: column;
      width: 100%;
      z-index: 10;
      background: linear-gradient(
        142.88deg,
        rgba(52, 52, 52, 0.35) -3.53%,
        rgba(52, 52, 52, 0) 103.36%
      );
      backdrop-filter: blur(50px);
      transition: linear 0.4s;
      opacity: 0;
      padding-block: 40px;
      &.active {
        transform: translateX(0%) !important;
        opacity: 1;
      }
    }
  }
`;
// end styles

const HeaderMenuList = ({ className = "" }) => {
  return (
    <HeaderMenuListStyles className={`HeaderMenuListStyles ${className}`}>
      {headerMenuData.length > 0 &&
        headerMenuData.map((item) => (
          <HeaderMenuItem
            key={item.title}
            title={item.title}
            link={item.link}
            active={item.active}
          ></HeaderMenuItem>
        ))}
    </HeaderMenuListStyles>
  );
};

export default HeaderMenuList;
