import React from "react";
import styled from "styled-components";

// styles
const CircleStyles = styled.div`
  &.CircleStyles {
    width: ${(props) => props.size || "55px"};
    height: ${(props) => props.size || "55px"};
    border-radius: 100rem;
    background: linear-gradient(135deg, rgba(217, 217, 217, 0.5) 14.55%, rgba(217, 217, 217, 0) 80%);
    mix-blend-mode: overlay;
  }
`;
// end styles

const AppCircle = ({ className, ...props }) => {
  return (
    <CircleStyles
      className={`CircleStyles ${className}`}
      {...props}
    ></CircleStyles>
  );
};

export default AppCircle;
