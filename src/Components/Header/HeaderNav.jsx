import React from 'react';
import { Link } from "react-router-dom";

const HeaderNav = () => {
    return (
        <div>
            <Link to="/">Chart</Link>
            <Link to="/Whook">Whook</Link>
        </div>
    );
};

export default HeaderNav;