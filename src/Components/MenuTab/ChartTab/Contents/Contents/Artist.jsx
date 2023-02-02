import React from 'react';
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import datetime from '../../../../../asset/db/datetime.json'

const Artist = () => {
  const [posts, setPosts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const page = useRef(1);
  const [ref, inView] = useInView();
  const resultDatetime = datetime.resultDatetime.value;


  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/artist?_limit=10&_page=${page.current}`
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
      <div className='chart_artist'>
            
            <div className='chart_item indicator'>
            <div className='inview' ref={ref} style={{ position: 'fixed', bottom: '70px' }}></div>
              <div className='left'>
                <div className='row_container'>
                  <div className="chart_genre_name">Star</div>
                  <div className="chart_resultDatetime">{resultDatetime}</div>
                </div>
              </div>
              <div className="right">
                <div className="stat_container">
                  <div className="stat">Star index</div>
                </div>
              </div>
            </div>
      <div className='chart_item rank_data'>
        {posts.map((post,idx) => (
          <div
          className='rank_data_container'
            key={idx}
            style={{
              padding: '5px',
            }}
          >
            <div className='left'>
              <div className='img_container'>
              <img className='img' src={post.targetImg} alt="no img" />
              </div>
              <div className='rank_container'>
                <div className='rank'>{post.rank}</div>
              </div>
              <div className='name_container'>
                <div className='name'>{post.targetName}</div>
              </div>
            </div>
            <div className='right'>
              <div className='stat_container'>
                <div className='stat'>{Math.round(post.value)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>  
      </div>
    );
};

export default Artist;
