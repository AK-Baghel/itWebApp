import React, { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa6"

import { IoClose } from "react-icons/io5"

import { useLocation, useNavigate } from "react-router-dom"
import "./style.css"

function Menu() {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuShow, setmenuShow] = useState(false)
    const [show, setShow] = useState(true);


    const routing = (para) => {
        navigate(para);
    }

    const toggleBar = () => {
        setShow(!show);
    }

    const scrollHandle = () => {
        window.scrollY >= 200 ? setmenuShow(true) : "";
        window.scrollY < 30 ? setmenuShow(false) : "";
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandle);
        return () => {
            window.removeEventListener("scroll", scrollHandle);
        };
    }, [menuShow]);



    return (
        <div className={`menuContainer ${menuShow ? 'menuContainerScrollUp' : ""}`}>
            <div className="menuLogo">
                <img className='menuLogoImg' src="https://www.valuecoders.com/wp-content/themes/valuecoders/images/logo-v2.svg" alt="" />
            </div>

            <div className={`menuItems ${show ? 'menuItemsMobile' : ""}`}>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "active" : ""}`} onClick={() => { routing("/") }}>Home</div>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>Services</div>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>Services</div>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>Services</div>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>Services</div>
                <IoClose className=" menuBar menuCross" onClick={toggleBar} />
            </div>



            <FaBars className="menuBar" onClick={toggleBar} />



        </div>
    )
}

export default Menu