import React from 'react'
import ImageButtonBox from './imageButtonBox/ImageButtonBox'
import "./style.css"

function ImageButtons() {
  return (
    <div className="imageButtonsContainer">
      <h1 className='imageButtonsHeadline'>OUR SERVICES</h1>
      <div className="imageButtonsContainer imageButtonsBox">
        <ImageButtonBox img={"https://vagent.in/blog/wp-content/uploads/2020/10/hiring-remote-call-centre-agents.jpg"} title={"CRM"} desc={"Enhance customer relationships and drive sales growth efficiently."} />
        <ImageButtonBox img={"https://assets.entrepreneur.com/content/3x2/2000/1618600283-shutterstock-1504573049.jpeg"} title={"Workforce Management"} desc={"Streamline workforce operations for increased productivity & efficiency."} />
        <ImageButtonBox img={"https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/hr-team.jpg"} title={"Human Resource Management"} desc={"Optimize HR processes for better employee engagement & management."} />
        <ImageButtonBox img={"https://www.gep.com/prod/s3fs-public/blog-images/4-Major-Types-of-Supply-Chain-Collaboration-That-Drive-Efficiencies-1920x1274.jpg"} title={"Supply Chain Management"} desc={"Elevate supply chain efficiency for streamlined operations & cost savings."} />
        <ImageButtonBox img={"https://www.merchantsfleet.com/wp-content/uploads/2020/09/Merchant-Fleet-Management.jpg"} title={"Fleet Management"} desc={"Maximize fleet performance and reduce operational costs effectively."} />
        <ImageButtonBox img={"https://uop.scene7.com/is/image/phoenixedu/operations-manager-leading-a-meeting-970x680?fmt=webp-alpha&qlt=70&fit=constrain,1&wid=970"} title={"Operations Management"} desc={"Boost operational efficiency for improved performance and profitability."} />
        <ImageButtonBox img={"https://hexaware.com/wp-content/uploads/2019/11/hexaware-analysis-on-the-impact-and-application-of-advanced-analytics-in-asset-management.jpg"} title={"Asset Management"} desc={"Optimize asset utilization for increased ROI and reduced downtime."} />
        <ImageButtonBox img={"https://ajkim.in/wp-content/uploads/2023/10/image51-549x366.jpg"} title={"Content Management System"} desc={"Simplify content management for enhanced digital presence & engagement."} />
        <ImageButtonBox img={"https://elorus.ams3.cdn.digitaloceanspaces.com/blogen/2022/05/Invoicing-and-Billing-Process---Elorus-Blog.jpg"} title={"Invoicing / Billing Platform"} desc={"Streamline billing processes for faster, error-free financial transactions."} />
      </div>
    </div>
  )
}

export default ImageButtons