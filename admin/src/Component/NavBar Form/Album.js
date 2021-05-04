/* eslint-disable */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createAlbum, DeleteAlbum, GetAlbum, UpdateAlbum } from '../../actions/Album.action'
import Pagination from "react-js-pagination"

function Album(props) {
    //get request 
    useEffect(() => {
        props.GetAlbum()
    }, [])

    const [albumdata, setAlbumdata] = useState({
        album: null,
        errors: {
            album: ' '
        }
    })

    //api calling state
    const initialdata = {
        _id: 0,
        album: '',
        image: ''
    }
    const [data, setdata] = useState(initialdata)

    //display Previous updated Image name
    const [display, setdisplay] = useState(false)
    //edit user
    const EditUser = (theData) => {
         setdata(theData)
         setdisplay(true)
    }

    //delete data
    const onDeleteData = (theData) => {
        if (confirm('Are you sure you want to Delete Record')) {
            props.DeleteAlbum(theData)
            setShow(true)
            MessageTime()
        }
    }

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = albumdata.errors
        switch (name) {
            case 'album':
                if (value.trim() == '') {
                    errors.album = '*Required'
                    break
                }
                if (value.length < 3) {
                    errors.album = 'To Short...!'
                    break
                }
                errors.album = ''
                break
        }

        setAlbumdata({
            ...albumdata,
            [name]: value,
            errors
        })
        setdata({
            ...data,
            [name]: value
        })
    }

    const validationForm = (errors) => {
        let valid = true
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        )
        return valid;
    }

    const HandleSubmit = async (e) => {
        e.preventDefault()
        if (validationForm(albumdata.errors)) {
            if (data._id === 0) {
                const formdata = new FormData()
                formdata.append('file', dummy)
                console.log(dummy)
                if (dummy == '') {
                    alert('please Upload Image')
                } else {
                    if (!dummy.name.match(/\.(jpg|jpeg|png|gif|JPG|PNG|JPEG|GIF)$/)) {
                        alert('Only Jpg , Jpeg , Png , Gif File Allowed!!!')
                    } else {
                        delete data._id
                        const dummydata = JSON.stringify(data)
                        formdata.append('data', dummydata)
                        console.log(dummydata)
                        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}albums`, formdata, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        props.PostAlbum(data)
                        // props.GetAlbum()
                        setShow(true)
                        MessageTime()
                        e.target.reset()
                        setdata(initialdata)
                        // setdisplay(false)
                    }
                }
            } else {
                // update
                const formdata = new FormData()
                formdata.append('file', dummy)
                console.log(dummy)

                if (dummy == '') {
                    let _id = data._id
                    delete data._id
                    delete data.updatedAt
                    delete data.createdAt
                    console.log(data)
                    const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}albumdata/${_id}`, data)
                    props.UpdateAlbum(data)
                    setdata(initialdata)
                    e.target.reset()
                    setShow(true)
                    MessageTime()
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
                        const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}albums/${_id}`, formdata, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                    }
                    props.UpdateAlbum(data)
                    setdata(initialdata)
                    e.target.reset()
                    setShow(true)
                    MessageTime()
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

    //for image(use for store image in object)
    const [dummy, setdummy] = useState('')
    const HandleImage = (e) => {
        setdummy(e.target.files[0])
        setdata({
            ...data,
            image: e.target.files[0].name
        })
    }


    //pagination
    const [activePage, setCurrentPage] = useState(1)
    const todosPerPage = 10
    // Logic for displaying current  page
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = props.albumstore.getData.slice(indexOfFirstTodo, indexOfLastTodo);

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }
    return (
        <div style={{ marginTop: '60px' }} className="position-relative">
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.albumstore.errors}{props.albumstore.msg}</p>
            </Alert>
            }<br />

            <Form className="container mt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Album</legend>
                    <Form.Group>
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control autoFocus={true} type="text" onChange={HandleChange} value={data.album} placeholder="Enter Album Name" name='album' />
                        <div style={{ color: '#f50000' }} >{albumdata.errors.album}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.File name="UploadImg" onChange={HandleImage} alt="Image Not Uploaded" label="Enter Image"></Form.File><br />
                        {display && <p>{data.image}</p>}
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form> <br /><br />

            {/* Get Table Data */}
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Album Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.albumstore.getData.length > 0 &&
                            <Table striped hover responsive className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Album Name</th>
                                        <th>Image</th>
                                        <th>Edit | Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTodos.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.album}</td>
                                            <td style={{ cursor: 'pointer' }} onClick={() => window.open(`http://localhost:3001/Album/${theData.image}`, "_blank")}><img style={{ width: '150px', height: '150px', cursor: 'pointer' }} src={`http://localhost:3001/Album/${theData.image}`} alt='Image Not Found' /></td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant="success" onClick={() => EditUser(theData)}>Edit</Button>&nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => onDeleteData(theData)}>Delete</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan={3} className="text-center">
                                            <Pagination
                                                activePage={activePage}
                                                itemsCountPerPage={todosPerPage}
                                                totalItemsCount={props.albumstore.getData.length}
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
    )
}

const mapStateToProps = (store) => {
    return {
        albumstore: store.CreateAlbum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        PostAlbum: (data) => dispatch(createAlbum(data)),
        GetAlbum: () => dispatch(GetAlbum()),
        UpdateAlbum: (data) => dispatch(UpdateAlbum(data)),
        DeleteAlbum: (data) => dispatch(DeleteAlbum(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
