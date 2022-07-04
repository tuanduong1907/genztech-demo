import React from "react";
import styled from "styled-components";
import { text16, text34 } from "../../../../shared/utils/mixin-styled";
import AppHeading from "../../../controls/app-heading/AppHeading";
import SvgIconCheck from "../../../icons/IconCheck";

// styles
const IntroContentStyles = styled.div`
  &.IntroContentStyles {
    flex: 1;
    margin-top: 20px;
    .intro-content {
      max-width: 500px;
      width: 100%;
    }
    .heading {
    animation: fadeRight linear 0.8s;

    }
    .service-list {
      margin-top: 34px;
    }
    .service-item {
      display: flex;
      align-items: center;
      gap: 0 8px;
      margin-bottom: 20px;
      &:first-child {
        animation: fadeInSecondary1 linear 3s;
      }
      &:nth-child(2) {
        animation: fadeInSecondary2 linear 3s;
      }
      &:nth-child(3) {
        animation: fadeInSecondary3 linear 3s;
      }
      &:nth-child(4) {
        animation: fadeInSecondary4 linear 3s;
      }
      &:last-child {
        margin-bottom: 0;
        animation: fadeInSecondary5 linear 3s;
      }
    }
    .service-text {
      ${text16}
      font-weight: 400;
      color: #fff;
    }
  }
`;
// end styles

const IntroContent = () => {
  return (
    <IntroContentStyles className="IntroContentStyles">
      <div className="intro-content">
        <AppHeading className="heading">
          Thiết Kế <span className="text-primary">Website</span> Chuyên Nghiệp,
          Chuẩn SEO, Giá Rẻ
        </AppHeading>
        <ul className="service-list">
          <li className="service-item">
            <SvgIconCheck></SvgIconCheck>
            <h4 className="service-text">
              Thiết kế giao diện hiện đại, dễ sử dụng
            </h4>
          </li>
          <li className="service-item">
            <SvgIconCheck></SvgIconCheck>
            <h4 className="service-text">Tối ưu hóa tìm kiếm trên google</h4>
          </li>
          <li className="service-item">
            <SvgIconCheck></SvgIconCheck>
            <h4 className="service-text">Đồng bộ với tất cả thiết bị</h4>
          </li>
          <li className="service-item">
            <SvgIconCheck></SvgIconCheck>
            <h4 className="service-text">Bảo mật cao, dễ dàng nâng cấp</h4>
          </li>
          <li className="service-item">
            <SvgIconCheck></SvgIconCheck>
            <h4 className="service-text">Bảo hành vĩnh viễn</h4>
          </li>
        </ul>
      </div>
    </IntroContentStyles>
  );
};

export default IntroContent;
