import "./ContentsApp.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Artist from "./Contents/Artist";
import PhysicalRecord from "./Contents/PhysicalRecord";
import Global from "./Contents/Global";

const ContentsApp = () => {
  // 슬라이드 후 최상단 뷰 이동
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="main_contents">
      <Swiper
        className="contents"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSlideChange={scrollTop}
      >
        <SwiperSlide>
          <div className="chart_container">
            <Artist />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="chart_container">
            <PhysicalRecord />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="chart_container">
            <Global />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ContentsApp;
