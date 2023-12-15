import React, { useState, useEffect } from "react"

import { useLocation, useNavigate } from "react-router-dom"
import "./style.css"

function Menu() {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuShow, setmenuShow] = useState(false)

    const routing = (para) => {
        navigate(para);
        // setShow(true)
        // setPopUp(false)
    }

    const scrollHandle = () => {
        console.log(window.scrollY);
        window.scrollY >= 300 ? setmenuShow(true) : setmenuShow(false)
        console.log(menuShow);
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
            <div className="menuItems">
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "active" : ""}`} onClick={() => { routing("/") }}>Home</div>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>Services</div>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>Services</div>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>Services</div>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>Services</div>

            </div>
        </div>
    )
}

export default Menu