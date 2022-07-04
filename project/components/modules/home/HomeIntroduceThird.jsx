import React from "react";
import AppHeading from "../../../controls/app-heading/AppHeading";
import styled from "styled-components";
import { text14, text18 } from "../../../../shared/utils/mixin-styled";
import IntroImageSecond from "../introImages/IntroImageSecond";
import AppCircle from "../../../controls/app-circle/AppCircle";
import IntroImageThird from "../introImages/IntroImageThird";

// styles
const HomeIntroSecond = styled.section`
  &.HomeIntroSecond {
    position: relative;
    .intro-content {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .intro-text {
      ${text18}
    }
    .intro-image {
      margin-top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .circle-1 {
      top: 70%;
      left: 30%;
      transform: translate(-70%, -30%);
      opacity: 0.1;
    }
    .circle-2 {
      top: 45%;
      left: 60%;
      transform: translate(-45%, -60%);
      opacity: 0.1;
    }
    .circle-3 {
      bottom: 20%;
      right: 15%;
      opacity: 0.1;
    }
    @media only screen and (max-width: 739px) {
      .intro-text {
        ${text14}
        text-align: justify;
      }
    }
  }
`;
// end styles

const HomeIntroduceThird = () => {
  return (
    <HomeIntroSecond className="HomeIntroSecond container">
      <AppCircle className="absolute circle-1"></AppCircle>
      <AppCircle size="135px" className="absolute circle-2"></AppCircle>
      <AppCircle size="90px" className="absolute circle-3"></AppCircle>

      <AppHeading className="text-center">Cam kết bảo hành</AppHeading>
      <div className="intro-content">
        <p className="intro-text">
          - Tất cả giao diện thiết kế hoàn toàn mới và theo yêu cầu của quý
          khách hàng. Có Demo bản vẽ tham khảo trước khi thống nhất lập trình.
        </p>
        <p className="intro-text">- Bảo hành website vĩnh viễn.</p>
        <p className="intro-text">
          - Bàn giao tên miền, hosting, mã nguồn website để khách hàng sở hữu
          toàn bộ website của mình.
        </p>
        <p className="intro-text">
          - Hướng dẫn quản trị web trực tiếp, đồng thời cung cấp tài liệu, video
          hướng dẫn.
        </p>
        <p className="intro-text">- Backup website 1 lần / tuần.</p>
        <p className="intro-text">
          - Tặng Update dữ liệu miễn phí 40 sản phẩm/ Bài viết/ Dự án/ ... tất
          cả đều được tối ưu thân thiện với google.
        </p>
      </div>
      <IntroImageThird className="intro-image"></IntroImageThird>
    </HomeIntroSecond>
  );
};

export default HomeIntroduceThird;
