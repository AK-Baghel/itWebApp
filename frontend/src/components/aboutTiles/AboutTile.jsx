import React from 'react'

import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { TbDeviceImacHeart } from "react-icons/tb";
import { useNavigate } from 'react-router-dom'

import HomeTile from '../homeTile/HomeTile';
import "./style.css"

function AboutTile() {

    const navigate = useNavigate();
    const scrollPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="aboutTileBox">

            <div className="textAndImgTitle">OUR LIVE CLIENT PROJECTS</div>

            <div className="aboutTiles">
                <HomeTile title={"HealthCare"} desc={"Cutting-edge software for healthcare, improving patient care and processes."} logo={<FaUserDoctor />} />
                <HomeTile title={"Travel & Tourism"} desc={"Innovative software for travel and tourism, enhancing bookings & engagement."} logo={<FaHandHoldingMedical />} />
                <HomeTile title={"Banking & Finance"} desc={"Secure software for banking and finance, ensuring trust and stability."} logo={<TbDeviceImacHeart />} />
                {/* <HomeTile title={"HealthCare"} desc={"Cutting-edge software for healthcare, improving patient care and processes."} logo={<FaUserDoctor />} />
                <HomeTile title={"Travel & Tourism"} desc={"Innovative software for travel and tourism, enhancing bookings & engagement."} logo={<FaHandHoldingMedical />} />
                <HomeTile title={"Banking & Finance"} desc={"Secure software for banking and finance, ensuring trust and stability."} logo={<TbDeviceImacHeart />} /> */}
            </div>

            <div className="cardItemSection6 labelCard4" onClick={() => { navigate('/products'); scrollPage(); }}>View All Projects</div>


        </div>
    )
}

export default AboutTile