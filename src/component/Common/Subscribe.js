import React from 'react'
import img1 from '../../assets/img/home1/parcel.png'
// Subscribe Area
const Subscribe = () => {
    return (
        <>
            <section id="subscribe_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="subscribe_img">
                                <img src={img1} alt="scribe_img"/>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="subscribe-area-inner">
                                <div className="heading-left-border">
                                    <h2>Subscribe for Offers and News</h2>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Recipient's email"/>
                                    <div className="input-group-append">
                                        <button className="btn  btn-theme" type="button"
                                                id="button-addon2">Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe
