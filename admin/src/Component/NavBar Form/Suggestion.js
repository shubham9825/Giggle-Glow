/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Form, Button, Table, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CreateSuggestion, GetSuggestion, DeleteSuggestion, UpdateSuggestion } from '../../actions/Suggestion.action'

function Suggestion(props) {
    //validation purpose
    const [suggestion, setsuggestion] = useState({
        suggest: null,
        errors: {
            suggest: ' '
        }
    })

    //get request
    useEffect(() => {
        props.getsuggestion()
    }, [])

    //delete Data
    const onDeleteData = (theSuggest) => {
        if(confirm('Are you sure you want to Delete Record')){
            props.deletesuggestion(theSuggest)
            setShow(true)
            MessageTime()
        }
    }

    //api calling state
    const initialdata = {
        _id: 0,
        suggest: ''
    }

    const [data, setdata] = useState(initialdata)

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = suggestion.errors

        switch (name) {
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
        setsuggestion({
            ...suggestion,
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
        if (validateForm(suggestion.errors)) {
            alert("Form Submitted")
            //update
            if (data._id === 0) {
                // insert
                delete data._id
                props.NewSuggestion(data)
                setShow(true)
                MessageTime()
            } else {
                // update
                let tempUser = {}
                tempUser._id = data._id
                tempUser.suggest = data.suggest
                props.UpdateSuggestion(tempUser)
                setShow(true)
                MessageTime()
            }
        } else {
            alert("Form Not Submitted")
        }
        setdata(initialdata)
    }

    //edit user
    const EditUser = (tempUser) => {
        //suggestion.errors = {}
        console.log(tempUser)
        setdata(tempUser)
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
                <p>{props.CreateSuggestion.msg}{props.CreateSuggestion.error}</p>
            </Alert>
            }

            <Form className="container mt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Suggestion</legend>
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                    <br />
                    <Form.Group>
                        <Form.Label>Suggestion </Form.Label>
                        <Form.Control autoFocus={true} as='textarea' value={data.suggest} rows={5} name="suggest" onChange={HandleChange} placeholder="Enter Your Suggestion" />
                        <div style={{ color: '#f50000' }}>{suggestion.errors.suggest}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form>

            {/* Get Table Data */}
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Suggestion Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.CreateSuggestion.getData.length > 0 &&
                            <Table striped responsive hover className='table table-bordered'>
                                <thead>
                                    <tr><th colSpan="2" className="text-center">Response</th></tr>
                                </thead>
                                <tbody>
                                    {props.CreateSuggestion.getData.map(data =>
                                        <tr key={data._id}>
                                            <td>{data.suggest}</td>
                                            <td><Button onClick={() => EditUser(data)}>Edit</Button>&nbsp;&nbsp;<Button onClick={() => onDeleteData(data)}>Delete</Button></td>
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
        CreateSuggestion: store.CreateSuggestion
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        NewSuggestion: (data) => dispatch(CreateSuggestion(data)),
        getsuggestion: () => dispatch(GetSuggestion()),
        deletesuggestion: (theSuggest) => dispatch(DeleteSuggestion(theSuggest)),
        UpdateSuggestion: (data) => dispatch(UpdateSuggestion(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Suggestion)
