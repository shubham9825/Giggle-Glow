/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Form, Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { connect } from 'react-redux';
import { createContact, DeleteContact, GetContact, UpdateContact } from '../../actions/Contact.action'

function Contact(props) {
    //get request 
    useEffect(() => {
        props.getContactdata()
    }, [])

    const [Submit, SetSubmit] = useState({
        address: null,
        phone: null,
        email: null,
        errors: {
            address: ' ',
            phone: ' ',
            email: ' '
        }
    })

    //delete data
    const onDeleteData = (theContact) => {
        if(confirm('Are you sure you want to Delete Record')){
            props.deleteContactData(theContact)
            setShow(true)
            MessageTime()
        }
    }

    //api calling state
    const initialdata = {
        _id: 0,
        address: '',
        phone: '',
        email: ''
    }
    const [data, setdata] = useState(initialdata)

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = Submit.errors

        switch (name) {
            case 'address':
                if (value.trim() == '') {
                    errors.address = '*Required'
                    break
                }
                if (value.length < 10) {
                    errors.address = 'To Short...!'
                    break
                }
                errors.address = ''
                break
            case 'phone':
                if (value.trim() == '') {
                    errors.phone = '*Required'
                    break
                }
                if (!(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/).test(value)) {
                    errors.phone = 'Mobile Number Incorrect...!'
                    break
                }
                errors.phone = ''
                break
            case 'email':
                if (value.trim() == '') {
                    errors.email = '*Required.'
                    break
                }
                if (!validEmailRegex.test(value)) {
                    errors.email = 'Please Enter Valid Email-Address.'
                    break
                }
                errors.email = ''
                break
        }
        setdata({
            ...data,
            [name]: value
        })
        
        SetSubmit({
            ...Submit,
            [name]: value,
            errors
        })
    }

    const validationForm = (errors) => {
        let valid = true
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        )
        return valid;
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (validationForm(Submit.errors)) {
            alert("Form Submitted")
            if (data._id === 0) {
                // insert
                delete data._id
                props.crateNewContact(data)
                setShow(true)
                MessageTime()
            } else {
                // update
                let tempUser = {}
                tempUser.address = data.address
                tempUser.phone = data.phone
                tempUser.email = data.email
                tempUser._id = data._id
                props.updateContact(tempUser)
                setShow(true)
                MessageTime()
            }
            setdata(initialdata)
        } else {
            alert('Please Fill Proper Form!!!')
        }
    }
    //edit user
    const EditUser = (tempUser) => {
        console.log(tempUser)
        setdata(tempUser)
    }

    //Message State
    const [show, setShow] = useState(false)
    //Alert Message timing 
    const MessageTime = () => {
        setTimeout(() => {
            setShow(false)
        }, 4000)
    }

    //reset button
    const HandleReset = () => {
        setdata(initialdata)
    }
    return (
        <div className="position-relative" style={{marginTop:'60px'}}>
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0" }} variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.createContact.msg}{props.createContact.error}</p>
            </Alert>
            }<br />
            <Form className="container pt-5" onSubmit={HandleSubmit} >
                <fieldset>
                    <legend>Contact Us</legend>
                    <hr className='m-0' style={{ background:'rgb(148, 141, 141)' }}></hr>
                    <br />
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control autoFocus={true} value={data.address} as="textarea" name="address" placeholder="Enter your daycare Address." rows={2} onChange={HandleChange} />
                        <div style={{ color: '#f50000' }} >{Submit.errors.address}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" value={data.phone} name="phone" placeholder="Enter your phone number." onChange={HandleChange} />
                        <div style={{ color: '#f50000' }} >{Submit.errors.phone}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={data.email} name="email" placeholder="Enter your Email." onChange={HandleChange} />
                        <div style={{ color: '#f50000' }} >{Submit.errors.email}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>&nbsp;&nbsp;
                    <Button variant="primary" type="reset" onClick={HandleReset}>Reset</Button>
                </fieldset>
            </Form><br /><br />

            {/* Get Table Data */}
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Contact Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.createContact.getData.length > 0 &&
                            <Table striped hover responsive className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Address</th>
                                        <th>Phone No</th>
                                        <th>Email</th>
                                        <th>Edit | Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.createContact.getData.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.address}</td>
                                            <td>{theData.phone}</td>
                                            <td>{theData.email}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="success" onClick={() => EditUser(theData)}>Edit</Button>&nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => onDeleteData(theData)}>Delete</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        createContact: store.createContact  //comes for store and store in comes for reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        crateNewContact: (data) => dispatch(createContact(data)),
        getContactdata: () => dispatch(GetContact()),
        deleteContactData: (theContact) => dispatch(DeleteContact(theContact)),
        updateContact: (data) => dispatch(UpdateContact(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
