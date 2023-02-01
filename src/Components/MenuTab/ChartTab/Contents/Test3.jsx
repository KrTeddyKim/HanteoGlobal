import React, { useEffect } from 'react';
import './Contents.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FixedSizeList as List } from "react-window";
import axios from 'axios';
import { useCallback, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const Test3 = () => {
    const [posts, setPosts] = useState([]);
    const [hasNextPage, setHasNextPage] = useState(true);
    const page = useRef(1);
    const [ref, inView] = useInView();
  console.log(posts);
  
    const fetch = useCallback(async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/posts?_limit=10&_page=${page.current}`
        );
        setPosts((prevPosts) => [...prevPosts, ...data]);
        setHasNextPage(data.length === 10);
        if (data.length) {
          page.current += 1;
        }
      } catch (err) {
        console.error(err);
      }
    }, []);
  
    useEffect(() => {
      console.log(inView, hasNextPage);
      if (inView && hasNextPage) {
        fetch();
      }
    }, [fetch, hasNextPage, inView]);

    return (
        <div className='contents_container'>
        <Swiper
          className="contents"
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className='chart_artist'>
            <div className='inview' ref={ref} style={{ position: 'fixed', bottom: '100px' }}></div>
      <div style={{ position: 'relative' }}>
        {posts.map((post,idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '1rem',
              border: '1px solid #000',
              padding: '8px',
              background: post.id % 10 === 0 ? 'skyblue' : '',
            }}
          >
            <div>rank: {post.rank}</div>
            <div>value: {post.value}</div>
            <div>Name {post.targetName}</div>
          </div>
        ))}
        {/* <div ref={ref} style={{ position: 'absolute', bottom: '100px' }} /> */}
      </div>  
            </div>
          </SwiperSlide>
          <SwiperSlide><img src="https://www.hanteochart.com/static/media/main_banner_1_en.6b733bb0b856f79c8d86.webp" alt="no img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.hanteochart.com/static/media/main_banner_2_en.e65aeca4b78a92ac2617.webp" alt="no img" /></SwiperSlide>
        </Swiper>
        {/* <Test2 /> */}
      </div>
    )
  }

export default Test3;