import React from 'react'
// Import FaqsData Area
import {FaqsData} from './FaqsData'
// Import QuestionForm Area
import QuestionForm from '../Faqs/QuestionForm'
// FaqsArea Area
const AllFaqs = () => {
    return (
        <>
            <section id="faqs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="tab-pane fade show active">
                                <div className="faqs-items">
                                    <div id="accordion" className="accordion-wrapper">
                                        {FaqsData.map((data, index) => (
                                            <div id={"accordion" + index} key={index}>
                                                <div className="card  box-shadow">
                                                    <div className="card-header" id={"heading" + index}>
                                                        <h5 className="mb-0">
                                                            <a href="#!" className="collapsed " role="button"
                                                               data-toggle="collapse"
                                                               data-target={"#collapse" + index} aria-expanded="false"
                                                               aria-controls={"collapse" + index}>{data.heading}</a>
                                                        </h5>
                                                    </div>
                                                    <div id={"collapse" + index}
                                                         className={index === 0 ? "collapse show active" : "collapse"}
                                                         aria-labelledby={"heading" + index}
                                                         data-parent={"#accordion"}>
                                                        <div className="card-body active">
                                                            <p>{data.para}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <QuestionForm/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllFaqs
