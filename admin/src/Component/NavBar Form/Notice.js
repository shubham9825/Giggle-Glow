/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Form, Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { createNotice, DelNotice, getNotice, UpdateNotice } from '../../actions/Notice.action'
import { connect } from 'react-redux'
import Pagination from "react-js-pagination"

export function Notice(props) {
    //for getdata
    useEffect(() => {
        props.GetNotice()
    }, [])

    //delete
    const delData = (thenotice) => {
        if (confirm('Are you sure you want to Delete Record')) {
            props.delNoticeData(thenotice)
            setShow(true)
            MessageTime()
        }
    }
    const [notice, setnotice] = useState({
        title: null,
        description: null,
        errors: {
            title: ' ',
            description: ' '
        }
    })

    //update
    const updateData = (tempUser) => {
        setdata(tempUser)
        notice.errors = {}
    }

    const initialState = {
        _id: 0,
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
                if (value.length < 5) {
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
            if (data._id === 0) {
                delete data._id//delete
                props.CreateNewNotice(data)
                setShow(true)
                MessageTime()
            } else {
                let tempUser = {}
                tempUser._id = data._id
                tempUser.title = data.title
                tempUser.description = data.description
                props.updateNotice(tempUser)
                setShow(true)
                MessageTime()
            }
            setdata(initialState)
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
        setdata(initialState)
    }

    //pagination
    const [activePage, setCurrentPage] = useState(1)
    const todosPerPage = 10
    // Logic for displaying current  page
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = props.createNotice.getData.slice(indexOfFirstTodo, indexOfLastTodo);

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }
    return (
        <>
            <div className="position-relative" style={{ marginTop: '60px' }}>
                {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                    <p>{props.createNotice.msg}{props.createNotice.error}</p>
                </Alert>
                }<br />
                <Form className="container mt-5" onSubmit={HandleSubmit}>
                    <fieldset>
                        <legend>Notice</legend>
                        <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                        <br />
                        <Form.Group>
                            <Form.Label>Notice Title</Form.Label>
                            <Form.Control type="text" name="title" onChange={HandleChange} placeholder="Enter Notice Heading." value={data.title} />
                            <div style={{ color: '#f50000' }}>{notice.errors.title}</div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Notice Description</Form.Label>
                            <Form.Control as="textarea" name="description" onChange={HandleChange} placeholder="Enter Notice." value={data.description} rows={3} />
                            <div style={{ color: '#f50000' }}>{notice.errors.description}</div>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>&nbsp;&nbsp;
                    <Button variant="primary" type="reset" onClick={HandleReset}>Reset</Button>

                    </fieldset>
                </Form>
                <br /><br />

                {/* Get Table Data */}
                <div className='container card-header'>
                    <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Inquiry Details</h3><br />
                    <div className="card-body">
                        <div className="table-responsive">
                            {props.createNotice.getData.length > 0 &&
                                <Table striped responsive hover className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th className="text-center">Title</th>
                                            <th className="text-center">Description</th>
                                            <th>Edit | Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentTodos.map(theData =>
                                            <tr key={theData._id}>
                                                <td style={{ width: '20%' }}>{theData.title}</td>
                                                <td>{theData.description}</td>
                                                <td style={{ width: '20%' }}>
                                                    <ButtonGroup>
                                                        <Button variant="success" onClick={() => updateData(theData)}>Edit</Button>&nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => delData(theData)}>Delete</Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        )}
                                        <tr>
                                            <td colSpan={3} className="text-center">
                                                <Pagination
                                                    activePage={activePage}
                                                    itemsCountPerPage={todosPerPage}
                                                    totalItemsCount={props.createNotice.getData.length}
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
        createNotice: store.createNotice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CreateNewNotice: (data) => dispatch(createNotice(data)),
        GetNotice: () => dispatch(getNotice()),
        delNoticeData: (thenotice) => dispatch(DelNotice(thenotice)),
        updateNotice: (editData) => dispatch(UpdateNotice(editData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notice)
