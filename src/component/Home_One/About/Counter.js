import React from 'react'
// Counter Up
import CountUp from 'react-countup';

const Counter = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="counter_area">
                    <div className="counters_icon">
                        <i className={props.icon}></i>
                    </div>
                    <div className="counter_count">
                        <h2 className="count"><CountUp start={props.countStart} end={props.countEnd}/></h2>
                        <h5>{props.heading}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
