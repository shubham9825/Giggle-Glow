/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Form, Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { createAbout, GetAbout, DeleteAbout, UpdateAbout } from '../../actions/About.action'
import { connect } from 'react-redux'

function About(props) {
    const [Submition, SetSubmition] = useState({
        about: null,
        mission: null,
        vision: null,
        errors: {
            about: '*Required',
            mission: '*Required',
            vision: '*Required'
        }
    })

    const initialdata = {
        _id:0,
        about: '',
        mission: '',
        vision: ''
    }
   
    //api calling state
    const [data, setdata] = useState(initialdata)

    //get request
    useEffect(() => {
        props.getAboutData()
    }, [])

    //delete request
    const onDeleteData = (theAbout) => {
        console.log(theAbout)
        props.deleteAboutData(theAbout)
        setShow(true)
        MessageTime()
    }

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = Submition.errors

        setdata({
            ...data,
            [name]: value
        })

        switch (name) {
            case 'about':
                if (value.trim() == '') {
                    errors.about = '*Required.'
                    break
                }
                if (value.length < 10) {
                    errors.about = 'Character is less than 10 so, enter more word.'
                    break
                }
                errors.about = ''
                break
            case 'mission':
                if (value.trim() == '') {
                    errors.mission = '*Required.'
                    break
                }
                if (value.length < 10) {
                    errors.mission = 'Character is less than 10 so, enter more word.'
                    break
                }
                errors.mission = ''
                break
            case 'vision':
                if (value.trim() == '') {
                    errors.vision = '*Required.'
                    break
                }
                if (value.length < 10) {
                    errors.vision = 'Character is less than 10 so, enter more word.'
                    break
                }
                errors.vision = ''
                break
        }

        SetSubmition({
            ...Submition,
            [name]: value,
            errors
        })
    }

    const ValidationForm = (errors) => {
        let valid = true
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        )
        return valid
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (ValidationForm(Submition.errors)) {
            alert('Form Submited.')
             //update
            if (data._id === 0) {
                // insert
                delete data._id
                props.createNewAbout(data)
                setShow(true)
                MessageTime()
            } else {
                // update
                let tempUser = {}
                tempUser._id = data._id
                tempUser.about = data.about
                tempUser.mission = data.mission
                tempUser.vision = data.vision
                props.updateAbout(tempUser)
                setShow(true)
                MessageTime()
            }
        } else {
            alert('Please Fill Form Proper!')
        }
        setdata(initialdata)
    }

    //edit user
    const EditUser = (tempUser) => {
        Submition.errors = {}
        console.log(tempUser)
        setdata(tempUser)
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
        <div className="position-relative">
            
         {show && <Alert className='pb-0 position-absolute w-100' style={{"top" : "0" , "left" : "0px"}} variant="danger" onClose={() => setShow(false)} dismissible>
                        <p>{props.createAbout.msg}{props.createAbout.error}</p>
                  </Alert>
         }   <br/>  
            <Form className="container pt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>About</legend>
                    <Form.Group>
                        <Form.Label>About</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter any fact's or about detail for your website."
                            rows={2} onChange={HandleChange} name="about" value={data.about} />
                        <div style={{ color: '#f50000' }} >{Submition.errors.about}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Our Mission</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter your Mission." value={data.mission} rows={2} onChange={HandleChange} name="mission" />
                        <div style={{ color: '#f50000' }} >{Submition.errors.mission}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Our Vision</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter your Vision." value={data.vision} rows={2} onChange={HandleChange} name="vision" />
                        <div style={{ color: '#f50000' }} >{Submition.errors.vision}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form><br /><br />

            {/* Get Table Data */}
            {props.createAbout.getData.length > 0 &&
                <Table striped hover responsive className='container'>
                    <thead>
                        <tr>
                            <th>about</th>
                            <th>mission</th>
                            <th>vision</th>
                            <th>Edit | Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.createAbout.getData.map(theData =>
                            <tr key={theData._id}>
                                <td>{theData.about}</td>
                                <td>{theData.mission}</td>
                                <td>{theData.vision}</td>
                                <td>
                                    <ButtonGroup>
                                         <Button onClick={() => EditUser(theData)}>Edit</Button>&nbsp;&nbsp;
                                         <Button onClick={() => onDeleteData(theData)}>Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            }
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        createAbout: store.createAbout
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewAbout: (data) => dispatch(createAbout(data)),
        getAboutData: () => dispatch(GetAbout()),
        deleteAboutData: (theAbout) => dispatch(DeleteAbout(theAbout)),
        updateAbout: (data) => dispatch(UpdateAbout(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About)
