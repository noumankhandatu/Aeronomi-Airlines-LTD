import React from 'react'
// SectionHeading Area
const SectionHeading = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_heading_center">
                        <h2>{props.heading}</h2>
                        <p> {props.para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionHeading
