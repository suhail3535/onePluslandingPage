import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../Images/OnePlus-Logo.png";
import { links } from "../data";
import "../Styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

return (

        <div className="nav_container">
            <div className="logo_div">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />

                </Link>

            </div>

            <div className={`nav_links ${isShow ? "show_nav" : "hide_nav"}`}>
                {links.map(({ name, path }, index) => {
                    return (
                        <button key={index}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "active-nav" : ""
                                }>
                                {name}
                            </NavLink>
                        </button>
                    );
                })}
            </div>


            <div className="dropdown-menu">
                <button className="hover-account">
                    <AiOutlineSearch />
                </button>
                <button className="hover-account">
                    <AiOutlineShoppingCart />
                </button>
                <button className="hover-account">
                    <HiOutlineUserCircle />
                </button>


            </div>

            <button className="nav_toggle_btn" onClick={() => setIsShow(!isShow)}>
                {isShow ? <MdOutlineClose /> : <FaBars />}
            </button>
        </div>

    );
};

export default Navbar;
