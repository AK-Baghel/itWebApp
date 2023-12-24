import React, { useState } from 'react'
import "./style.css"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



function Annotions() {
    const [show, setshow] = useState(true)
    return (
        <div className="annotionsContainer" onClick={() => { setshow(!show) }}>

            <div className="annotionsBox" >
                <div className="annotionsTitle">Software Product Engineering</div>
                {
                    show ? <IoIosArrowDown /> : <IoIosArrowUp />
                }
            </div>
            {
                !show
                    ?

                    <div className="annotionsDesc">
                        Crafting bespoke software solutions with cutting-edge technology and best practices, we empower businesses to realize their digital aspirations and foster growth.
                    </div>

                    : ""
            }
        </div>
    )
}

export default Annotions