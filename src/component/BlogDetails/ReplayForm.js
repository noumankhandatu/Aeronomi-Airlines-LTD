import React from 'react'
// Import FormInput Components
import FormInput from "../Common/FormInput";

const ReplayForm = () => {
    return (
        <>
            <div className="blog_single_item">
                <div className="blog_sidebar_heading">
                    <h3>Leave Your Reply</h3>
                </div>
                <div className="replay_leave_form">
                    <form action="!#">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag={'input'}
                                    type={'text'}
                                    name={'name'}
                                    classes={'form-control'}
                                    placeholder={'Your Name'}
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag={'input'}
                                    type={'text'}
                                    name={'email'}
                                    classes={'form-control'}
                                    placeholder={'Your Email'}
                                />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag={'input'}
                                    type={'text'}
                                    name={'website'}
                                    classes={'form-control'}
                                    placeholder={'Website'}
                                />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag={'textarea'}
                                    type={'text'}
                                    name={'textarea'}
                                    classes={'form-control'}
                                    placeholder={'Type Your Messages'}
                                />
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="leave_form_submit">
                                    <FormInput
                                        tag={'button'}
                                        val={'Submit'}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ReplayForm
