import React from 'react';
import { Link } from "react-router-dom";
import "./HeaderNav.scss";

const HeaderNav = () => {
    return (
        <div>
            <Link to="/">차트</Link>
            <Link to="/whook">Whook</Link>
            <Link to="/event">이벤트</Link>
            <Link to="/news">뉴스</Link>
            <Link to="/store">스토어</Link>
            <Link to="/charge">충전소</Link>
        </div>
    );
};

export default HeaderNav;