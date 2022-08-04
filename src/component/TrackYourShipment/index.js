import React from 'react'
//Import SectionHeading
import SectionHeading from '../Common/SectionHeading'
//Import FormInput
import FormInput from "../Common/FormInput";

const TrackShipment = () => {
    let options1 = [
        {
            text: "Select an option...",
            value: ""
        },
        {
            text: "Khulna",
            value: ""
        },
        {
            text: "Dhaka",
            value: ""
        },
        {
            text: "Barisal",
            value: ""
        },
        {
            text: "Fani",
            value: ""
        },
    ]

    return (
        <>
            <section id="track_shipment_area">
                <div className="container">
                    <SectionHeading heading="Track Your Shipment" para="Solving your supply chain needs from end to end, taking the
        complexity out of container shipping. We are at the forefront of developing innovation."/>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="track_area_form">
                                <form action="#!" id="track_form_area">
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'name'}
                                        classes={'form-control'}
                                        placeholder={'Name'}
                                        label={'Name'}
                                    />
                                    <FormInput
                                        tag={'input'}
                                        type={'email'}
                                        name={'name'}
                                        classes={'form-control'}
                                        placeholder={'Email'}
                                        label={'Email'}
                                    />
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'tracking'}
                                        classes={'form-control'}
                                        placeholder={'Eg: AWB Num or CB Num'}
                                        label={'Tracking Number'}
                                    />
                                    <div className="form-group">
                                        <label>Date Range</label>
                                        <div className="input-group">
                                            <input type="date" className="form-control"/>
                                            <span>to</span>
                                            <input type="date" className="form-control"/>
                                        </div>
                                    </div>
                                    <FormInput
                                        tag='select'
                                        classes='form-control'
                                        label="Destination"
                                        options={options1}
                                    />
                                    <div className="form-group">
                                        <label>Freight Type</label>
                                        <div className="input-group">
                                            <div className="form-group">
                                                <input type="radio" id="by_air" name="freight" value="by_air"/>
                                                <label>By Air</label><br/>
                                            </div>
                                            <div className="form-group">
                                                <input type="radio" id="by_road" name="freight" value="by_road"/>
                                                <label>By Road</label>
                                            </div>
                                            <div className="form-group">
                                                <input type="radio" id="by_sea" name="freight" value="by_sea"/>
                                                <label>By Sea</label>
                                            </div>
                                        </div>
                                  </div>
                                    <div className="track_now_btn">
                                        <button className="btn btn-theme">Track Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TrackShipment

