import React from "react";
import styled from "styled-components";
import { text16 } from "../../../shared/utils/mixin-styled";

// styles
const ButtonStyles = styled.button`
  height: ${(props) => props.height || "40px"};
  padding-inline: 18px;
  border-radius: 100rem;
  color: #fff;
  border: none;
  font-weight: 500;
  ${text16};
  transition: linear 0.2s;
  &.secondary {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    &:hover {
      background-color: ${(props) => props.theme.primary};
    }
  }
  &.primary {
    background-color: ${(props) => props.theme.primary};
    &:hover {
      filter: brightness(125%);
    }
  }
`;
// end styles

const AppButton = ({ className = "", children, primary = false, ...props }) => {
  return (
    <ButtonStyles
      className={`ButtonStyles ${
        primary ? "primary" : "secondary"
      } ${className}`}
      {...props}
    >
      {children}
    </ButtonStyles>
  );
};

export default AppButton;
