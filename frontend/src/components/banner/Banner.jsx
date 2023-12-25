import React from 'react'
import "./style.css"
import { useParams } from 'react-router-dom';

function Banner() {
    const { title } = useParams();
    return (
        <div className="bannerContainer">
            {/* <img src="https://img.freepik.com/premium-photo/young-asian-beautiful-charming-busineswoman-smiling-working-laptop-computer-office_44344-3648.jpg?size=626&ext=jpg" alt="" className="bannerImg" /> */}
            <div className="bannerBox">
                <div className="bannerTitle">{title}</div>
                <div className="bannerText">ValueCoders specializes in crafting custom application development tailored to your specific needs. Trust us for comprehensive solutions encompassing bespoke web and mobile apps, SaaS, and ongoing maintenance. Our collaborative approach guarantees the seamless delivery of applications perfectly aligned with your demands.</div>
                <div className="cardItemSection6 labelCard4" onClick={() => { navigate('/products'); scrollPage(); }}>Contact Us</div>
            </div>
        </div>
    )
}

export default Banner