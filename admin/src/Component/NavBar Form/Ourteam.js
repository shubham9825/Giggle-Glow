/* eslint-disable */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, ButtonGroup, Form, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CreateTeam, DelTeam, GetTeam, UpdateTeam } from '../../actions/Ourteam.action'
import Pagination from "react-js-pagination"

function Ourteam(props) {
    const [team, setTeam] = useState({
        name: null,
        post: null,
        errors: {
            name: ' ',
            post: ' '
        }
    })

    //api call
    const initialdata = {
        _id: 0,
        name: '',
        post: '',
        image: ''
    }
    const [data, setdata] = useState(initialdata)

    //display Previous updated Image
    const [display, setdisplay] = useState(false)

    //getdata
    useEffect(() => {
        props.getTeam()
    }, [])

    //deletedata
    const deleteData = (theData) => {
        if (confirm('Are you sure you want to Delete Record')) {
            props.delTeam(theData)
            setShow(true)
            MessageTime()
        }
    }

    //editdata
    const editUser = (tempUser) => {
        setdata(tempUser)
        setdisplay(true)
        team.errors = {}
    }

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = team.errors

        switch (name) {
            case 'name':
                if (value.length < 3) {
                    errors.name = 'Name is Too Short!'
                    break
                }
                if (value.trim() == '') {
                    errors.name = '*Required'
                    break
                }
                if (!(/^[a-z A-Z]*$/g).test(value)) {
                    errors.name = 'Enter Alphabets only! '
                    break
                }
                errors.name = ''
                break
            case 'post':
                if (value.length < 3) {
                    errors.post = 'Name is Too Short!'
                    break
                }
                if (value.trim() == '') {
                    errors.post = '*Required'
                    break
                }
                if (!(/^[a-z A-Z]*$/g).test(value)) {
                    errors.post = 'Enter Alphabets only! '
                    break
                }
                errors.post = ''
                break
        }
        setTeam({
            ...team,
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
        if (validateForm(team.errors)) {
            if (data._id === 0) {
                const formdata = new FormData()
                formdata.append('file', dummy)
                console.log(dummy)
                // Image upload condition
                if (dummy == '') {
                    alert('please Upload Image')
                } else {
                    if (!dummy.name.match(/\.(jpg|jpeg|png|gif|JPG|PNG|JPEG|GIF)$/)) {
                        alert('Only Jpg , Jpeg , Png , Gif File Allowed!!!')
                    } else {
                        delete data._id
                        const dummydata = JSON.stringify(data)
                        console.log(dummydata)
                        formdata.append('data', dummydata)

                        const response = await axios.post('http://localhost:3001/ourteams', formdata, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        //post request
                        props.postTeam(data)
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
                    let _id = data._id
                    delete data._id
                    delete data.updatedAt
                    delete data.createdAt
                    console.log(data)
                    const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}teamdata/${_id}`, data)
                    props.editTeam(data)
                    setShow(true)
                    MessageTime()
                    e.target.reset()
                    setdata(initialdata)
                } else {
                    if (!dummy.name.match(/\.(jpg|jpeg|png|gif|JPG|PNG|JPEG|GIF)$/)) {
                        alert('Only Jpg , Jpeg , Png , Gif File Allowed!!!')
                    } else {
                        let _id = data._id
                        delete data._id
                        delete data.updatedAt
                        delete data.createdAt
                        console.log(data)
                        const dummydata = JSON.stringify(data)
                        formdata.append('data', dummydata)
                        console.log(dummydata)
                        const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}ourteams/${_id}`, formdata, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        props.editTeam(data)
                        setShow(true)
                        MessageTime()
                        e.target.reset()
                        setdata(initialdata)
                    }
                }
            }
        } else {
            alert('form not submitted')
        }
    }

    //reset button
    const HandleReset = () => {
        setdata(initialdata)
    }

    //Message State 
    const [show, setShow] = useState(false)

    //Alert Message timing 
    const MessageTime = () => {
        setTimeout(() => {
            setShow(false)
        }, 4000)
    }
    //pagination
    const [activePage, setCurrentPage] = useState(1)
    const todosPerPage = 10
    // Logic for displaying current  page
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = props.CreateTeam.getData.slice(indexOfFirstTodo, indexOfLastTodo);

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }
    return (
        <>
            <div style={{ marginTop: '60px' }} className="position-relative">
                {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                    <p>{props.CreateTeam.msg}{props.CreateTeam.error}</p>
                </Alert>
                } <br />

                <Form className='container mt-5' onSubmit={HandleSubmit}>
                    <fieldset>
                        <legend>Our Team</legend>
                        <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                        <br />
                        <Form.Group>
                            <Form.Label>Staff Member Name</Form.Label>
                            <Form.Control autoFocus={true} type="text" name="name" value={data.name} placeholder="Enter Name" onChange={HandleChange} />
                            <div style={{ color: '#f50000' }}>{team.errors.name}</div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Post</Form.Label>
                            <Form.Control type='text' name="post" value={data.post} placeholder="Enter post " onChange={HandleChange} />
                            <div style={{ color: '#f50000' }}>{team.errors.post}</div>
                        </Form.Group>
                        <Form.Group>
                            <Form.File name="UploadImg" onChange={HandleImage} alt="Image Not Uploaded" label="Choose Image"></Form.File> <br />
                            {display && data.image}
                        </Form.Group>
                        <Button type="submit" >Submit</Button>&nbsp;&nbsp;
                        <Button variant="primary" type="reset" onClick={HandleReset}>Reset</Button>
                    </fieldset>
                </Form>
            </div>

            {/* Get Table Data */} <br /><br />
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Service Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.CreateTeam.getData.length > 0 &&
                            <Table striped responsive hover className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Member Name</th>
                                        <th>Post </th>
                                        <th>Image</th>
                                        <th>Edit | Delete </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTodos.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.name}</td>
                                            <td>{theData.post}</td>
                                            {/* When Click On Image Display Large Image */}
                                            <td style={{ cursor: 'pointer' }} onClick={() => window.open(`http://localhost:3001/OurTeam/${theData.image}`, "_blank")}><img style={{ width: '150px', height: '150px', cursor: 'pointer' }} src={`http://localhost:3001/OurTeam/${theData.image}`} alt='Image Not Found' /></td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="success" onClick={() => editUser(theData)}>Edit</Button>&nbsp;&nbsp;
                                                        <Button variant="danger" onClick={() => deleteData(theData)}>Delete</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan={4} className="text-center">
                                            <Pagination
                                                activePage={activePage}
                                                itemsCountPerPage={todosPerPage}
                                                totalItemsCount={props.CreateTeam.getData.length}
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
        </>
    )
}


const mapStateToProps = (store) => {
    return {
        CreateTeam: store.CreateTeam
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postTeam: (data) => dispatch(CreateTeam(data)),
        getTeam: () => dispatch(GetTeam()),
        delTeam: (theData) => dispatch(DelTeam(theData)),
        editTeam: (temp) => dispatch(UpdateTeam(temp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ourteam)
