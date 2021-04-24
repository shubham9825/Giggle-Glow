/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getChild } from '../../actions/child.action'
import { createPayment } from '../../actions/Payment.action'

function Payment(props) {
    const [payments, setpayments] = useState({
        t_date: new Date(),
        entry_time: null,
        exit_time: null,
        total_time: null,
        fees: null,
        errors: {
            t_date: '*Required',
            entry_time: '*Required',
            exit_time: '*Required',
            total_time: '*Required'
        }
    })

    const [show,setshow]=useState(false)

    //use in api calling 
    const initialdata = {
        t_date: new Date().toString(),
        entry_time: '',
        exit_time: '',
        total_time: '',
        owner:''
    }
    const [data, setdata] = useState(initialdata)

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = payments.errors
        let total="00:00"

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
                var date1 = new Date("08/05/2015 "+data.entry_time);
                var date2 = new Date("08/05/2015 "+value);

                var diff = date2.getTime() - date1.getTime();

                if(diff<0){
                    alert('Exit Time Not Valid')
                }

                console.log(`Diff : ${diff}`)    
                var msec = diff;
                var hh = Math.floor(msec / 1000 / 60 / 60);
                msec -= hh * 1000 * 60 * 60;
                var mm = Math.floor(msec / 1000 / 60);
                total=`${hh}:${mm}`
                break

            case 'total_time':
                errors.total_time = ''
                break
        }

        if(mm>30){
            hh = hh+1            
        }

        console.log(hh)
        setpayments({
            ...payments,
            [name]: value,
            total_time:total,
            errors
        })

        setdata({
            ...data,
            [name]: value,
            total_time:total
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
            setshow(true)
            e.target.reset()
        } else {
            alert("Form Not Submitted")
        }
    }
    //get request
    useEffect(() => {
        props.getAllRegister()
    }, [])

    const Handlekey = (e) => {
        const owner = e.target.value

        setdata({
            ...data,
            owner
        })
    }
    console.log(data)
    return (
        <div style={{marginTop:'60px'}} className="position-relative"> 
            {show && <Alert className='pb-0 position-absolute  w-100' style={{ "top": "0", "left": "0" }} variant="danger" onClose={() => setShow(false)} dismissible>
                         <p>{props.CratePayment.error}</p>
                     </Alert>}
                <br />
            <Form className="container mt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Child Attandance</legend>
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                        <br />
                    <Form.Group>
                    {props.createChild.getData.length > 0 &&
                        <div>
                            <Form.Label>Select list Name</Form.Label><br />
                            <select onChange={Handlekey}>
                                <option hidden>Select Name</option>
                                {props.createChild.getData.map(theData =>
                                    <option value={theData._id}>{theData.fname}</option>
                                )}
                                <br />
                            </select>
                        </div>
                    }
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="t_date" data-date=""  
                        onChange={HandleChange} placeholder="Enter Date." />
                        <div style={{ color: '#f50000' }}>{payments.errors.t_date}</div>
                        {/* <input type="date" data-date="" data-date-format="YYYY-MM-DD"  ></input> */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Entry Time</Form.Label>
                        <Form.Control type="time" name="entry_time" onChange={HandleChange} 
                        placeholder="Enter Entry Time." />
                        <div style={{ color: '#f50000' }}>{payments.errors.entry_time}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Exit Time</Form.Label>
                        <Form.Control type="time" name="exit_time" onChange={HandleChange} placeholder="Enter Exit Time." />
                        <div style={{ color: '#f50000' }}>{payments.errors.exit_time}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Total Time</Form.Label>
                        <Form.Control type="text"  name="total_time" onChange={HandleChange} 
                        placeholder="Enter Total Time." value={data.total_time} readOnly/>
                        <div style={{ color: '#f50000' }}>{payments.errors.total_time}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form>

            <br /><br /><br />
        </div>
    )
}


const mapStateToProps = (store) => {
    return {
        CratePayment: store.CratePayment,
        createChild: store.createChild
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postPayment: (data) => dispatch(createPayment(data)),
        getAllRegister: () => dispatch(getChild())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)