import React from "react";
import styled from "styled-components";

const LoadingIntroStyles = styled.div`
  .dots-loading {
    display: flex;
    justify-content: center;
  }
  .dots-loading > div {
    width: 7px;
    height: 7px;
    border-radius: 100rem;
    background-color: #f15a24;
    margin: 0 4px;
    animation: dotLoading 1s forwards infinite linear;
  }

  .dots-loading > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  .dots-loading > div:nth-child(3) {
    animation-delay: 0.3s;
  }
  .dots-loading > div:nth-child(4) {
    animation-delay: 0.4s;
  }
  .dots-loading > div:nth-child(5) {
    animation-delay: 0.5s;
  }
  .dots-loading > div:nth-child(6) {
    animation-delay: 0.6s;
  }
  .dots-loading > div:nth-child(7) {
    animation-delay: 0.7s;
  }
  .dots-loading > div:nth-child(8) {
    animation-delay: 0.8s;
  }

  @keyframes dotLoading {
    to {
      opacity: 0;
    }
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    .dots-loading > div {
      width: 5px;
      height: 5px;
      margin: 0 2px;
    }
  }
`;

const AppLoadingIntro = ({ className }) => {
  return (
    <LoadingIntroStyles className={className}>
      <div className="dots-loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingIntroStyles>
  );
};

export default AppLoadingIntro;
