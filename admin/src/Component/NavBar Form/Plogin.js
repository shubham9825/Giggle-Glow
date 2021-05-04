/* eslint-disable */
import React, { useState } from 'react'
import { Alert, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { CreatePlogin } from '../../actions/Plogin.action';

export function Plogin(props) {
  let history = useHistory()

  const [plogin, setplogin] = useState({
    email: null,
    password: null,
    errors: {
      email: ' ',
      password: ' '
    }
  })

  //api calling state
  const initialdata = {
    email: '',
    password: '',
  }
  const [data, setdata] = useState(initialdata)

  //login Redirect
  if (props.createPlogin.newData) {
    history.push('/profile')
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    let errors = plogin.errors

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

    setplogin({
      ...plogin,
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
    if (validationForm(plogin.errors)) {
      props.createNewPlogin(data)
      setShow(true)
      MessageTime()
      setdata(initialdata)
    } else {
      alert("Please Fill Proper Form")
    }
  }

  //Message State
  const [show, setShow] = useState(false);

  //Alert Message timing 
  const MessageTime = () => {
    setTimeout(() => {
      setShow(false)
    }, 5000)
  }

  //  Hide and Show Password
  const [isPasswordShown, setisPasswordShown] = useState(false)
  const togglePasswordVisiblity = () => {
    setisPasswordShown(!isPasswordShown);
  }

  return (
    <div>
      {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
        <p>{props.createPlogin.error}</p>
      </Alert>
      }
      <br /><br />
      <div className="auth-wrapper" >
        <div className="auth-inner" >
          <Form onSubmit={HandleSubmit}>
            <h3>Sign In For Parent's</h3>
            <div className="form-group">
              <label>Email address</label>
              <input autoFocus={true} type="email" onChange={handleChange} className="form-control" name='email' placeholder="Enter email" autoFocus={true} />
              <div style={{ color: '#f50000' }}>{plogin.errors.email}</div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className='wrap-input100'>
                <input type={isPasswordShown ? "text" : "password"} onChange={handleChange} className="form-control" name='password' placeholder="Enter password" />
                <i
                  className="fa fa-eye password-icon"
                  onClick={togglePasswordVisiblity}
                />
              </div>
              <div style={{ color: '#f50000' }}>{plogin.errors.password}</div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>

            <p className="forgot-password text-right">
              Forgot <Link to='/pforgot'>password?</Link>
            </p>
            <p className="forgot-password text-right">
              Back To <Link to='/'>Home ?</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    createPlogin: store.createPlogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewPlogin: (data) => dispatch(CreatePlogin(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Plogin)
