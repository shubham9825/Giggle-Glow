/* eslint-disable */
import React, {useState } from 'react'
import {Alert, Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link  } from 'react-router-dom'
import {CreateSignup} from '../../actions/Signup.action'

function SignUp(props) {
    const [signup, setSignup] = useState({
        fname: null,
        lname: null,
        email: null,
        password: null,
        cpassword:null,
        errors: {
            fname: ' ',
            lname: ' ',
            email: ' ',
            password: ' ',
            cpassword: ' '
        }
    })
    //  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 
        
     //use in api calling 
     const initialdata = {
        fname: '',
        lname:'',
        email:'',
        password:''
    }
    const [data, setdata] = useState(initialdata)

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = signup.errors

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch (name) {
            case 'fname':
                if (value.trim() == '') {
                    errors.fname = '*Required'
                    break
                }
                if (value.length < 3) {
                    errors.fname = 'FirstName is To Short...'
                    break
                }
                errors.fname = ''
                break
            case 'lname':
                if (value.trim() == '') {
                    errors.lname = '*Required'
                    break
                }
                if (value.length < 3) {
                    errors.lname = 'LastName is To Short...'
                    break
                }
                errors.lname = ''
                break
            case 'email':
                if (!validEmailRegex.test(value)) {
                    errors.email = 'Please Enter Valid Email'
                    break
                }
                if (value.trim() == '') {
                    errors.email = '*Required'
                    break
                }
                errors.email = ''
                break
            case 'password': 
                if (value.trim() == '') {
                    errors.password = '*Required'
                    break
                }
                if (value.length < 8) {
                    errors.password = 'Password is To Short...!'
                    break
                }
                errors.password = ''
                break
            case 'cpassword':
                if (value.trim() == '') {
                    errors.cpassword = '*Required'
                    break
                }
                if (value.length < 8) {
                    errors.cpassword = 'Password is To Short...!'
                    break
                }
                if(value!==signup.password){
                    errors.cpassword = 'Password Not Match...!'
                    break
                }
                errors.cpassword = ''
                break     
        }   
        setSignup({
            ...signup,
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
        if (validateForm(signup.errors)) {         
            alert("Form Submitted")
            props.postSignup(data)
            setShow(true)
            MessageTime()
            setdata(initialdata)
        } else {
            alert("Please Fill Form Proper")
        }
    }

     //Message State
     const [show, setShow] = useState(false);
    
     //Alert Message timing 
     const MessageTime=()=>{
             setTimeout(() => {
                 setShow(false)
               }, 5000)
     }
    return (
        <div>
             {show && <Alert className='pb-0' variant="danger" onClose={() => setShow(false)} dismissible>
                        <p>{props.createSignup.msg}{props.createSignup.error}</p>
                    </Alert>
             }
              
            <div className="auth-wrapper " >
                <div className="auth-inner" style={{paddingBottom:'0px'}}>
                    <Form onSubmit={HandleSubmit}>
                        <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" value={data.fname} name='fname' onChange={HandleChange} className="form-control" placeholder="First name" />
                            <div style={{ color: '#f50000' }}>{signup.errors.fname}</div>
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" value={data.lname} name='lname' onChange={HandleChange} className="form-control" placeholder="Last name" />
                            <div style={{ color: '#f50000' }}>{signup.errors.lname}</div>
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" value={data.email} name='email' onChange={HandleChange} className="form-control" placeholder="Enter email" />
                            <div style={{ color: '#f50000' }}>{signup.errors.email}</div>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" value={data.password} name='password' onChange={HandleChange} className="form-control" placeholder="Enter password" />
                            <div style={{ color: '#f50000' }}>{signup.errors.password}</div>
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" name='cpassword' onChange={HandleChange} className="form-control" placeholder="Enter Confirm password" />
                            <div style={{ color: '#f50000' }}>{signup.errors.cpassword}</div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right"  >
                            Already registered <Link to='/login'>sign in?</Link>
                        </p>
                        
                    </Form><br/><br/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(store)=>{
    return{
        createSignup:store.createSignup
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        postSignup:(data)=>dispatch(CreateSignup(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
