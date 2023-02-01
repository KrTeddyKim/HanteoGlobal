import React from 'react';
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import datetime from '../../../../asset/db/datetime.json'

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
            <div className='inview' ref={ref} style={{ position: 'fixed', bottom: '100px' }}>
            </div>
            <div className="chart_genre_name">Artist</div>
            <div className="datetime">{resultDatetime}</div>
      <div style={{ position: 'relative' }}>
    
        {posts.map((post,idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '1rem',
              border: '1px solid #000',
              padding: '8px',
            }}
          >
            <div>{post.resultDatetime}</div>
            <div className='img_container'>
            <img src={post.targetImg} alt="no img" />
            </div>
            <div>rank: {post.rank}</div>
            <div>Name: {post.targetName}</div>
            <div>value: {post.value}</div>
          </div>
        ))}
      </div>  
        </div>
    );
};

export default Artist;
