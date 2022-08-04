import React from 'react'
//Import FormInput
import FormInput from '../Common/FormInput'
// ContactForm Area
const ContactForm = () => {
    return (
        <> 
            <form action="#!">
                <div className="row">
                    <div className="col-lg-12">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'name'}
                            classes={'form-control'}
                            placeholder={'Name'}
                        />
                    </div>
                    <div className="col-lg-12">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'email'}
                            classes={'form-control'}
                            placeholder={'Email'}
                        />
                    </div>
                    <div className="col-lg-12">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'subject'}
                            classes={'form-control'}
                            placeholder={'Subject'}
                        />
                    </div>
                    <div className="col-lg-12">
                        <FormInput
                            tag={'textarea'}
                            type={'text'}
                            name={'subject'}
                            classes={'form-control'}
                            placeholder={'Type Your Messages...'}
                        />
                    </div>
                    <div className="col-lg-12">
                        <div className="contact_form_submit">
                            <FormInput
                                tag={'button'}
                                val={'Send'}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm
