import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import "./style.css"


function ImageButtonBox({ img, title, desc }) {
    const [hover, sethover] = useState(false)

    return (
        <div className="imageButtonBox" >
            <img src={img} alt="" className={`imageButtonBoxImg ${hover ? "imageButtonBoxImgHover" : ""}`} />

            <div className="imageButtonBoxContent" onMouseOver={() => { sethover(true) }} onMouseOut={() => { sethover(false) }}>
                <div className="imageButtonBoxContentTitle">{title}</div>
                <div className="imageButtonBoxContentDesc">{desc}</div>
                <div className={`imageButtonBoxContentLink ${hover ? "imageButtonBoxContentLinkHover" : ""}`}>
                    <div className="imageButtonBoxContentLinkText" >Learn More</div>
                    <FaArrowRight />
                </div>

            </div>
        </div>
    )
}

export default ImageButtonBox