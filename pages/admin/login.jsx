import AppButton from "../../project/controls/app-button/AppButton";
// hook
import { useState } from "react";
import styled from "styled-components";
import * as mixins from "../../shared/utils/mixin-styled";
// Styles
const LoginStyles = styled.div`
  width: 100%;
  height: 100vh;
  ${mixins.flexCenter}
  flex-direction: column;
  h1 {
    ${mixins.text26}
    margin-bottom: 30px;
  }
  form {
    width: 80%;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-bottom: 20px;
  }
  .form-input {
    width: 100%;
    padding: 8px 20px;
    border: 1px solid ${(props) => props.theme.primaryColor};
    height: 40px;
    border-radius: 4px;
    input {
      width: 100%;
      border: none;
      outline: none;
      background: transparent;
    }
  }
  .form-submit {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Login = () => {
  // state
  const [data, setData] = useState({
    TenDangNhap: "",
    MatKhau: "",
  });

  // Handle Function
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const HandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <LoginStyles className="grid-content">
      <h1>Đăng nhập</h1>
      <form autoComplete="off" id="login-form" onSubmit={HandleSubmit}>
        <div className="form-group">
          <label htmlFor="">Tên đăng nhập</label>
          <div className="form-input">
            <input
              type="text"
              name="TenDangNhap"
              value={data.TenDangNhap}
              onChange={HandleChange}
              id="TenDangNhap"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Mật khẩu</label>
          <div className="form-input">
            <input
              type="password"
              name="MatKhau"
              value={data.MatKhau}
              onChange={HandleChange}
              id="MatKhau"
            />
          </div>
        </div>
        <div className="form-submit">
          <AppButton className="primary rounded" width="200px">
            Login
          </AppButton>
        </div>
      </form>
    </LoginStyles>
  );
};

export default Login;
