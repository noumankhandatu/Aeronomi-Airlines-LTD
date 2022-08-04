import React from 'react'
// Import FormInput
import FormInput from "../Common/FormInput";
// QuestionForm Area
const QuestionForm = () => {
    return (
        <>
            <div className="faqs_form">
                <div className="faqs_form_heading">
                    <h3>ASK YOUR QUESTIONS</h3>
                </div>
                <form action="#!" id="faq_form">
                    <FormInput
                        tag={'input'}
                        type={'text'}
                        name={'name'}
                        classes={'form-control'}
                        placeholder={'Your Name'}
                    />
                    <FormInput
                        tag={'input'}
                        type={'text'}
                        name={'email'}
                        classes={'form-control'}
                        placeholder={'Your Email'}
                    />
                    <FormInput
                        tag={'input'}
                        type={'text'}
                        name={'subject'}
                        classes={'form-control'}
                        placeholder={'Your Subject'}
                    />
                    <FormInput
                        tag={'textarea'}
                        type={'text'}
                        name={'name'}
                        classes={'form-control'}
                        placeholder={'Type Your Messages'}
                    />
                    <div className="faqs_form_button">
                        <button className="btn btn-theme">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default QuestionForm
