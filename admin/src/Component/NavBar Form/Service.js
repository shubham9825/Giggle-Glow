/* eslint-disable */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CreateService, DelService, GetService, UpdateService } from '../../actions/Service.action'

function Service(props) {
    //validation
    const [services, setservices] = useState({
        service_name: null,
        short_discription: null,
        tagline: null,
        long_question: null,
        errors: {
            service_name: '*Required',
            short_discription: '*Required',
            tagline: '*Required',
            long_question: '*Required'
        }
    })

    //getdata
    useEffect(() => {
        props.GetAllService()
    }, [])

    //editdata
    const editUser = (tempUser) => {
        setdata(tempUser)
        setdisplay(true)
        services.errors = {}
    }

    //deletedata
    const deleteData = (theService) => {
        console.log(theService)
        props.delServiceData(theService)
        setShow(true)
        MessageTime()
    }

    //api call
    const initialState = {
        _id: 0,
        service_name: '',
        short_discription: '',
        tagline: '',
        long_question: '',
        image: ''
    }

    //message Display
    const [msg, setmsg] = useState('')
    //api call
    const [data, setdata] = useState(initialState)

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = services.errors

        switch (name) {
            case 'service_name':
                if (value.length < 3) {
                    errors.service_name = 'Service Name is Too Short!'
                    break
                }
                if (!(/^[a-z A-Z]*$/g).test(value)) {
                    errors.service_name = 'Enter Alphabets only! '
                    break
                }
                errors.service_name = ''
                break
            case 'short_discription':
                if (value.length < 10) {
                    errors.short_discription = 'description is Too Short!'
                    break
                }
                if (!(/^[a-z A-Z]*$/g).test(value)) {
                    errors.short_discription = 'Enter Alphabets only!'
                    break
                }
                errors.short_discription = ''
                break
            case 'tagline':
                if (value.trim() == '') {
                    errors.tagline = 'Required'
                    break
                }
                if (value.length < 3) {
                    errors.tagline = 'Tagline is Too Short!'
                    break
                }
                if (!(/^[a-z A-Z]*$/g).test(value)) {
                    errors.tagline = 'Enter Alphabets only!'
                    break
                }
                errors.tagline = ''
                break
            case 'long_question':
                if (value.length < 5) {
                    errors.long_question = 'Tagline is Too Short!'
                    break
                }
                if (!(/^[a-zA-Z0-9   ]*$/g).test(value)) {
                    errors.long_question = 'Enter Alphabets only!'
                    break
                }
                errors.long_question = ''
                break
        }

        setservices({
            ...services,
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

    //display Previous updated Image
    const [display, setdisplay] = useState(false)
    //for image(use for store image object)
    const [dummy, setdummy] = useState('')

    const HandleImage = (e) => {
        setdummy(e.target.files[0])
        setdata({
            ...data,
            image: e.target.files[0].name
        })
    }

    const HandleSubmit = async (e) => {
        e.preventDefault()

        if (validateForm(services.errors)) {
            if (data._id === 0) {
                const formdata = new FormData()
                formdata.append('file', dummy)

                if (!dummy.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                    alert('Only Jpg , Jpeg , Png , Gif File Allowed!!!')
                } else {
                    delete data._id
                    const dummydata = JSON.stringify(data)
                    formdata.append('data', dummydata)

                    const response = await axios.post('http://localhost:3001/services', formdata, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    console.log(response.data)
                    setmsg('')
                    props.createNewService(data)
                    props.GetAllService()
                    setShow(true)
                    MessageTime()
                    setdata(initialState)
                }
            } else {
                let tempUser = {}
                tempUser._id = data._id
                tempUser.service_name = data.service_name
                tempUser.short_discription = data.short_discription
                tempUser.tagline = data.tagline
                tempUser.long_question = data.long_question
                tempUser.image = data.image
                props.updateSerivce(tempUser)
                setmsg('')
                setShow(true)
                MessageTime()
                setdata(initialState)
            }
            e.target.reset()
            setdisplay(false)
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
            {show && <Alert className='pb-0' variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{msg}{props.createService.msg}{props.createService.error}</p>
            </Alert>
            } <br/>

            <Form className='container mt-5 ' onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Service</legend>
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                    <br />
                    <Form.Group>
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control type="text" name="service_name" onChange={HandleChange} placeholder="Enter Service Name" value={data.service_name} />
                        <div style={{ color: '#f50000' }}>{services.errors.service_name}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control as="textarea" rows={2} name="short_discription" onChange={HandleChange} placeholder="Enter Short Discription" value={data.short_discription} />
                        <div style={{ color: '#f50000' }}>{services.errors.short_discription}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>TagLine</Form.Label>
                        <Form.Control type="text" name="tagline" onChange={HandleChange} placeholder="Enter TagLine" value={data.tagline} />
                        <div style={{ color: '#f50000' }}>{services.errors.tagline}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Long Question</Form.Label>
                        <Form.Control as="textarea" name="long_question" onChange={HandleChange} rows={2} placeholder="Enter Your Question" value={data.long_question} />
                        <div style={{ color: '#f50000' }}>{services.errors.long_question}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.File name="UploadImg" onChange={HandleImage} alt="Image Not Uploaded" label="Enter Image"></Form.File><br />
                        {display && <img style={{ width: '150px', height: '150px', cursor: 'pointer' }} onClick={() => window.open(`http://localhost:3001/service/${data.image}`, "_blank")} src={`http://localhost:3001/service/${data.image}`} alt='Image Not Found' />}
                    </Form.Group>
                    <Button variant="primary" type="submit" >Submit</Button>
                </fieldset>
            </Form><br /><br />

            {/* Get Table Data */}
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Service Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.createService.getData.length > 0 &&
                            <Table striped responsive hover className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Service Name</th>
                                        <th>Service Discription</th>
                                        <th>Service Tagline</th>
                                        <th>Service Question</th>
                                        <th>Image</th>
                                        <th>Edit | Delete </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.createService.getData.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.service_name}</td>
                                            <td>{theData.short_discription}</td>
                                            <td>{theData.tagline}</td>
                                            <td>{theData.long_question}</td>
                                            {/* When Click On Image Display Large Image */}
                                            <td style={{ cursor: 'pointer' }} onClick={() => window.open(`http://localhost:3001/service/${theData.image}`, "_blank")}><img style={{ width: '150px', height: '150px', cursor: 'pointer' }} src={`http://localhost:3001/service/${theData.image}`} alt='Image Not Found' /></td>
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
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (store) => {
    return {
        createService: store.createService
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewService: (data) => dispatch(CreateService(data)),
        GetAllService: () => dispatch(GetService()),
        delServiceData: (theService) => dispatch(DelService(theService)),
        updateSerivce: (editData) => dispatch(UpdateService(editData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Service)
