/* eslint-disable */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CreateService, DelService, GetService, UpdateService } from '../../actions/Service.action'
import Pagination from "react-js-pagination"

function Service(props) {
    //validation
    const [services, setservices] = useState({
        service_name: null,
        short_discription: null,
        errors: {
            service_name: ' ',
            short_discription: ' '
        }
    })

    //api call
    const initialdata = {
        _id: 0,
        service_name: '',
        short_discription: '',
        image: ''
    }
    const [data, setdata] = useState(initialdata)

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
        if (confirm('Are you sure you want to Delete Record')) {
            props.delServiceData(theService)
            setShow(true)
            MessageTime()
        }
    }

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
                if (value.trim() == '') {
                    errors.service_name = '*Required'
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
                if (value.trim() == '') {
                    errors.short_discription = '*Required'
                    break
                }
                errors.short_discription = ''
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

    //display Previous updated Image name
    const [display, setdisplay] = useState(false)
    //for image(use for store image in object)
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
                // Image upload condition
                if (dummy == '') {
                    alert('please Upload Image')
                } else {
                    if (!dummy.name.match(/\.(jpg|jpeg|png|gif|JPG|PNG|JPEG|GIF)$/)) {
                        alert('Only Jpg , Jpeg , Png , Gif File Allowed!!!')
                    } else {
                        console.log(data)
                        console.log(dummy)
                        delete data._id
                        const dummydata = JSON.stringify(data)
                        formdata.append('data', dummydata)
                        console.log(dummydata)
                        console.log('insert --------------------------------')
                        const response = await axios.post('http://localhost:3001/services', formdata, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        props.createNewService(data)
                        setShow(true)
                        MessageTime()
                        e.target.reset()
                        setdata(initialdata)
                     }
                }
            } else {
                const formdata = new FormData()
                formdata.append('file', dummy)
                if (dummy == '') {
                    console.log(data)
                    let id = data._id
                    delete data._id
                    delete data.createdAt
                    delete data.updatedAt
                    console.log(data)
                    console.log(id)
                    const response = await axios.put(`http://localhost:3001/servicedata/${id}`, data)

                    props.updateSerivce(data)
                    setShow(true)
                    MessageTime()
                    e.target.reset()
                    setdata(initialdata)
                 } else {
                    if (!dummy.name.match(/\.(jpg|jpeg|png|gif|JPG|PNG|JPEG|GIF)$/)) {
                        alert('Only Jpg , Jpeg , Png , Gif File Allowed!!!')
                    } else {
                        let id = data._id
                        delete data._id
                        delete data.createdAt
                        delete data.updatedAt
                        console.log(data)
                        const dummydata = JSON.stringify(data)
                        formdata.append('data', dummydata)
                        console.log(dummydata)

                        const response = await axios.put(`http://localhost:3001/services/${id}`, formdata, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        props.updateSerivce(data)
                        setShow(true)
                        MessageTime()
                        e.target.reset()
                        setdata(initialdata)
                     }
                }
            }
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

    //pagination
    const [activePage, setCurrentPage] = useState(1)
    const todosPerPage = 10
    // Logic for displaying current  page
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = props.createService.getData.slice(indexOfFirstTodo, indexOfLastTodo);

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }
    return (
        <>
            <div className="position-relative" style={{ marginTop: '60px' }}>
                {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                    <p>{props.createService.msg}{props.createService.error}</p>
                </Alert>
                } <br />

                <Form className='container mt-5 ' onSubmit={HandleSubmit}>
                    <fieldset>
                        <legend>Service</legend>
                        <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                        <br />
                        <Form.Group>
                            <Form.Label>Service Name</Form.Label>
                            <Form.Control autoFocus={true} type="text" name="service_name" onChange={HandleChange} placeholder="Enter Service Name" value={data.service_name} />
                            <div style={{ color: '#f50000' }}>{services.errors.service_name}</div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Short Description</Form.Label>
                            <Form.Control as="textarea" rows={2} name="short_discription" onChange={HandleChange} placeholder="Enter Short Discription" value={data.short_discription} />
                            <div style={{ color: '#f50000' }}>{services.errors.short_discription}</div>
                        </Form.Group>
                        <Form.Group>
                            <Form.File name="UploadImg" onChange={HandleImage} alt="Image Not Uploaded" label="Enter Image"></Form.File><br />
                            {display && <p>{data.image}</p>}
                        </Form.Group>
                        <Button type="submit" >Submit</Button>&nbsp;&nbsp;
                        <Button variant="primary" type="reset" onClick={HandleReset}>Reset</Button>
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
                                            <th>Image</th>
                                            <th>Edit | Delete </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentTodos.map(theData =>
                                            <tr key={theData._id} >
                                                <td>{theData.service_name}</td>
                                                <td>{theData.short_discription}</td>
                                                {/* When Click On Image Display Large Image */}
                                                <td style={{ cursor: 'pointer' }} onClick={() => window.open(`http://localhost:3001/service/${theData.image}`, "_blank")}><img style={{ width: '150px', height: '150px', cursor: 'pointer' }} src={`http://localhost:3001/service/${theData.image}`} alt='Image Not Found' /></td>
                                                <td>
                                                    <ButtonGroup>
                                                        <Button variant="success" onClick={() => editUser(theData)}>Edit</Button>&nbsp;&nbsp;
                                                        <Button variant="danger" onClick={() => deleteData(theData)}>Delete</Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        )}
                                        <tr>
                                            <td colSpan={6} className="text-center">
                                                <Pagination
                                                    activePage={activePage}
                                                    itemsCountPerPage={todosPerPage}
                                                    totalItemsCount={props.createService.getData.length}
                                                    pageRangeDisplayed={3}
                                                    onChange={handlePageChange} />
                                            </td>
                                        </tr>
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
