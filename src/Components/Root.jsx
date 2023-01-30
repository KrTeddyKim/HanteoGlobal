import React from 'react';
import { Outlet } from "react-router-dom";
import HeaderNav from './Header/HeaderNav';

const Root = () => {
    return (
        <div>
            <HeaderNav />
            <Outlet />
        </div>
    );
};

export default Root;