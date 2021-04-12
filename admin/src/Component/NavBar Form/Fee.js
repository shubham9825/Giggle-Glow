/* eslint-disable */
import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
 
function Fee() {

    const [Submit,SetSubmit] = useState({
        fees:null,
        paidamt:null,
        unpaidamt:null,
        errors:{
            fees:'*Required',
            paidamt:'*Required',
            unpaidamt:'*Required',
        }
    })

    const HandleChange =(e)=>{
        let name=e.target.name
        let value = e.target.value
        let errors = Submit.errors

        switch (name) {
            case 'fees':
                if(value.trim() == ''){
                    errors.fees = '*Requierd'
                    break
                }
                if(!(/^[0-9]*$/g).test(value)){
                    errors.fees = 'Only Number!'
                    break
                }
                errors.fees = ''
            break
            case 'paidamt':
                if(value.trim() == ''){
                    errors.paidamt = '*Requierd'
                    break
                }
                if(!(/^[0-9]*$/g).test(value)){
                    errors.paidamt = 'Only Number!'
                    break
                }
                errors.paidamt = ''
            break
            case 'unpaidamt':
                if(value.trim() == ''){
                    errors.unpaidamt = '*Requierd'
                    break
                }
                if(!(/^[0-9]*$/g).test(value)){
                    errors.unpaidamt = 'Only Number!'
                    break
                }
                errors.unpaidamt= ''
            break
        }
        SetSubmit({
            ...Submit,
            [name]:value,
            errors
        })
    }

    const validationForm =(errors)=>{
        let valid = true
        Object.values(errors).forEach(
            (val)=>val.length > 0 && (valid = false)
        )
        return valid
    }

    const HandleSubmit =(e)=>{
        e.preventDefault()
        if (validationForm(Submit.errors)) {
            alert("Form Submitted")
        } else {
            alert("Form Not Submitted")
        }
    }
    return (
        <>
            <Form className="container mt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Payment / Fees</legend>
                    <Form.Group>
                        <Form.Label>Instalment Total Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter Instalment Total Amount." name="fees" onChange={HandleChange}/>
                        <div style={{color:'#f50000'}} >{Submit.errors.fees}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Paid Instalment Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter Paid Instalment Amount." name="paidamt" onChange={HandleChange}/>
                        <div style={{color:'#f50000'}} >{Submit.errors.paidamt}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Unpaid Instalment Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter Unpaid Instalment Amount." name="unpaidamt" onChange={HandleChange}/>
                        <div style={{color:'#f50000'}} >{Submit.errors.unpaidamt}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form>
        </>
    )
}

export default Fee
