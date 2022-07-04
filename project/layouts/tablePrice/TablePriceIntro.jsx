import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import { text16 } from "../../../shared/utils/mixin-styled";
import AppHeading from "../../controls/app-heading/AppHeading";
import SvgIconCheck from "../../icons/IconCheck";
import Aos from "aos";

// styles
const TablePriceIntroStyles = styled.section`
  &.TablePriceIntroStyles {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .service-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 34px;
    }
    .service-item {
      display: flex;
      align-items: center;
      gap: 0 8px;
    }
    .service-text {
      font-weight: 400;
      color: #fff;
      ${text16}
    }
    .banner-image {
      position: relative;
      span {
        width: 395px !important;
      }
    }
  }
`;
// end styles

const TablePriceIntro = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <TablePriceIntroStyles className="TablePriceIntroStyles">
      <div className="banner-content">
        <AppHeading
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="heading"
        >
          Bảng giá thiết kế website
        </AppHeading>
        <ul className="service-list">
          <li
            data-aos="zoom-out-right"
            data-aos-offset="500"
            data-aos-duration="1100"
            data-aos-easing="ease-in-sine"
            className="service-item"
          >
            <SvgIconCheck></SvgIconCheck>
            <h4 className="service-text">
            Công nghệ web hàng đầu
            </h4>
          </li>
          <li
            data-aos="zoom-out-right"
            data-aos-offset="600"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
            className="service-item"
          >
            <SvgIconCheck></SvgIconCheck>
            <h4 className="service-text">Tiết kiệm chi phí</h4>
          </li>
          <li
            data-aos="zoom-out-right"
            data-aos-offset="400"
            data-aos-duration="1300"
            data-aos-easing="ease-in-sine"
            className="service-item"
          >
            <SvgIconCheck></SvgIconCheck>
            <h4 className="service-text">Bàn giao web nhanh chóng</h4>
          </li>
          <li
            data-aos="zoom-out-right"
            data-aos-offset="400"
            data-aos-duration="1400"
            data-aos-easing="ease-in-sine"
            className="service-item"
          >
            <SvgIconCheck></SvgIconCheck>
            <h4 className="service-text">Đồng bộ với tất cả thiết bị</h4>
          </li>
        </ul>
      </div>
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        className="banner-image"
      >
        <Image
          src={require("../../../public/banner-price.png")}
          alt=""
          className="img"
        ></Image>
      </div>
    </TablePriceIntroStyles>
  );
};

export default TablePriceIntro;
