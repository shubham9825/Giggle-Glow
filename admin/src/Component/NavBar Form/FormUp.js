/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Form, Button, Table, Alert, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createFormup, GetFormup, DelFormup, UpdateFormup } from '../../actions/Formup.action'

function FormUp(props) {
    //get request
    useEffect(() => {
        props.GetAllFormup()
    }, [])

    // use in validation
    const [formup, setformup] = useState({
        response: '*Required',
        errors: {
            response: '*Required'
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
        response: ''
    }
    const [data, setdata] = useState(initialdata)

    const HandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const errors = formup.errors

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
                props.createNewFormup(data)//create form or insert
                //alert
                setShow(true)
                MessageTime()
            } else {
                let tempUser = {}
                tempUser.response = data.response
                tempUser._id = data._id
                props.updateFormup(tempUser) //update 
                //alert
                setShow(true)
                MessageTime()
            }
            setdata(initialdata)
        } else {
            alert("Form Not Submitted")
        }
    }
    //Message State
    const [show, setShow] = useState(false) 
    
    //Alert Message timing 
    const MessageTime=()=>{
            setTimeout(() => {
                setShow(false)
              }, 4000)
    }
    return (
        <>
        <div className="position-relative">
            {show && <Alert className='pb-0 position-absolute  w-100' style={{"top" : "0" , "left" : "0px"}} variant="danger" onClose={() => setShow(false)} dismissible>
                        <p>{props.createFormup.msg}{props.createFormup.error}</p>
                    </Alert>
            }<br/>
            <Form className="container pt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Form Up/Inqurie Response </legend>  
                    <Form.Group>
                        <Form.Label>Response of Inquirers</Form.Label>
                        <Form.Control value={data.response} as="textarea" name="response" onChange={HandleChange} placeholder="Enter Response of Inquirers." rows={3} />
                        <div style={{ color: '#f50000' }}>{formup.errors.response}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form><br /><br />
            
            {/* Get Table Data */}
            {props.createFormup.getData.length > 0 &&
                <Table striped hover className='container'>
                    <thead>
                        <tr>
                            <th className="text-center">Response</th>
                            <th className="text-center">Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.createFormup.getData.map(theData =>
                            <tr key={theData._id}>
                                <td>{theData.response}</td>
                                {/* <td><Button onClick={() => editUser(theData)}>Edit</Button></td>
                                <td><Button onClick={() => deleteData(theData)}>Delete</Button></td> */}
                                <td>
                                    <ButtonGroup>
                                         <Button onClick={() => editUser(theData)}>Edit</Button>&nbsp;&nbsp;
                                         <Button onClick={() => deleteData(theData)}>Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            }
            </div>
        </>
    )
}

const mapStateToProps = (store) => {
    return {
        createFormup: store.createFormup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewFormup: (data) => dispatch(createFormup(data)),
        GetAllFormup: () => dispatch(GetFormup()),
        delFormupdata: (theformup) => dispatch(DelFormup(theformup)),
        updateFormup: (editData) => dispatch(UpdateFormup(editData))
    }
}
//connect
export default connect(mapStateToProps, mapDispatchToProps)(FormUp)
