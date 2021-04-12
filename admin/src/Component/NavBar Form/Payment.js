/* eslint-disable */
import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
 
function Payment() {
    const [payments,setpayments]=useState({
        paymentdt:null,
        installmentno:null,
        installmentamt:null,
        errors:{
            paymentdt:'*Required',
            installmentno:'*Required',
            installmentamt:'*Required',
        }
    })

    const HandleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        let errors=payments.errors
        
        switch(name){
            case 'paymentdt':  
                if(value.trim()==''){
                    errors.paymentdt='Required'
                    break
                }
                errors.paymentdt=''
                break
             
            case 'installmentno': 
                if(!(/^[0-9]*$/g).test(value)){
                    errors.installmentno='Enter Alphabets only!' 
                    break   
                }
                errors.installmentno=''
                break
            
            case 'installmentamt': 
                if(!(/^[0-9]*$/g).test(value)){
                    errors.installmentamt='Enter Alphabets only!' 
                    break   
                }
                errors.installmentamt=''
                break
             
        }
        
        setpayments({
            ...payments,
            [name]:value,
            errors
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
      
    const HandleSubmit=(e)=>{
        e.preventDefault()
        if(validateForm(payments.errors)) {
            alert("Form Submitted")
        }else{
            alert("Form Not Submitted")
        }
    }

    return (
        <>
            <Form className="container mt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Payment / Fees</legend>
                    <Form.Group>
                        <Form.Label>Payment Date</Form.Label>
                        <Form.Control type="date" name="paymentdt" onChange={HandleChange} placeholder="Enter Payment Date." />
                        <div style={{color:'#f50000'}}>{payments.errors.paymentdt}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Instalment Number</Form.Label>
                        <Form.Control type="text" name="installmentno" onChange={HandleChange} placeholder="Enter Instalment Number." />
                        <div style={{color:'#f50000'}}>{payments.errors.installmentno}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Instalment Amount</Form.Label>
                        <Form.Control type="text" name="installmentamt" onChange={HandleChange} placeholder="Enter Instalment Amount." />
                        <div style={{color:'#f50000'}}>{payments.errors.installmentamt}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form>
        </>
    )
}

export default Payment
