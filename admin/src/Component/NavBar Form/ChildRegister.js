/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Form, Button, Col, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createChild, DelRegistartion, getChild, UpdateRegistraton } from '../../actions/child.action'

function ChildRegister(props) {

    //get request
    useEffect(() => {
        props.getAllRegister()
    }, [])

    //delete data
    const deleteData = (thechild) => {
        if(confirm('Are you sure you want to Delete Record')){
            props.delChildData(thechild)
            setShow(true)
            MessageTime()
        }
    }

    //update data
    const updateData = (tempuser) => {
        setdata(tempuser)
        console.log(tempuser)
        Register.errors = {}
    }

    const [Register, SetRegister] = useState({
        fname: null,
        lname: null,
        address: null,
        city: null,
        states: null,
        zipcode: null,
        gender: null,
        parentnm: null,
        phonenum: null,
        plcwork: null,
        email: null,
        doctornm: null,
        drphonenum: null,
        allergies: null,
        errors: {
            fname: '*Requierd',
            lname: '*Requierd',
            address: '*Requierd',
            city: '*Requierd',
            states: '*Requierd',
            zipcode: '*Requierd',
            gender: '*Requierd',
            parentnm: '*Requierd',
            phonenum: '*Requierd',
            plcwork: '*Requierd',
            email: '*Requierd',
            doctornm: '*Requierd',
            drphonenum: '*Requierd',
            allergies: '*Requierd'
        }
    })

    const initialState = {
        _id: 0,
        fname: '',
        lname: '',
        address: '',
        city: '',
        states: '',
        zipcode: '',
        gender: '',
        parentnm: '',
        phonenum: '',
        plcwork: '',
        email: '',
        doctornm: '',
        drphonenum: '',
        allergies: '',
        password: ''
    }

    const [data, setdata] = useState(initialState)

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = Register.errors

        switch (name) {
            case 'fname':
                if (value.trim() == '') {
                    errors.fname = '*Requierd'
                    break
                }
                if (!(/^[a-zA-Z]*$/g).test(value)) {
                    errors.fname = 'Only Alphabet !'
                    break
                }
                if (value.length < 2) {
                    errors.fname = 'To Short...!'
                    break
                }
                errors.fname = ''
                break
            case 'lname':
                if (value.trim() == '') {
                    errors.lname = '*Requierd'
                    break
                }
                if (!(/^[a-zA-Z]*$/g).test(value)) {
                    errors.lname = 'Only Alphabet !'
                    break
                }
                if (value.length < 2) {
                    errors.lname = 'To Short...!'
                    break
                }
                errors.lname = ''
                break
            case 'address':
                if (value.trim() == '') {
                    errors.address = '*Requierd'
                    break
                }
                if (value.length < 10) {
                    errors.address = 'To Short...!'
                    break
                }
                errors.address = ''
                break
            case 'city':
                if (value.trim() == '') {
                    errors.city = '*Requierd'
                    break
                }
                if (!(/^[a-zA-Z]*$/g).test(value)) {
                    errors.city = 'Only Alphabet !'
                    break
                }
                if (value.length < 3) {
                    errors.city = 'To Short...!'
                    break
                }
                errors.city = ''
                break
            case 'states':
                if (value.trim() == '') {
                    errors.states = '*Requierd'
                    break
                }
                errors.states = ''
                break
            case 'zipcode':
                if (value.trim() == '') {
                    errors.zipcode = '*Requierd'
                    break
                }
                if (!(/^[0-9]*$/g).test(value)) {
                    errors.zipcode = 'Only Number!'
                    break
                }
                if (!/(^\d{6}$)/.test(value)) {
                    errors.zipcode = 'Enter Valid Zipcode!'
                    break
                }
                errors.zipcode = ''
                break
            case 'gender':
                errors.gender = ''
                break
            case 'parentnm':
                if (value.trim() == '') {
                    errors.parentnm = '*Requierd'
                    break
                }
                if (!(/^[a-zA-Z]*$/g).test(value)) {
                    errors.parentnm = 'Only Alphabet !'
                    break
                }
                if (value.length < 3) {
                    errors.parentnm = 'To Short...!'
                    break
                }
                errors.parentnm = ''
                break
            case 'phonenum':
                if (value.trim() == '') {
                    errors.phonenum = '*Requierd'
                    break
                }
                if (!(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/).test(value)) {
                    errors.phonenum = 'Only 10 Number Allowed...!'
                    break
                }
                errors.phonenum = ''
                break
            case 'plcwork':
                if (value.trim() == '') {
                    errors.plcwork = '*Requierd'
                    break
                }
                if (value.length < 10) {
                    errors.plcwork = 'To Short...!'
                    break
                }
                errors.plcwork = ''
                break
            case 'email':
                if (value.trim() == '') {
                    errors.email = '*Requierd.'
                    break
                }
                if (!validEmailRegex.test(value)) {
                    errors.email = 'Please Enter Valid Email-Address.'
                    break
                }
                errors.email = ''
                break
            case 'doctornm':
                if (value.trim() == '') {
                    errors.doctornm = '*Requierd'
                    break
                }
                if (!(/^[a-zA-Z]*$/g).test(value)) {
                    errors.doctornm = 'Only Alphabet !'
                    break
                }
                if (value.length < 3) {
                    errors.doctornm = 'To Short...!'
                    break
                }
                errors.doctornm = ''
                break
            case 'drphonenum':
                if (value.trim() == '') {
                    errors.drphonenum = '*Requierd'
                    break
                }
                if (!(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/).test(value)) {
                    errors.drphonenum = 'Only 10 Number Allowed...!'
                    break
                }
                errors.drphonenum = ''
                break
            case 'allergies':
                if (value.trim() == '') {
                    errors.allergies = '*Requierd'
                    break
                }
                if (!(/^[a-zA-Z]*$/g).test(value)) {
                    errors.allergies = 'Only Alphabet !'
                    break
                }
                if (value.length < 3) {
                    errors.allergies = 'To Short...!'
                    break
                }
                errors.allergies = ''
                break
        }

        SetRegister({
            ...Register,
            [name]: value,
            errors
        })

        setdata({
            ...data,
            password,
            [name]: value
        })
    }

    const password = 12345678

    const validationForm = (errors) => {
        let valid = true
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        )
        return valid;
    }

    const [show, setShow] = useState(false)

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (validationForm(Register.errors)) {
            alert("Form Submitted")
            if (data._id === 0) {
                //insert
                delete data._id
                props.createNewChild(data)
                setShow(true)
                MessageTime()
            } else {
                //update
                let tempuser = {}
                tempuser._id = data._id
                tempuser.fname = data.fname
                tempuser.lname = data.lname
                tempuser.address = data.address
                tempuser.city = data.city
                tempuser.states = data.states
                tempuser.zipcode = data.zipcode
                tempuser.gender = data.gender
                tempuser.parentnm = data.parentnm
                tempuser.phonenum = data.phonenum
                tempuser.plcwork = data.plcwork
                tempuser.email = data.email
                tempuser.doctornm = data.doctornm
                tempuser.drphonenum = data.drphonenum
                tempuser.allergies = data.allergies
                props.updateChild(tempuser)
                setShow(true)
                MessageTime()
            }
            setdata(initialState)
            e.target.reset()
        } else {
            alert("Form Not Submitted")
        }
    }
    //Alert Message timing 
    const MessageTime = () => {
        setTimeout(() => {
            setShow(false)
        }, 4000)
    }

    //reset button
    const HandleReset = () => {
        setdata(initialState)
    }
    return (
        <div className="position-relative">
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0" }} variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.createChild.msg}{props.createChild.error}</p>
            </Alert>
            }<br />
            <Form className="container mt-5" onSubmit={HandleSubmit}>
                <fieldset className="mainedit">
                    <legend>Child Registration</legend>
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                    <p style={{ fontSize: '18px', color: 'rgb(0, 0, 0)' }}>Child's Information</p><br />
                    <Form.Row>
                        <input type='hidden' value={data._id}></input>
                        <Form.Group as={Col}>
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control autoFocus={true} type="text" placeholder="Enter FirstName" onChange={HandleChange} name="fname" value={data.fname} />
                            <div style={{ color: '#f50000' }} >{Register.errors.fname}</div>
                        </Form.Group>

                        <Form.Group as={Col}    >
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" placeholder="Enter LastName" onChange={HandleChange} name="lname" value={data.lname} />
                            <div style={{ color: '#f50000' }} >{Register.errors.lname}</div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Address" rows={2} onChange={HandleChange} name="address" value={data.address} />
                        <div style={{ color: '#f50000' }} >{Register.errors.address}</div>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder="City" onChange={HandleChange} name="city" value={data.city} />
                            <div style={{ color: '#f50000' }} >{Register.errors.city}</div>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState" >
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" required onChange={HandleChange} name="states" value={data.states} >
                                <option>Choose...</option>
                                <option>Gujarat</option>
                                <option>maharashtra</option>
                            </Form.Control>
                            <div style={{ color: '#f50000' }} >{Register.errors.states}</div>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control placeholder="Zipcode" onChange={HandleChange} name="zipcode" value={data.zipcode} />
                            <div style={{ color: '#f50000' }} >{Register.errors.zipcode}</div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group >
                        <Form.Label>Male or Female?</Form.Label>
                        <div onChange={HandleChange}>
                            <Form.Check label="Male" type="radio" name="gender" value="Male" />
                            <Form.Check label="FeMale" type="radio" name="gender" value="Female" />
                        </div>
                        <div style={{ color: '#f50000' }} >{Register.errors.gender}</div>
                    </Form.Group><br />

                    {/* parents Information */}
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }} />
                    <p style={{ fontSize: '18px', color: 'rgb(0, 0, 0)' }}>Parent's Information</p><br />
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Parent's/Guardian's name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Parent's Name" onChange={HandleChange} name="parentnm" value={data.parentnm} />
                            <div style={{ color: '#f50000' }} >{Register.errors.parentnm}</div>
                        </Form.Group>

                        <Form.Group as={Col}    >
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" onChange={HandleChange} name="phonenum" value={data.phonenum} />
                            <div style={{ color: '#f50000' }} >{Register.errors.phonenum}</div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Place of work</Form.Label>
                            <Form.Control type="text" placeholder="Work Place" onChange={HandleChange} name="plcwork" value={data.plcwork} />
                            <div style={{ color: '#f50000' }} >{Register.errors.plcwork}</div>
                        </Form.Group>

                        <Form.Group as={Col}    >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="example@gmail.com" onChange={HandleChange} name="email" value={data.email} />
                            <div style={{ color: '#f50000' }} >{Register.errors.email}</div>
                        </Form.Group>
                    </Form.Row><br />

                    {/* Medical Information */}
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                    <p style={{ fontSize: '18px', color: 'rgb(0, 0, 0)' }}>Medical's Information</p><br />

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Doctor Name</Form.Label>
                            <Form.Control type="text" placeholder="Doctor Name" onChange={HandleChange} name="doctornm" value={data.doctornm} />
                            <div style={{ color: '#f50000' }} >{Register.errors.doctornm}</div>
                        </Form.Group>

                        <Form.Group as={Col}    >
                            <Form.Label>Doctor's phone number</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number" onChange={HandleChange} name="drphonenum" value={data.drphonenum} />
                            <div style={{ color: '#f50000' }} >{Register.errors.drphonenum}</div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Please list any of the following: Current medications, medication allergies, food allergies, or chronic health concerns.</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Issue" rows={2} onChange={HandleChange} name="allergies" value={data.allergies} />
                        <div style={{ color: '#f50000' }} >{Register.errors.allergies}</div>
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">Submit</Button>&nbsp;&nbsp;
                    <Button variant="primary" type="reset" onClick={HandleReset}>Reset</Button>
                </fieldset>
            </Form>
            <br /><br /><br />

            {/* Get Table Data */}
            <div className='container card-header '>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Child Registration Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.createChild.getData.length > 0 &&
                            <Table striped responsive hover className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Zipcode</th>
                                        <th>Gender</th>
                                        <th>Parent's name</th>
                                        <th>Parent's no.</th>
                                        <th>Place of work</th>
                                        <th>email</th>
                                        <th>Dr. Name</th>
                                        <th>Dr. phone num.</th>
                                        <th>Allergies</th>
                                        <th>Edit | Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.createChild.getData.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.fname}</td>
                                            <td>{theData.lname}</td>
                                            <td>{theData.address}</td>
                                            <td>{theData.city}</td>
                                            <td>{theData.states}</td>
                                            <td>{theData.zipcode}</td>
                                            <td>{theData.gender}</td>
                                            <td>{theData.parentnm}</td>
                                            <td>{theData.phonenum}</td>
                                            <td>{theData.plcwork}</td>
                                            <td>{theData.email}</td>
                                            <td>{theData.doctornm}</td>
                                            <td>{theData.drphonenum}</td>
                                            <td>{theData.allergies}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="success" onClick={() => updateData(theData)}>Edit</Button>&nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => deleteData(theData)}>Delete</Button>
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
        createChild: store.createChild
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewChild: (data) => dispatch(createChild(data)),
        getAllRegister: () => dispatch(getChild()),
        delChildData: (thechild) => dispatch(DelRegistartion(thechild)),
        updateChild: (editData) => dispatch(UpdateRegistraton(editData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildRegister)