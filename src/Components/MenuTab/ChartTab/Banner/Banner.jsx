import React from 'react';
import './Banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([ Pagination, Autoplay])

const Banner = () => {
    return (
        <div>
        <Swiper
          className="banner"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={true}
        >
          <SwiperSlide>
            <div className='chart_banner1'>
              <a href="https://awards.hanteo.com/?l=ko&m=false">
                <img src="https://www.hanteochart.com/static/media/main_banner_4_en.0af0a667e8ae82ac8622.webp" alt="no img" />
              </a>
              <p>배너슬라이드1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide><img src="https://www.hanteochart.com/static/media/main_banner_1_en.6b733bb0b856f79c8d86.webp" alt="no img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.hanteochart.com/static/media/main_banner_2_en.e65aeca4b78a92ac2617.webp" alt="no img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.hanteochart.com/static/media/main_banner_3_en.19679dc4ed5503e1084a.webp" alt="no img" /></SwiperSlide>
        </Swiper>
      </div>
    )
  }

export default Banner;