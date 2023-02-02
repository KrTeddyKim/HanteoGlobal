import React, { useEffect } from 'react';
import './Contents.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FixedSizeList as List } from "react-window";
// import Test from './Test';
import Test2 from './Test2';
import Artist from './Artist';
import PhysicalRecord from './PhysicalRecord';
import Global from './Global';

// SwiperCore.use([ Pagination ])
// const bullet = ['1번','2번','3번','4번']


const Contents = () => {
  const scrollTop = () => {
    window.scrollTo(0,0);
  }
    return (
        <div className='main_contents'>
        <Swiper
          className="contents"
          spaceBetween={50}
          slidesPerView={1}
          // pagination={{ clickable: true, renderBullet: function (index, className) {
          //   return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>'; }}}
          loop={true}
          onSlideChange={scrollTop}

        >
          <SwiperSlide>
            <div className='chart_container'>
            <Artist />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='chart_container'>
            <PhysicalRecord />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='chart_container'>
            <Global />
            </div>
          </SwiperSlide>


        </Swiper>
        {/* <Test2 /> */}
      </div>
    )
  }

export default Contents;