/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Form, Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CreateLunch, DeleteLunch, GetLunch, UpdateLunch } from '../../actions/Lunch.action'

function Lunch(props) {
    const [lunch, setlunch] = useState({
        food: null,
        suggest: null,
        errors: {
            food: '*Requierd',
            suggest: '*Requierd'
        }
    })

    //get request
    useEffect(() => {
        props.getLunch()
    }, [])

    //delete Request
    const onDeleteData = (theLunch) => {
        console.log(theLunch)
        props.deleteLunch(theLunch)
        setShow(true)
        MessageTime()
    }

    //Update Request
    const EditUser = (tempUser) => {
        lunch.errors = {}
        console.log(tempUser)
        setdata(tempUser)
    }
    //api calling
    const initialdata = {
        _id: 0,
        food: '',
        suggest: ''
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
            case 'suggest':
                if (value.length < 10) {
                    errors.suggest = 'Title is Too Short!!!'
                    break
                }
                if (value.trim() == '') {
                    errors.suggest = 'Blank Space not Allowed!!!'
                    break
                }
                errors.suggest = ''
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
                tempUser.suggest = data.suggest
                props.updateLunch(tempUser)
                setShow(true)
                MessageTime()
            }
        } else {
            alert("Form Not Submitted")
        }
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
    return (
        <div className="position-relative">
             {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                     <p>{props.CreateLunch.msg}{props.CreateLunch.error}</p>
                      </Alert>
            }<br/>

            <Form className="container mt-5" onSubmit={HandleSubmit} >
                <fieldset>
                    <legend>Lunch</legend>
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                    <br />
                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" onChange={HandleChange} value={data.food} name="food" >
                            <option>Choose Food...</option>
                            <option>Wafer</option>
                            <option>Biscuit</option>
                            <option>Milk</option>
                            <option>Apple</option>
                            <option>Banana</option>
                        </Form.Control>
                        <div style={{ color: '#f50000' }} >{lunch.errors.food}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Lunch Suggestion </Form.Label>
                        <Form.Control as='textarea' rows={5} name="suggest" value={data.suggest} onChange={HandleChange} placeholder="Enter Your Suggestion" />
                        <div style={{ color: '#f50000' }}>{lunch.errors.suggest}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form><br /><br />

            {/* Get Table Data */}
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Lunch Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.CreateLunch.getData.length > 0 &&
                            <Table striped responsive hover className='container'>
                                <thead>
                                    <tr>    
                                        <th>Food</th>
                                        <th>Suggest</th>
                                        <th>Edit | Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.CreateLunch.getData.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.food}</td>
                                            <td>{theData.suggest}</td>
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
