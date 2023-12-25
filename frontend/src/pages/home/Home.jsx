import React from 'react'
import "./style.css"
import MarqueeComp from '../../components/marqueeComp/MarqueeComp'
import CounterSection from '../../components/counterSection/CounterSection'
import LabelCard from '../../components/label/LabelCard'
import ImageButtons from '../../components/imageButtons/ImageButtons'
import TextAndImg from '../../components/textAndImg/TextAndImg'

import AboutTile from '../../components/aboutTiles/AboutTile'
import GoogleMap from '../../components/googleMap/GoogleMap'
import Annotions from '../../components/annotions/Annotions'

function Home() {
    return (
        <>
            <div className="homecontainer">
                <CounterSection />
                <LabelCard />
                <ImageButtons />
                <TextAndImg />
                <MarqueeComp />
                <AboutTile />

                <div className="homeAnnotionContainer">
                    <h1 className='imageButtonsHeadline'>OUR SOLUTIONS</h1>
                    <div className="homeAnnotionBox">
                        <Annotions />
                        <Annotions />
                        <Annotions />
                        <Annotions />
                        <Annotions />
                        <Annotions />
                    </div>
                </div>

                <GoogleMap />
            </div>
        </>
    )
}

export default Home