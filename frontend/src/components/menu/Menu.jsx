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
    const [searchToggle, setSearchToggle] = useState(true)
    const [popUp1, setPopUp1] = useState(false);
    const [popUp2, setPopUp2] = useState(false);



    const routing = (para) => {
        navigate(para);
    }

    const toggleBar = () => {
        setShow(!show);
    }

    const scrollHandle = () => {
        window.scrollY >= 120 ? setmenuShow(true) : "";
        window.scrollY < 30 ? setmenuShow(false) : "";
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandle);
        return () => {
            window.removeEventListener("scroll", scrollHandle);
        };
    }, [menuShow]);



    // useEffect(() => {
    //     if (!searchToggle) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'unset'
    //     }
    // },);

    const openPage = (value) => {
        navigate(`/product/${value}`);
        window.scrollTo(0, 0)
        setPopUp1(false)
        setPopUp2(false)
        setShow(true)
    }



    return (
        <div className={`menuContainer ${menuShow ? 'menuContainerScrollUp menuContainer2' : ""}`}>
            <div className="menuLogo">
                <img className='menuLogoImg' src="https://www.valuecoders.com/wp-content/themes/valuecoders/images/logo-v2.svg" alt="" />
            </div>

            <div className={`menuItems ${show ? 'menuItemsMobile' : ""}`}>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "active" : ""}`} onClick={() => { routing("/") }}>Home</div>
                <div className={`menuItem hoverUnderline specialHover ${location.pathname === "/" ? "" : ""}`} onMouseOver={() => { setPopUp1(true) }} onMouseOut={() => { setPopUp1(false) }}>Services</div>
                {
                    popUp1 &&
                    <div className="headerPopUpBox" onMouseOver={() => { setPopUp1(true) }} onMouseOut={() => { setPopUp1(false) }}>
                        <ul className="headerPopUpBoxItems">
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Software Product Engineering") }}>Software Product Engineering</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Dedicated Software Teams") }}>Dedicated Software Teams</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("QA & Testing") }}>QA & Testing</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Cloud Services") }}>Cloud Services</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Application Development") }}>Application Development</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("eCommerce") }}>eCommerce</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Data Engineering") }}>Data Engineering</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("AI & ML") }}>AI & ML</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("For Startups") }}>For Startups</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("For Enterprises") }}>For Enterprises</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("For Agencies") }}>For Agencies</li>
                        </ul>
                        <div className="headerPopUpBoxButton" onClick={() => { navigate('/items'); window.scrollTo(0, 0); setPopUp1(false) }}>View All Items</div>
                    </div>
                }

                <div className={`menuItem hoverUnderline specialHover ${location.pathname === "/" ? "" : ""}`} onMouseOver={() => { setPopUp2(true) }} onMouseOut={() => { setPopUp2(false) }}>Solutions</div>
                {
                    popUp2 &&
                    <div className="headerPopUpBox" onMouseOver={() => { setPopUp2(true) }} onMouseOut={() => { setPopUp2(false) }}>
                        <ul className="headerPopUpBoxItems">
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Software Product Engineering") }}>Software Product Engineering</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Dedicated Software Teams") }}>Dedicated Software Teams</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("QA & Testing") }}>QA & Testing</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Cloud Services") }}>Cloud Services</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Application Development") }}>Application Development</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("eCommerce") }}>eCommerce</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Data Engineering") }}>Data Engineering</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("AI & ML") }}>AI & ML</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("For Startups") }}>For Startups</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("For Enterprises") }}>For Enterprises</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("For Agencies") }}>For Agencies</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Software Product Engineering") }}>Software Product Engineering</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Dedicated Software Teams") }}>Dedicated Software Teams</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("QA & Testing") }}>QA & Testing</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Cloud Services") }}>Cloud Services</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Application Development") }}>Application Development</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("eCommerce") }}>eCommerce</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("Data Engineering") }}>Data Engineering</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("AI & ML") }}>AI & ML</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("For Startups") }}>For Startups</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("For Enterprises") }}>For Enterprises</li>
                            <li className="headerPopUpBoxItem" onClick={() => { openPage("For Agencies") }}>For Agencies</li>
                        </ul>
                        <div className="headerPopUpBoxButton" onClick={() => { navigate('/items'); window.scrollTo(0, 0); setPopUp2(false) }}>View All Items</div>
                    </div>
                }
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>Technologies</div>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>About</div>
                <div className={`menuItem hoverUnderline ${location.pathname === "/" ? "" : ""}`} onClick={() => { routing("/") }}>Contact Us</div>
                <IoClose className=" menuBar menuCross" onClick={() => { toggleBar(); setSearchToggle(!searchToggle) }} />
            </div>

            <FaBars className="menuBar" onClick={() => { toggleBar(); setSearchToggle(!searchToggle) }} />

        </div>
    )
}

export default Menu