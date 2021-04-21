import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createPayment } from '../../actions/Payment.action'
import TimePicker from 'react-time-picker';


function Payment(props) {
    const [payments, setpayments] = useState({
        t_date: null,
        entry_time: null,
        exit_time: null,
        total_time: null,
        fees: null,
        errors: {
            t_date: '*Required',
            entry_time: '*Required',
            exit_time: '*Required',
            total_time: '*Required',
            fees: '*Required'
        }
    })

     //use in api calling 
     const initialdata = {
         t_date:'',
         entry_time:'',
         exit_time:'',
         total_time:'',
        fees:''
    }
    const [data, setdata] = useState(initialdata)

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = payments.errors

        switch (name) {
            case 't_date':
                if (value.trim() == '') {
                    errors.t_date = 'Required'
                    break
                }
                errors.t_date = ''
                break

            case 'entry_time':
                errors.entry_time = ''
                break

            case 'exit_time':
                errors.exit_time = ''
                break

            case 'total_time':
                errors.total_time = ''
                break

            case 'fees':
                if (!(/^[0-9]*$/g).test(value)) {
                    errors.fees = 'Enter Alphabets only!'
                    break
                }
                errors.fees = ''
                break

        }

        setpayments({
            ...payments,
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
        if (validateForm(payments.errors)) {
            alert("Form Submitted")
            props.postPayment(data)
            e.target.reset()
        } else {
            alert("Form Not Submitted")
        }
    }
    
    const [value, onChange] = useState('10:00');

    return (
        <>
        <p>{props.CratePayment.error}</p>
            <Form className="container mt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Payment / Fees</legend>
                    <TimePicker
        onChange={onChange}
        value={value}
      />
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="t_date" data-date="" data-date-format="YYYY-MM-DD" onChange={HandleChange} placeholder="Enter Date." />
                        <div style={{ color: '#f50000' }}>{payments.errors.t_date}</div>
                        {/* <input type="date" data-date="" data-date-format="YYYY-MM-DD"  ></input> */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Entry Time</Form.Label>
                        <Form.Control pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" type="text" name="entry_time" onChange={HandleChange} placeholder="Enter Entry Time." />
                        <div style={{ color: '#f50000' }}>{payments.errors.entry_time}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Exit Time</Form.Label>
                        <Form.Control type="time" name="exit_time" onChange={HandleChange} placeholder="Enter Exit Time." />
                        <div style={{ color: '#f50000' }}>{payments.errors.exit_time}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Total Time</Form.Label>
                        <Form.Control type="time" name="total_time" onChange={HandleChange} placeholder="Enter Total Time." />
                        <div style={{ color: '#f50000' }}>{payments.errors.total_time}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fee's</Form.Label>
                        <Form.Control type="text" name="fees" onChange={HandleChange} placeholder="Enter Instalment Number." />
                        <div style={{ color: '#f50000' }}>{payments.errors.fees}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form>
        </>
    )
}


const mapStateToProps = (store) => {
    return {
        CratePayment: store.CratePayment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postPayment: (data) => dispatch(createPayment(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Payment)