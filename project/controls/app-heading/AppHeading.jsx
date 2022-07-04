import React from "react";
import styled from "styled-components";
import { text26, text30, text34 } from "../../../shared/utils/mixin-styled";

// styles
const HeadingStyles = styled.h2`
  &.HeadingStyles {
    ${text34};
    color: #fff;
    position: relative;
  }
  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    &.HeadingStyles {
      ${text26};
      line-height: 1.5;
    }
  }
`;
// end styles

const AppHeading = ({ children, className, ...props }) => {
  return (
    <HeadingStyles className={`HeadingStyles ${className}`} {...props}>
      {children}
    </HeadingStyles>
  );
};

export default AppHeading;
