/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { connect } from 'react-redux';
import { createInquiry, GetInquiry, DeleteInquiry, UpdateInquiry } from '../../actions/Inquiry.action'

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
            phone: ' ',
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
            alert('Please Fill Proper Form!!!')
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
        <div className="position-relative">
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
            <p>{props.createInquiry.msg}{props.createInquiry.error}</p>
            </Alert>
            }<br />
            <Form className="container mt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Inqurie Form</legend>
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                    <br />
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" value={data.fname} onChange={HandleChange} name="fname" placeholder="Enter your First name." />
                            <div style={{ color: '#f50000' }}>{inquirys.errors.fname}</div>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" value={data.lname} onChange={HandleChange} name="lname" placeholder="Enter your Last Name." />
                            <div style={{ color: '#f50000' }}>{inquirys.errors.lname}</div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={data.email} name="email" onChange={HandleChange} placeholder="Enter your Email." />
                        <div style={{ color: '#f50000' }}>{inquirys.errors.email}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" onChange={HandleChange} value={data.phone} name="phone" placeholder="Enter your Phone Number." />
                        <div style={{ color: '#f50000' }}>{inquirys.errors.phone}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Leave Your Message</Form.Label>
                        <Form.Control as="textarea" onChange={HandleChange} value={data.message} name="message" placeholder="Enter your any of Quires/Quetions or Message's for us." rows={3} />
                        <div style={{ color: '#f50000' }}>{inquirys.errors.message}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form>
        </div>
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
