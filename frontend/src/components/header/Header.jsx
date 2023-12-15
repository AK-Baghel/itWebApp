import React from "react";
import TopCarousel from "./topCarousel/TopCarousel";
import "./style.css"
import Carousel from "./carousel/Carousel";
import Menu from "../menu/Menu";

const Header = () => {
    return (
        <div className="headerContainer">
            <TopCarousel />
            <Carousel />
            <Menu />

        </div>
    )
}

export default Header;

