import AppForm from "../../../app-form/AppForm";
import AppFormGroup from "../../../app-form/AppFormGroup";
import AppFormSubmit from "../../../app-form/AppFormSubmit";
import AppControls from "../../../controls/app-controls/AppControls";
import AppButton from "../../../controls/app-button/AppButton";
// hook
import { useState } from "react";

const AppLogin = () => {
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
    <AppForm className="app-login" id="login-form" onSubmit={HandleSubmit}>
      <AppFormGroup>
        <AppControls
          type="text"
          name="TenDangNhap"
          placeholder="Tên đăng nhập"
          value={data.TenDangNhap}
          onChange={HandleChange}
        />
      </AppFormGroup>
      <AppFormGroup>
        <AppControls
          type="password"
          placeholder="Mật khẩu"
          name="MatKhau"
          value={data.MatKhau}
          onChange={HandleChange}
        />
      </AppFormGroup>
      <AppFormSubmit>
        <AppButton className="primary rounded" width="100%">
          Đăng Nhập
        </AppButton>
      </AppFormSubmit>
    </AppForm>
  );
};

export default AppLogin;
