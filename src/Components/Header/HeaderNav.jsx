import React from 'react';
import { Link } from "react-router-dom";
import "./HeaderNav.scss";

const HeaderNav = () => {
    return (
        <div className='header_navbar'>
            <div className='inner'>
                <Link className='chart nav_item' to="/">차트</Link>
                <Link className='whook nav_item' to="/whook">Whook</Link>
                <Link className='event nav_item' to="/event">이벤트</Link>
                <Link className='news nav_item' to="/news">뉴스</Link>
                <Link className='store nav_item' to="/store">스토어</Link>
                <Link className='charge nav_item' to="/charge">충전소</Link>
            </div>
        </div>
    );
};

export default HeaderNav;