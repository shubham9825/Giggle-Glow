/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Form, Button, Table, Alert, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createFormup, GetFormup, DelFormup, UpdateFormup } from '../../actions/Formup.action'
import { GetInquiry } from '../../actions/Inquiry.action'

function FormUp(props) {

    const [test,settest]=useState('')
    // use in validation
    const [formup, setformup] = useState({
        response: '*Required',
        errors: {
            response: ' '
        }
    })

    //delete
    const deleteData = (theformup) => {
        console.log(theformup)
        props.delFormupdata(theformup)
        //alert
        setShow(true)
        MessageTime()
    }

    //edit
    const editUser = (tempUser) => {
        setdata(tempUser)
        formup.errors = {}
    }

    //use in api calling 
    const initialdata = {
        _id: 0,
        response: '',
        owner: ''
    }
    const [data, setdata] = useState(initialdata)

    const HandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const errors = formup.errors
        // props.GetAllFormup(data)
        switch (name) {
            case 'response':
                if (value.length < 5) {
                    errors.response = 'response is Too Short!'
                    break
                }
                if (value.trim() == '') {
                    errors.response = '*required'
                    break
                }
                errors.response = ''
                break
        }

        setdata({
            ...data,
            [name]: value
        })

        setformup({
            ...formup,
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
        if (validateForm(formup.errors)) {
            alert("Form Submitted")
            if (data._id === 0) {
                delete data._id //delete id 
                console.log(data)
                props.createNewFormup(data)//create form or insert
                //alert
                setShow(true)
                MessageTime()
            } else {
                let tempUser = {}
                tempUser.response = data.response
                tempUser._id = data._id
                tempUser.owner=data.owner
                props.updateFormup(tempUser) //update 
                //alert
                setShow(true)
                MessageTime()
            }
            e.target.reset()
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

    //reset button
    const HandleReset = () => {
        setdata(initialdata)
    }

    //get request
    useEffect(() => {
        props.GetInquiryData()
    }, [])

    const Handlekey = (e) => {
        const owner = e.target.value
        settest(owner)
        setdata({
            ...data,
            owner
        })
        props.GetAllFormup(owner)
    }

    return (
        <>
            <div className="position-relative">
                {show && <Alert className='pb-0 position-absolute  w-100' style={{ "top": "0", "left": "0" }} variant="danger" onClose={() => setShow(false)} dismissible>
                    <p>{props.createFormup.msg}{props.createFormup.error}</p>
                </Alert>
                } <br />

                <Form className="container pt-5" onSubmit={HandleSubmit}>
                    <fieldset>
                        <legend>FormUp/Inqurie Response </legend>
                        <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                        <br />
                        <Form.Group>
                            {props.createInquiry.getData.length > 0 &&
                                <div>
                                    <Form.Label>Select list Name</Form.Label><br />
                                    <select onChange={Handlekey}>
                                        <option hidden>Select Name</option>
                                        {props.createInquiry.getData.map(theData =>
                                            <>
                                                <option value={theData._id}>{theData.fname}</option>
                                            </>
                                        )}
                                        <br />
                                    </select>
                                </div>
                            }
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Response of Inquirers</Form.Label>
                            <Form.Control value={data.response} as="textarea" name="response" onChange={HandleChange} placeholder="Enter Response of Inquirers." rows={3} />
                            <div style={{ color: '#f50000' }}>{formup.errors.response}</div>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>&nbsp;&nbsp;
                        <Button variant="primary" type="reset" onClick={HandleReset}>Reset</Button>
                    </fieldset>
                </Form><br /><br />

                {/* Get Table Data */}
                <div className='container card-header'>
                    <h3 className="fa fa-table" style={{ fontSize: "20px" }}> FormUp Details</h3><br />
                    <div className="card-body">
                        <div className="table-responsive">
                            {props.createFormup.getData.formups &&
                                <Table striped responsive hover className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th className="text-center">Response</th>
                                            <th className="text-center">Edit | Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.createFormup.getData.formups.map(theData =>
                                            <tr key={theData._id}>
                                                <td style={{ width: '80%' }}>{theData.response}</td>
                                                <td style={{ width: '20%' }}>
                                                    <ButtonGroup>
                                                        <Button variant="success" onClick={() => editUser(theData)}>Edit</Button>&nbsp;&nbsp;
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
        </>
    )
}

const mapStateToProps = (store) => {
    return {
        createFormup: store.createFormup,
        createInquiry: store.createInquiry
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewFormup: (data) => dispatch(createFormup(data)),
        GetAllFormup: (owner) => dispatch(GetFormup(owner)),
        delFormupdata: (theformup) => dispatch(DelFormup(theformup)),
        updateFormup: (editData) => dispatch(UpdateFormup(editData)),
        GetInquiryData: () => dispatch(GetInquiry())
    }
}
//connect
export default connect(mapStateToProps, mapDispatchToProps)(FormUp)
