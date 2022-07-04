import React from "react";
import AppHeading from "../../../controls/app-heading/AppHeading";
import styled from "styled-components";
import { text14, text16, text18 } from "../../../../shared/utils/mixin-styled";
import IntroImageSecond from "../introImages/IntroImageSecond";
import AppCircle from "../../../controls/app-circle/AppCircle";

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
      margin-top: 100px;
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
    /* Mobie: width < 740px */
    @media only screen and (max-width: 739px) {
      .intro-text {
        ${text14}
        text-align: justify;
      }
    }
  }
`;
// end styles

const HomeIntroduceSecond = () => {
  return (
    <HomeIntroSecond className="HomeIntroSecond container">
      <AppCircle className="absolute circle-1"></AppCircle>
      <AppCircle size="135px" className="absolute circle-2"></AppCircle>
      <AppCircle size="90px" className="absolute circle-3"></AppCircle>

      <AppHeading className="text-center">
        Thiết Kế <span className="text-purple">Website</span> Có Tính Sáng Tạo
      </AppHeading>
      <div className="intro-content">
        <p className="intro-text">
          Muốn tạo ấn tượng với người dùng thì bạn cần phải có một giao diện độc
          quyền . Đây là cách giúp người dùng lưu giữ về doanh nghiệp của bạn
          lâu hơn trong tâm trí họ . Thiết kế website theo yêu cũng có nghĩa là
          trang web của bạn được làm hoàn toàn thủ công theo các yêu cầu từ phía
          khách hàng . Website sẽ có tính sáng tạo , độc đáo mà không trùng lẫn
          với một trang web khác .
        </p>
        <p className="intro-text">
          Tùy theo dịch vụ bạn cung cấp , ngành nghề bạn kinh doanh , đối tượng
          khách hàng . Bạn sẽ được đơn vị thiết kế website theo yêu cầu tư vấn
          để có được sản phẩm website là riêng là nhất .{" "}
        </p>
      </div>
      <IntroImageSecond className="intro-image"></IntroImageSecond>
    </HomeIntroSecond>
  );
};

export default HomeIntroduceSecond;
