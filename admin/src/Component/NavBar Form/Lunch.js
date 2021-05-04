/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Form, Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CreateLunch, DeleteLunch, GetLunch, UpdateLunch } from '../../actions/Lunch.action'
import Pagination from "react-js-pagination"

function Lunch(props) {
    const [lunch, setlunch] = useState({
        food: null,
        errors: {
            food: ' '
        }
    })

    //get request
    useEffect(() => {
        props.getLunch()
    }, [])

    //delete Request
    const onDeleteData = (theLunch) => {
        if (confirm('Are you sure you want to Delete Record')) {
            props.deleteLunch(theLunch)
            setShow(true)
            MessageTime()
        }
    }

    //Update Request
    const EditUser = (tempUser) => {
        lunch.errors = {}
        setdata(tempUser)
    }
    //api calling
    const initialdata = {
        _id: 0,
        food: ''
    }
    const [data, setdata] = useState(initialdata)

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = lunch.errors
        switch (name) {
            case 'food':
                if (value.trim() == '') {
                    errors.food = '*Required'
                    break
                }
                errors.food = ''
                break
        }
        setlunch({
            ...lunch,
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
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (validationForm(lunch.errors)) {
            alert("Form Submitted")
            //update
            if (data._id === 0) {
                // insert
                delete data._id
                props.postLunch(data)
                setShow(true)
                MessageTime()
            } else {
                // update
                let tempUser = {}
                tempUser._id = data._id
                tempUser.food = data.food
                props.updateLunch(tempUser)
                setShow(true)
                MessageTime()
            }
            setdata(initialdata)
        } else {
            alert('Please Fill Proper Form! !!')
        }
    }

    //Message State
    const [show, setShow] = useState(false)
    //Alert Message timing 
    const MessageTime = () => {
        setTimeout(() => {
            setShow(false)
        }, 5000)
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
    const currentTodos = props.CreateLunch.getData.slice(indexOfFirstTodo, indexOfLastTodo);

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }
    return (
        <div className="position-relative" style={{ marginTop: '60px' }}>
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.CreateLunch.msg}{props.CreateLunch.error}</p>
            </Alert>
            }<br />

            <Form className="container mt-5" onSubmit={HandleSubmit} >
                <fieldset>
                    <legend>Lunch</legend>
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                    <br />
                    <Form.Group>
                        <Form.Label>Food</Form.Label>
                        <Form.Control as='textarea' rows={3} name="food" value={data.food} onChange={HandleChange} placeholder="Enter Today's Food  " />
                        <div style={{ color: '#f50000' }}>{lunch.errors.food}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>&nbsp;&nbsp;
                    <Button variant="primary" type="reset" onClick={HandleReset}>Reset</Button>
                </fieldset>
            </Form><br /><br />

            {/* Get Table Data */}
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Lunch Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.CreateLunch.getData.length > 0 &&
                            <Table striped hover responsive className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Food</th>
                                        <th>Edit | Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTodos.map(theData =>
                                        <tr key={theData._id}>
                                            <td style={{ width: '80%' }}>{theData.food}</td>
                                            <td style={{ width: '20%' }}>
                                                <ButtonGroup>
                                                    <Button variant="success" onClick={() => EditUser(theData)}>Edit</Button>&nbsp;&nbsp;
                                                   <Button variant="danger" onClick={() => onDeleteData(theData)}>Delete</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan={2} className="text-center">
                                            <Pagination
                                                activePage={activePage}
                                                itemsCountPerPage={todosPerPage}
                                                totalItemsCount={props.CreateLunch.getData.length}
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
        CreateLunch: store.CreateLunch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postLunch: (data) => dispatch(CreateLunch(data)),
        getLunch: () => dispatch(GetLunch()),
        deleteLunch: (theLunch) => dispatch(DeleteLunch(theLunch)),
        updateLunch: (data) => dispatch(UpdateLunch(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Lunch)
