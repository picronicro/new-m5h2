import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";

function Layout(props) {
    return (
        <div>
            <NavBar />
            <Outlet />
            <footer>new-m5h2</footer>
        </div>
    );
}

export default Layout;