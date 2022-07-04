import React from "react";
import styled from "styled-components";

// styles
const IntroLayoutStyles = styled.section``;
// end styles

const IntroLayout = ({ className }) => {
  return (
    <IntroLayoutStyles
      className={`IntroLayoutStyles ${className}`}
    ></IntroLayoutStyles>
  );
};

export default IntroLayout;
