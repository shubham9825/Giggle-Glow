/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Alert, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { CreatePforgot, UpdatePforgot } from '../../actions/Pforgot.action'

function Pforgot(props) {

    let history = useHistory()
    //validation For Email        
    const [pforgot, setpforgot] = useState({
        email: null,
        errors: {
            email: ' ',
        }
    })

    // Validation For Otp
    const [validotp, setvalidotp] = useState({
        otp: null,
        errors: {
            otp: ' '
        }
    })

    //validation password & confirm Password
    const [validpass, setvalidpass] = useState({
        password: null,
        cpassword: null,
        errors: {
            password: ' ',
            cpassword: ' '
        }
    })

    // Api Call
    const initialdata = {
        email: '',
        otp: '',
        password: ''
    }
    const [data, setdata] = useState(initialdata)

    //otp generate 
    useEffect(() => {
        props.createPforgot.showmail = true
        props.createPforgot.showOtp = false
        const min = 1000
        const max = 9999
        var otp = Math.floor(Math.random() * (max - min + 1)) + min //otp generate
        setdata({
            ...data,
            otp
        })
    }, [])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = pforgot.errors

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
        }

        setpforgot({
            ...pforgot,
            [name]: value,
            errors
        })
        setdata({
            ...data,
            [name]: value
        })
    }

    const HandleOtp = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = validotp.errors

        switch (name) {
            case 'otp':
                if (value.trim() == '') {
                    errors.otp = '*Required'
                    break
                }
                if (value.length != 4) {
                    errors.otp = 'You Enter Wrong OTP!!! OTP must be 4 Digits'
                    break
                }
                errors.otp = ''
                break
        }
        setvalidotp({
            ...validotp,
            [name]: value,
            errors
        })
    }

    const HandlePass = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = validpass.errors

        switch (name) {
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
                if (value !== validpass.password) {
                    errors.cpassword = 'Password Not Match...!'
                    break
                }
                errors.cpassword = ''
                break
        }
        setvalidpass({
            ...validpass,
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

    const EmailSubmit = (e) => {
        e.preventDefault()
        if (validationForm(pforgot.errors)) {
            //otp send call
            props.forgotPass(data)
            setShow(true)
            MessageTime()
        } else {
            alert("Please Fill Proper Form")
        }
    }

    const OtpSubmit = (e) => {
        e.preventDefault()
        if (validationForm(validotp.errors)) {
            if (validotp.otp == data.otp) {
                alert('Otp Varified')
                setpass(true)
                props.createPforgot.showOtp = false
            } else {
                setpass(false)
                alert('not match')
            }
        } else {
            alert("Please Fill Proper Form")
        }
    }

    const PassSubmit = (e) => {
        e.preventDefault()
        if (validationForm(validpass.errors)) {
            props.editpass(data)
            setShow(true)
            MessageTime()
            setTimeout(() => {
                history.push('/plogin')
            }, 2000);
        } else {
            alert("Please Fill Proper Form")
        }
    }

    //message 
    const [show, setShow] = useState(false)
    //password
    const [pass, setpass] = useState(false)

    //Alert Message timing 
    const MessageTime = () => {
        setTimeout(() => {
            setShow(false)
        }, 10000)
    }


    //  Hide and Show Passwords
    const [isPasswordShown, setisPasswordShown] = useState(false)
    const togglePasswordVisiblity = () => {
        setisPasswordShown(!isPasswordShown);
    }

    const [isPasswordShow, setisPasswordShow] = useState(false)
    const togglePasswordVisible = () => {
        setisPasswordShow(!isPasswordShow);
    }
    return (
        <div>
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.createPforgot.msg}{props.createPforgot.error}</p>
            </Alert>
            }
            <br /><br />
            <div className="auth-wrapper" >
                <div className="auth-inner" >
                    <Form  >
                        <h3>Forgot Password</h3>
                        {props.createPforgot.showmail && <div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input autoFocus={true} type="email" value={data.email} onChange={handleChange} className="form-control" name='email' placeholder="Enter email"
                                    autoFocus={true} />
                                <div style={{ color: '#f50000' }}>{pforgot.errors.email}</div>
                            </div>
                            <button type="submit" onClick={EmailSubmit} className="btn btn-primary btn-block mb-2">Submit</button>
                        </div>}

                        {props.createPforgot.showOtp && <div>
                            <div className="form-group">
                                <label>Enter OTP</label>
                                <input type="number" onChange={HandleOtp} className="form-control" name='otp' placeholder="Enter OTP" autoFocus={true} />
                                <div style={{ color: '#f50000' }}>{validotp.errors.otp}</div>
                            </div><button type="submit" onClick={OtpSubmit} className="btn btn-primary btn-block mb-2">Submit</button>
                        </div>}

                        {pass && <div>
                            <div className="form-group">
                                <label>Password</label>
                                <div className='wrap-input100'>
                                    <input type={isPasswordShown ? "text" : "password"} onChange={HandlePass} name='password' className="form-control" placeholder="Enter password" autoFocus={true} />
                                    <i
                                        className="fa fa-eye password-icon"
                                        onClick={togglePasswordVisiblity}
                                    />
                                </div>
                                <div style={{ color: '#f50000' }}>{validpass.errors.password}</div>
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <div className='wrap-input100'>
                                    <input type={isPasswordShow ? "text" : "password"} onChange={HandlePass} name='cpassword' className="form-control" placeholder="Enter Confirm password" />
                                    <i
                                        className="fa fa-eye password-icon"
                                        onClick={togglePasswordVisible}
                                    />
                                </div>
                                <div style={{ color: '#f50000' }}>{validpass.errors.cpassword}</div>
                            </div>
                            <button type="submit" onClick={PassSubmit} className="btn btn-primary btn-block mb-2">Submit</button>
                        </div>
                        }
                        <p className="forgot-password text-right">
                            Back To <Link to='/plogin'>Sign In?</Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        createPforgot: store.createPforgot
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        forgotPass: (data) => dispatch(CreatePforgot(data)),
        editpass: (data) => dispatch(UpdatePforgot(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pforgot)
