import React from 'react';
import './Banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([ Pagination, Autoplay])
// const bullet = ['1번','2번','3번','4번']

const Banner = () => {
    return (
        <div className='main_banner'>
        <Swiper
          className="banner"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
            // renderBullet: function (index, className) {
            //   return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            // } }}
          loop={true}
          // autoplay={true}
        >
          
          {/* 배너 1번 */}
          <SwiperSlide>
            <div className='chart_banner'>
              <div className='banner_top'>
                <a href="https://awards.hanteo.com/?l=ko&m=false">
                  <img src="https://www.hanteochart.com/static/media/main_banner_4_en.0af0a667e8ae82ac8622.webp" alt="no img" />
                </a>
              </div>
              <div className='banner_bottom'>
                <div className="row_top">
                  <div className="text_top">
                    [HMA] HANTEO MUSIC AWARDS 한터 뮤직 어워드 2022 🌈
                  </div>
                  <div className="btn_top">
                  <a href="https://awards.hanteo.com/?l=ko&m=false">
                  <button className='btn_top'>
                    참여하기
                  </button>
                  </a>
                  </div>
                </div>
                <div className='row_bottom'>
                  <div className="text_bottom">2022.12.05 ~ 2022.02.11 (KST)</div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 배너 2번 */}
          <SwiperSlide>
            <div className='chart_banner'>
              <div className='banner_top'>
                <a href="https://www.hanteochart.com/">
                  <img src="https://www.hanteochart.com/static/media/main_banner_1_en.6b733bb0b856f79c8d86.webp" alt="no img" />
                </a>
              </div>
              <div className='banner_bottom'>
                <div className="row_top">
                  <div className="text_top">
                    한터 차트, 전세계 단 하나뿐인 실시간 음악 차트 ❤️
                  </div>
                  <div className="btn_top">
                  <a href="https://www.hanteochart.com/">
                  <button className='btn_top'>
                    입장하기
                  </button>
                  </a>
                  </div>
                </div>
                {/* <div className='row_bottom'>
                  <div className="text_bottom">2022.12.05 ~ 2022.02.11 (KST)</div>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
          
          {/* 배너 3번 */}
          <SwiperSlide>
          <div className='chart_banner'>
              <div className='banner_top'>
                <a href="https://hanteo.zendesk.com/hc/en-us/articles/12640169902745">
                <img src="https://www.hanteochart.com/static/media/main_banner_2_en.e65aeca4b78a92ac2617.webp" alt="no img" />
                </a>
              </div>
              <div className='banner_bottom'>
                <div className="row_top">
                  <div className="text_top">
                    한터 차트 4.0 베타 버전 출시 !
                  </div>
                  <div className="btn_top">
                  <a href="https://www.hanteochart.com/">
                  <button className='btn_top'>
                    입장하기
                  </button>
                  </a>
                  </div>
                </div>
                {/* <div className='row_bottom'>
                  <div className="text_bottom">2022.12.05 ~ 2022.02.11 (KST)</div>
                </div> */}
              </div>
            </div>
          </SwiperSlide>

          {/* 배너 4번 */}
          <SwiperSlide>
          <div className='chart_banner'>
              <div className='banner_top'>
                <a href="https://awards.hanteo.com/?l=ko&m=false">
                <img src="https://www.hanteochart.com/static/media/main_banner_3_en.19679dc4ed5503e1084a.webp" alt="no img" />
                </a>
              </div>
              <div className='banner_bottom'>
                <div className="row_top">
                  <div className="text_top">
                    [아름다운가게 X WHOSFAN] 윤하 & 홀릭스의 따뜻한 연말 만들기 🧤
                  </div>
                  <div className="btn_top">
                  <a href="https://hanteo.zendesk.com/hc/en-us/articles/12640169902745">
                  <button className='btn_top'>
                    참여하기
                  </button>
                  </a>
                  </div>
                </div>
                <div className='row_bottom'>
                  <div className="text_bottom">2022.11.21 ~ 2022.12.30 (KST)</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    )
  }

export default Banner;