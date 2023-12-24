import React from 'react'
import "./style.css"
import MarqueeComp from '../../components/marqueeComp/MarqueeComp'
import CounterSection from '../../components/counterSection/CounterSection'
import LabelCard from '../../components/label/LabelCard'
import ImageButtons from '../../components/imageButtons/ImageButtons'
import TextAndImg from '../../components/textAndImg/TextAndImg'

function Home() {
    return (
        <>
            <div className="homecontainer">
                <CounterSection />
                <LabelCard />
                <ImageButtons />
                <TextAndImg />
                <MarqueeComp />
            </div>
        </>
    )
}

export default Home