import React from 'react'
import "./style.css"
import Annotions from '../annotions/Annotions'

function TextAndImg() {
    return (
        <div className="textAndImgContainer">

            <div className="textAndImgContainer1">
                <div className="textAndImgBox1">
                    <div className="textAndImgTitle">Software Development & Engineering Services</div>
                    <div className="textAndImgDesc">
                        Driven by the top 1% of software engineering talent in India, we deliver robust, scalable, and reliable software product solutions to clients across the globe.
                    </div>
                    <div className="textAndImgDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mdoloremque adipisci necessitatibus porro architecto est a nihil error reprehenderit incidu.
                    </div>
                    <div className="cardItemSection6 labelCard4" onClick={() => { navigate('/products'); scrollPage(); }}>Know More</div>

                </div>

                <div className="textAndImgBox2">
                    <img className='textAndImgBox2Img' src="https://blog.hubspot.com/hs-fs/hubfs/software-developer-vs-software-engineer_0.webp?width=595&height=400&name=software-developer-vs-software-engineer_0.webp" alt="" />
                </div>
            </div>
            {/* <div className="headerLines" /> */}

            {/* <div className="textAndImgContainer2">
                <Annotions />
            </div> */}

        </div>
    )
}

export default TextAndImg