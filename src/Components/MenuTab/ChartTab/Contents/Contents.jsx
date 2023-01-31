import React from 'react';
import './Contents.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import artist from "../../../../artist.json"
import { FixedSizeList as List } from "react-window";
import Test from './Test';

const Contents = () => {

    return (
        <div>
        <Swiper
          className="contents"
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className='chart_artist'>
            <Test />
            </div>
          </SwiperSlide>
          <SwiperSlide><img src="https://www.hanteochart.com/static/media/main_banner_1_en.6b733bb0b856f79c8d86.webp" alt="no img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.hanteochart.com/static/media/main_banner_2_en.e65aeca4b78a92ac2617.webp" alt="no img" /></SwiperSlide>
        </Swiper>
      </div>
    )
  }

export default Contents;