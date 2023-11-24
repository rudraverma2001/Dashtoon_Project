import React from "react";
import logo from "../image/logo.png"

const Nav=()=>{
    return(
        <>
        <nav>
            <div className="navbar">
                <ul className="nav_list">
                    <li className="list">Home</li>
                    <li className="list">Menu</li>
                    <li className="list">Contact</li>
                    <li className="list">About</li>
                </ul>
                {/* <div className="logo">
                    <img src={logo} alt="kk" />
                </div> */}
            </div>
        </nav>
        </>
    )
}


export default Nav;