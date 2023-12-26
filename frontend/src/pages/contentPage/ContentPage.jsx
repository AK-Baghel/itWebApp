import React from 'react'
import "./style.css"
import Banner from '../../components/banner/Banner'
import MarqueeComp from "../../components/marqueeComp/MarqueeComp"
import CardItem from '../../components/cardItem/CardItem'
import Annotions from '../../components/annotions/Annotions'
import ImageButtonBox from '../../components/imageButtons/imageButtonBox/ImageButtonBox'

function ContentPage() {

    const arr = [
        "Design Based Supplier",
        "Quick Response Deliveries",
        "Capacity",
        "Reliability",
        "Compliance",
        "Diverse Product Range"
    ]

    const arr1 = [
        "Commitment: We deliver what we commit",
        "Reputation: We safeguard Trust in all Relationships",
        "Growth Orientation: We have courage to set ambitious goals & achieve them",
        "Continuous Improvement: We continuously improve ourselves professionally & personally",
        "Responsibility: We take ownership of our actions & results",
        "Collaboration: We recognize & value differences in people with aim for creating synergy",
    ]


    return (
        <div className="contentPageContainer">
            <Banner />
            <MarqueeComp />

            <CardItem
                position={"left"}
                item1={"OUR PRODUCTS"}
                item2={"Elevate your space with our modern design"}
                item3={"We at Vamani are catering our customers with all modern design furniture product for living, dining and bedroom furniture."}
                item4={"Majorly we have categorized our collection as:"}
                item6={"Learn More"}
                photo={"https://c0.wallpaperflare.com/preview/330/490/484/business-office-computer-flatlay.jpg"}
                // arr={arr}
                icon={true}
                route={'products'}
            />

            <CardItem
                position={"right"}
                item1={"FIRM'S APPROACH"}
                item2={"OUR DESIGNS & QUALITY PRODUCTS WILL BUILD YOUR TRUST"}
                item3={"Our Contemporary and electic designs blend aesthetics with functional value. Our collections with their uncluttered elegant lines embrace both the mordern as well as traditional looks"}
                item6={"Get In Touch"}
                photo={"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwbWFuYWdlcnxlbnwwfHwwfHx8MA%3D%3D"}
                route={'contact'}
            />

            <CardItem
                position={"left"}
                item1={"VAMANI OVERSEAS"}
                item2={"Who We are"}
                photo={"https://c0.wallpaperflare.com/preview/330/490/484/business-office-computer-flatlay.jpg"}
                arr={arr}
                icon={false}
            />



            <div className="imageButtonsContainer">
                <h1 className='imageButtonsHeadline'>OUR PAID TEMPLATES</h1>
                <div className="imageButtonsContainer imageButtonsBox">
                    <ImageButtonBox img={"https://vagent.in/blog/wp-content/uploads/2020/10/hiring-remote-call-centre-agents.jpg"} title={"CRM"} desc={"Enhance customer relationships and drive sales growth efficiently."} />
                    <ImageButtonBox img={"https://assets.entrepreneur.com/content/3x2/2000/1618600283-shutterstock-1504573049.jpeg"} title={"Workforce Management"} desc={"Streamline workforce operations for increased productivity & efficiency."} />
                    <ImageButtonBox img={"https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/hr-team.jpg"} title={"Human Resource Management"} desc={"Optimize HR processes for better employee engagement & management."} />
                    <ImageButtonBox img={"https://www.gep.com/prod/s3fs-public/blog-images/4-Major-Types-of-Supply-Chain-Collaboration-That-Drive-Efficiencies-1920x1274.jpg"} title={"Supply Chain Management"} desc={"Elevate supply chain efficiency for streamlined operations & cost savings."} />
                    <ImageButtonBox img={"https://www.merchantsfleet.com/wp-content/uploads/2020/09/Merchant-Fleet-Management.jpg"} title={"Fleet Management"} desc={"Maximize fleet performance and reduce operational costs effectively."} />
                    <ImageButtonBox img={"https://uop.scene7.com/is/image/phoenixedu/operations-manager-leading-a-meeting-970x680?fmt=webp-alpha&qlt=70&fit=constrain,1&wid=970"} title={"Operations Management"} desc={"Boost operational efficiency for improved performance and profitability."} />
                    {/* <ImageButtonBox img={"https://hexaware.com/wp-content/uploads/2019/11/hexaware-analysis-on-the-impact-and-application-of-advanced-analytics-in-asset-management.jpg"} title={"Asset Management"} desc={"Optimize asset utilization for increased ROI and reduced downtime."} />
                    <ImageButtonBox img={"https://ajkim.in/wp-content/uploads/2023/10/image51-549x366.jpg"} title={"Content Management System"} desc={"Simplify content management for enhanced digital presence & engagement."} />
                    <ImageButtonBox img={"https://elorus.ams3.cdn.digitaloceanspaces.com/blogen/2022/05/Invoicing-and-Billing-Process---Elorus-Blog.jpg"} title={"Invoicing / Billing Platform"} desc={"Streamline billing processes for faster, error-free financial transactions."} /> */}
                </div>
            </div>



            <CardItem
                position={"right"}
                item1={"WE ARE VAMANI FURNITURE"}
                item2={"An Ultimate Manufacturer of solid Timber & Metal Furniture"}
                item3={"VAMANI OVERSEAS is a well established and renowned name in the Home Decor arena. Our Team of professional managing strength lies in our state of the art manufacturing facility encompassing curing, treatment and mechanised wood working machinery. We stock and showcases an exquisite range of wooden, wrought iron furniture and antique reproductions."}
                photo={"https://c0.wallpaperflare.com/preview/330/490/484/business-office-computer-flatlay.jpg"}
            />

            <CardItem
                position={"left"}
                item1={"Core value:"}
                item3={"We pride ourselves on honesty & respect. It makes us customer centric, innovative & passionate. It empowers & support our resources. Apart from being collaborative, we value ethics and integrity which makes us globally responsible."}
                photo={"https://c0.wallpaperflare.com/preview/330/490/484/business-office-computer-flatlay.jpg"}
                arr={arr1}
                icon={false}
            />


            <div className="homeAnnotionContainer">
                <h1 className='imageButtonsHeadline'>Get Your Querry Answers Here</h1>
                <div className="homeAnnotionBox">
                    <Annotions />
                    <Annotions />
                    <Annotions />
                    <Annotions />
                    <Annotions />
                    <Annotions />
                </div>
            </div>


            {/* <div className="bannerTitle">OUR VISION</div>

            <CardItem
                position={"right"}
                itemArr={
                    [{
                        item1: "Vision",
                        item3: "To be Globally recognized export company that put quality, service & value as priority to satisfy the needs of our customers, employees & stakeholders."
                    },
                    {
                        item1: "Mission",
                        item2: `To offer products with superior quality & value- To create peaceful & enjoyable work environment for our employees- To contribute in the growth of society along with company’s business​.`,
                        item3: `We pride ourselves on honesty & respect. It makes us customer centric, innovative & passionate. It empowers & support our resources. Apart from being collaborative, we value ethics and integrity which makes us globally responsible.`
                    }
                    ]
                }
                photo={"https://c0.wallpaperflare.com/preview/330/490/484/business-office-computer-flatlay.jpg"}
            /> */}


        </div>
    )
}

export default ContentPage