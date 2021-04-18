/* eslint-disable */
import React, { useState } from 'react'
import { Alert, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { CreateLogin } from '../../actions/Login.action';
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login(props) {
  let history = useHistory()
  const [login, setlogin] = useState({
    email: null,
    password: null,
    errors: {
      email: ' ',
      password: ' '
    }
  })

  //Message State
  const [show, setShow] = useState(false);

  //api calling state
  const initialdata = {
    email: '',
    password: '',
  }
  const [data, setdata] = useState(initialdata)
  //login Redirect
  if (props.createLogin.newData) {
    history.push('/home')
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    let errors = login.errors

    setdata({
      ...data,
      [name]: value
    })

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    switch (name) {
      case 'email':
        if (!validEmailRegex.test(value)) {
          errors.email = 'Please Enter Valid Email-Address.'
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
        if (value.length < 0) {
          errors.password = 'Password error...!'
        }
        errors.password = ''
        break
    }

    setlogin({
      ...login,
      [name]: value,
      errors
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
    e.preventDefault()
    if (validationForm(login.errors)) {
      props.createNewLogin(data)
      setShow(true)
      setdata(initialdata)
    } else {
      alert("Please Fill Proper Form")
      // setShow(true)
      toast.error("Please Fill Proper Form");
    }
  }

  // Alert Message timing 
  //  const MessageTime=()=>{
  //          setTimeout(() => {
  //              setShow(false)
  //            }, 5000)
  //  }
  return (
    <>
       {show && <Alert className='pb-0 position-absolute w-100'  variant="danger" style={{ "top": "0", "left": "0px" }} onClose={() => setShow(false)} dismissible>
                    <p>{props.createLogin.error}</p>
             </Alert>  }
          
      {/* {show && <span>{toast.success(props.createLogin.error)} </span>} */}
         <ToastContainer/>  
      <div className="auth-wrapper" >
        <div className="auth-inner" >
          <Form onSubmit={HandleSubmit}>
            <h3>Sign In</h3>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" onChange={handleChange} className="form-control" name='email' placeholder="Enter email" />
              <div style={{ color: '#f50000' }}>{login.errors.email}</div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" onChange={handleChange} className="form-control" name='password' placeholder="Enter password" />
              <div style={{ color: '#f50000' }}>{login.errors.password}</div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>

            <p className="forgot-password text-right">
              Forgot <Link to='/forgot'>password?</Link>
            </p>
            <p className="forgot-password text-right">
              New User? <Link to='/Signup'>Create an Account</Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    createLogin: store.createLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewLogin: (data) => dispatch(CreateLogin(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
