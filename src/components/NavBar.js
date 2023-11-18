import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <div>
            <div><NavLink to="/">home</NavLink></div>
            <div><NavLink to="/form">make a post</NavLink></div>
        </div>
    );
}

export default NavBar;
