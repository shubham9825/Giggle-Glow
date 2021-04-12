/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Form, Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { createNotice, DelNotice, getNotice, UpdateNotice } from '../../actions/Notice.action'
import { connect } from 'react-redux'

export function Notice(props) {
    //for getdata
    useEffect(() => {
        props.GetNotice()
    },[])

    //delete
    const delData = (thenotice)=>{
        console.log(thenotice)
        props.delNoticeData(thenotice)
        setShow(true)
        MessageTime()
    }
    const [notice, setnotice] = useState({
        title: null,
        description: null,
        errors: {
            title: '*Required',
            description: '*Required'
        }
    })

    //update
    const updateData =(tempUser)=>{
        setdata(tempUser)
        notice.errors ={}
    }
    const initialState = {
        _id:0,
        title: '',
        description: ''
    }
    const [data, setdata] = useState(initialState)

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = notice.errors

        switch (name) {
            case 'title':
                if (value.length < 5) {
                    errors.title = 'Title is Too Short!'
                    break
                }
                errors.title = ''
                break
            case 'description':
                if (value.trim() == '') {
                    errors.description = 'Required'
                    break
                }
                if (value.length < 5 && value.length > 300) {
                    errors.description = 'description is Too Short!'
                    break
                }
                errors.description = ''
                break
        }

        setnotice({
            ...notice,
            [name]: value,
            errors
        })

        setdata({
            ...data,
            [name]: value
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

        if (validateForm(notice.errors)) {
            alert("Form Submitted")
            if(data._id===0){
                delete data._id//delete
                props.CreateNewNotice(data)
                setShow(true)
                MessageTime()
            }else{
                let tempUser={}
                tempUser._id = data._id
                tempUser.title =data.title
                tempUser.description = data.description
                props.updateNotice(tempUser)
                setShow(true)
                MessageTime()
            }
            setdata(initialState)
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
        {show && <Alert className='pb-0' variant="danger" onClose={() => setShow(false)} dismissible>
                        <p>{props.createNotice.msg}{props.createNotice.error}</p>
                  </Alert>
         }
            <Form className="container mt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Notice</legend>
                    <Form.Group>
                        <Form.Label>Notice Title</Form.Label>
                        <Form.Control type="text" name="title" onChange={HandleChange} placeholder="Enter Notice Heading." required value={data.title} />
                        <div style={{ color: '#f50000' }}>{notice.errors.title}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Notice Description</Form.Label>
                        <Form.Control as="textarea" name="description" onChange={HandleChange} placeholder="Enter Notice." required value={data.description} rows={3} />
                        <div style={{ color: '#f50000' }}>{notice.errors.description}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form>
            <br /><br /><br />
            {/* Get Table Data */}
            {props.createNotice.getData.length > 0 &&
                <Table striped hover className='container'>
                    <thead>
                        <tr>
                            <th className="text-center">Title</th>
                            <th className="text-center">Description</th>
                            <th>Edit | Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.createNotice.getData.map(theData =>
                            <tr key={theData._id}>
                                <td>{theData.title}</td>
                                <td>{theData.description}</td>
                                <td>
                                    <ButtonGroup>
                                       <Button onClick={()=> updateData(theData)}>Edit</Button>&nbsp;&nbsp;
                                       <Button onClick={()=> delData(theData)}>Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            }
        </>
    )
}

const mapStateToProps = (store) => {
    return {
        createNotice: store.createNotice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CreateNewNotice: (data) => dispatch(createNotice(data)),
        GetNotice: () => dispatch(getNotice()),
        delNoticeData:(thenotice)=>dispatch(DelNotice(thenotice)),
        updateNotice:(editData)=>dispatch(UpdateNotice(editData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notice)
