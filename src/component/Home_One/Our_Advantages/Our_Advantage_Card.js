import React from 'react'
// OurAdvantageCard Area
const OurAdvantageCard = (props) => {
    return (
        <>
            <div className="advantages_items">
                <div className="advantages_icons">
                    <img src={props.img} alt="Icons Advantage"/>
                </div>
                <div className="advantages_text">
                    <h4>{props.heading}</h4>
                    <p>{props.para}</p>
                </div>
            </div>
        </>
    )
}

export default OurAdvantageCard
