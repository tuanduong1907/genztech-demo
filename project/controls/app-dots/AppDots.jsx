import React from "react";
import styled from "styled-components";

//styles
const DotsStyles = styled.div`
  width: 17.15px;
  height: 17.15px;
  border-radius: 100rem;
`;
//end styles

const AppDots = ({...props}) => {
  return <DotsStyles {...props}></DotsStyles>;
};

export default AppDots;
