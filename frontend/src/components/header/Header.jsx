import React from "react";
import TopCarousel from "./topCarousel/TopCarousel";
import "./style.css"
import Carousel from "./carousel/Carousel";
import Menu from "../menu/Menu";
import { useLocation } from "react-router-dom"

import { useContext } from "react";
import { Context } from "../../context/AppContext";

const Header = () => {
    const { value } = useContext(Context)
    const location = useLocation();


    return (
        <div className="headerContainer">
            {
                location.pathname === "/" ?
                    <>
                        <TopCarousel />
                        <Carousel />:
                    </> :
                    ""
            }
            <Menu />

        </div>
    )
}

export default Header;

