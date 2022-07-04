import styled from "styled-components";
import * as mixins from "../../../shared/utils/mixin-styled";
import LottieRegister from "../../../project/app-lottie-animated/lottieRegister/LottieRegister";
import AppHeading from "../../../project/controls/app-heading/AppHeading";

// Styles
const AuthStyles = styled.div`
  width: 100%;
  height: 100vh;
  ${mixins.flexCenter}
  flex-direction: column;
  justify-content: unset;
  h2 {
    margin-top: 12px;
  }
  h4 {
    ${mixins.text14}
    margin-block:8px 32px;
    color: ${props => props.theme.grayColor2};
    font-weight: 400;
  }
`;

const Auth = ({ className, children, text, ...props }) => {
  // hook
  return (
    <AuthStyles
      className={
        "admin-authentication grid-content " + (className ? className : "")
      }
      {...props}
    >
      <LottieRegister width={"100%"} height={300} />
      <AppHeading>Xin chào!</AppHeading>
      {text && <h4>{text}</h4>}
      {children}
    </AuthStyles>
  );
};

export default Auth;
