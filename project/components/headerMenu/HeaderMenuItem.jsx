import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { text18 } from "../../../shared/utils/mixin-styled";

// styles
const HeaderMenuItemStyles = styled.li`
  &.HeaderMenuItemStyles {
    flex-shrink: 0;
    .menu-link {
      display: block;
      padding: 8px 16px;
      transition: linear 0.1s;
      border-radius: 8px;
      font-weight: 500;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      &.active {
        color: ${(props) => props.theme.primary};
        pointer-events: none;
      }
    }
    /* Mobile & tablet: width <1024px */
    @media only screen and (max-width: 1023px) {
      .menu-link {
        ${text18}
      }
    }
  }
`;
// end styles

const HeaderMenuItem = ({ link, title, active }) => {
  return (
    <HeaderMenuItemStyles className="HeaderMenuItemStyles">
      <Link href={link}>
        <a className={`menu-link ${active ? "active" : ""}`}>{title}</a>
      </Link>
    </HeaderMenuItemStyles>
  );
};

export default HeaderMenuItem;
