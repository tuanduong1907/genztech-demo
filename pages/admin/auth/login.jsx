import Auth from "./index";
import AppLogin from "../../../project/components/admin/app-login/AppLogin";
import styled from "styled-components";
// Styles
const LoginStyles = styled.div`
  width: 100%;
`;

const Login = () => {
  return (
    <Auth text="Vui lòng đăng nhập để tiếp tục!">
      <LoginStyles className="admin-login">
        <AppLogin />
      </LoginStyles>
    </Auth>
  );
};

export default Login;
