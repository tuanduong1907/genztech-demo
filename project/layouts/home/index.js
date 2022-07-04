import HomeIntroduceFirst from "../../components/modules/home/HomeIntroduceFirst";
import HomeIntroduceSecond from "../../components/modules/home/HomeIntroduceSecond";
import HomeIntroduceThird from "../../components/modules/home/HomeIntroduceThird";
import HeadSeo from "../../components/SEO";
import Aos from "aos";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <HeadSeo title="Trang Chủ | Genztech.vn" />
      <div className="content mb-300">
        <div data-aos="zoom-in-down">
          <HomeIntroduceFirst></HomeIntroduceFirst>
        </div>
        <div data-aos="zoom-in-down">
          <HomeIntroduceSecond></HomeIntroduceSecond>
        </div>
        <div data-aos="zoom-in-down">
          <HomeIntroduceThird></HomeIntroduceThird>
        </div>
      </div>
    </>
  );
}
