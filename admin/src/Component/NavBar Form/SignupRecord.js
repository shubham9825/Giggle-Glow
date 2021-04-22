/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { Alert, Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { DeleteSignup, GetSignup } from '../../actions/Signup.action'

function SignupRecord(props) {
    //get request
    useEffect(() => {
        props.getSignup()
    }, [])

    //delete Request
    const onDeleteData = (theRecord) => {
        if(confirm('Are you sure you want to Delete Record')){
            props.deleteRecord(theRecord)
            setShow(true)
            MessageTime()
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
        <>
            <div className="position-relative">
                {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                    <p>{props.createSignup.msg}{props.createSignup.error}</p>
                </Alert>
                } <br/>

                {/* Get Table Data */} <br /><br />
                <div className='container card-header'>
                    <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Signup Details</h3><br />
                    <div className="card-body">
                        <div className="table-responsive">
                            {props.createSignup.getData.length > 0 &&
                                <Table striped responsive hover className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th className="text-center">FirstName</th>
                                            <th className="text-center">LastName</th>
                                            <th className="text-center">Email</th>
                                            <th className="text-center">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {props.createSignup.getData.map(theData =>
                                            <tr key={theData._id}>
                                                <td>{theData.fname}</td>
                                                <td>{theData.lname}</td>
                                                <td>{theData.email}</td>
                                                <td><Button variant='danger' onClick={() => onDeleteData(theData)}>Delete</Button></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (store) => {
    return {
        createSignup: store.createSignup
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSignup: () => dispatch(GetSignup()),
        deleteRecord: (theRecord) => dispatch(DeleteSignup(theRecord))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignupRecord)
