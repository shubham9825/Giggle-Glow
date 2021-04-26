/* eslint-disable */
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createInquiry } from '../../actions/Inquiry.action'

function Inqurie(props) {
    const [inquirys, setinquirys] = useState({
        fname: null,
        lname: null,
        email: null,
        phone: null,
        message: null,
        errors: {
            fname: ' ',
            lname: ' ',
            email: ' ',
            phone: ' ' ,
            message: ' '
        }
    })
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    //api calling state
    const initialdata = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: ''
    }
    const [data, setdata] = useState(initialdata)

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = inquirys.errors

        setdata({
            ...data,
            [name]: value
        })

        switch (name) {
            case 'fname':
                if (value.trim() == '') {
                    errors.fname = 'Required'
                    break
                }
                if (value.length < 2) {
                    errors.fname = 'Firstname is Too Short!'
                    break
                }
                if (!(/^[a-zA-Z]*$/g).test(value)) {
                    errors.fname = 'Enter Alphabets only! '
                    break
                }
                errors.fname = ''
                break
            case 'lname':
                if (value.trim() == '') {
                    errors.lname = 'Required'
                    break
                }
                if (value.length < 2) {
                    errors.lname = 'Lastname is Too Short!'
                    break
                }
                if (!(/^[a-zA-Z]*$/g).test(value)) {
                    errors.lname = 'Enter Alphabets only! '
                    break
                }
                errors.lname = ''
                break
            case 'email':
                if (value.trim() == '') {
                    errors.email = 'Required'
                    break
                }
                if (!validEmailRegex.test(value)) {
                    errors.email = 'Email is not Valid!'
                    break
                }
                errors.email = ''
                break

            case 'phone':
                if (value.trim() == '') {
                    errors.phone = "Required"
                }
                if (!(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/).test(value)) {
                    errors.phone = 'Invalid Phone Number! '
                    break
                }
                errors.phone = ''
                break

            case 'message':
                if (value.length < 10) {
                    errors.message = 'Message is Too Short!'
                    break
                }
                errors.message = ''
                break
        }

        setinquirys({
            ...inquirys,
            [name]: value,
            errors
        })
    }

    const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            // if we have an error string set valid to false
            (val) => val.length > 0 && (valid = false)
        )
        return valid
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (validateForm(inquirys.errors)) {
            alert("Form Submitted")
            props.CreateNewInquiry(data)
            setShow(true)
            MessageTime()
            setdata(initialdata)
        } else {
            alert("Form Not Submitted")
        }

    }

    //Message State
    const [show, setShow] = useState(false)
    //Alert Message timing 
    const MessageTime = () => {
        setTimeout(() => {
            setShow(false)
        }, 4000)
    }
    return (
        <>
            <div className="no-bottom no-top" id="content">
                <div id="top" />
                {/* section begin */}
                <section id="subheader" data-bgimage="url(images/background/5.png) bottom">
                    <div className="center-y relative text-center" data-scroll-speed={4}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <form className="row" id="form_subscribe">
                                        <div className="col-md-12 text-center">
                                            <h1>Contact Us</h1>
                                            <p>Awsome Page Teaser Here</p>
                                        </div>
                                        <div className="clearfix" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="no-top" data-bgimage="url(images/background/3.png) top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-md-2 mb-sm-30">
                                <h3>Do you have any question?</h3>
                                <form name="contactForm" id="contact_form" className="form-border" onSubmit={HandleSubmit}>

                                    <div className="field-set">
                                        <input type="text" name="fname" id="name" className="form-control" value={data.fname} onChange={HandleChange} placeholder="Your First Name" />
                                        <div style={{ color: '#f50000' }}>{inquirys.errors.fname}</div>
                                    </div>
                                    <br />
                                    <div className="field-set">
                                        <input type="text" name="lname" id="name" className="form-control" value={data.lname} onChange={HandleChange} placeholder="Your Last Name" />
                                        <div style={{ color: '#f50000' }}>{inquirys.errors.lname}</div>
                                    </div>
                                    <br />
                                    <div className="field-set">
                                        <input type="email" value={data.email} name="email" onChange={HandleChange} className="form-control" placeholder="Enter Your Email" />
                                        <div style={{ color: '#f50000' }}>{inquirys.errors.email}</div>
                                    </div>
                                    <br />
                                    <div className="field-set">
                                        <input type="text" onChange={HandleChange} value={data.phone} name="phone" id="phone" className="form-control" placeholder="Your Phone" />
                                        <div style={{ color: '#f50000' }}>{inquirys.errors.phone}</div>
                                    </div>
                                    <br />
                                    <div className="field-set">
                                        <textarea name="message" id="message" onChange={HandleChange} value={data.message} className="form-control" placeholder="Your Message" />
                                        <div style={{ color: '#f50000' }}>{inquirys.errors.message}</div>
                                    </div>
                                    <br />
                                    <div className="spacer-half" />
                                    <div id="submit">
                                        <button type="submit" id="send_message" className="btn-custom btn" style={{ background: "#017DFC", color: "white", borderRadius: "30px", width: "20%", height: "50px" }} onSubmit={HandleSubmit}>Submit Form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

const mapStateToProps = (store) => {
    return {
        createInquiry: store.createInquiry
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CreateNewInquiry: (data) => dispatch(createInquiry(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Inqurie)
