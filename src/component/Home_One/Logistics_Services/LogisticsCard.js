import React from 'react'

const LogisticsCard = (props) => {
    return (
        <>
            <div className="item">
                <div className="item-wrapper">
                    <img src={props.img} alt="Image_Card"/>
                    <div className="link-icon">
                        <a href="#!"><i className="fas fa-link"></i></a>
                    </div>
                </div>
                <div className="logistics_item_text">
                    <h4><span className="bold">{props.heading}</span></h4>
                    <p>{props.para}</p>
                </div>
            </div>
        </>
    )
}

export default LogisticsCard
