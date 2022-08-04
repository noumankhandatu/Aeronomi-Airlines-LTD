import React from 'react'
import {Link} from 'react-router-dom';
// Import FormInput
import FormInput from '../Common/FormInput'

const SignUpForm = (props) => {
    return (
        <>
            <section id="signIn_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="user_area_wrapper">
                                <h2>{props.heading}</h2>
                                <div className="user_area_form ">
                                    <form action="#!" id="form_signIn">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <FormInput
                                                    tag={'input'}
                                                    type={'text'}
                                                    name={'f_name'}
                                                    classes={'form-control'}
                                                    placeholder={'First Name'}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <FormInput
                                                    tag={'input'}
                                                    type={'text'}
                                                    name={'l_name'}
                                                    classes={'form-control'}
                                                    placeholder={'Last Name'}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <FormInput
                                                    tag={'input'}
                                                    type={'text'}
                                                    name={'user_name'}
                                                    classes={'form-control'}
                                                    placeholder={'User Name'}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <FormInput
                                                    tag={'input'}
                                                    type={'text'}
                                                    name={'email'}
                                                    classes={'form-control'}
                                                    placeholder={'Email Address'}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <FormInput
                                                    tag={'input'}
                                                    type={'password'}
                                                    name={'password'}
                                                    classes={'form-control'}
                                                    placeholder={'Password'}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <FormInput
                                                    tag={'input'}
                                                    type={'password'}
                                                    name={'c_password'}
                                                    classes={'form-control'}
                                                    placeholder={'Confirm Password'}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input"
                                                           id="exampleCheck1"/>
                                                    <label className="form-check-label" htmlFor="exampleCheck1">I agree
                                                        with Terms & Conditions</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="submit_button">
                                                    <FormInput
                                                        tag={'button'}
                                                        val={'Sign Up'}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="not_remember_area">
                                                    <p>Already have an account? <Link to="/signIn"> Sign Up</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpForm
