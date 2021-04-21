/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Form, Button, Table, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CreateSuggestion } from '../../actions/Suggestion.action'

function Suggestion(props) {
    //validation purpose
    const [suggestion, setsuggestion] = useState({
        suggest: null,
        errors: {
            suggest: ' '
        }
    })

    //api calling state
    const initialdata = {
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
            props.NewSuggestion(data)
            setShow(true)
            MessageTime()
            setdata(initialdata)
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
    return (
        <div className="position-relative">
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.CreateSuggestion.msg}{props.CreateSuggestion.error}</p>
            </Alert>
            }
            <br /> 

            <Form className="container mt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Suggestion</legend>
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                    <br />
                    <Form.Group>
                        <Form.Label>Suggestion </Form.Label>
                        <Form.Control as='textarea' value={data.suggest} rows={5} name="suggest" onChange={HandleChange} placeholder="Enter Your Suggestion" />
                        <div style={{ color: '#f50000' }}>{suggestion.errors.suggest}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        CreateSuggestion: store.CreateSuggestion
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        NewSuggestion: (data) => dispatch(CreateSuggestion(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Suggestion)
