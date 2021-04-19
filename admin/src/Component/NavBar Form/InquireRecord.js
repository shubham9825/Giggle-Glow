/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { connect } from 'react-redux';
import { GetInquiry, DeleteInquiry } from '../../actions/Inquiry.action'

function Inqurie(props) {
    const [inquirys, setinquirys] = useState({
        fname: null,
        lname: null,
        email: null,
        phone: null,
        message: null,
        errors: {
            fname: '*Required',
            lname: '*Required',
            email: '*Required',
            phone: '*Required',
            message: '*Required'
        }
    })
    //get request
    useEffect(() => {
        props.GetInquiryData()
    }, [])

    //delete request
    const onDeleteData = (theInquiry) => {
        props.deleteInquiryData(theInquiry)
        setShow(true)
        MessageTime()
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
                <p>{props.createInquiry.msg}{props.createInquiry.error}</p>
            </Alert>
            }
            <br /><br />

            {/* Get Table Data */}
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Inquiry Record's</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.createInquiry.getData.length > 0 &&
                            <Table striped responsive hover className='container'>
                                <thead>
                                    <tr>
                                        <th>FirstName</th>
                                        <th>LastName</th>
                                        <th>Email</th>
                                        <th>Phone No</th>
                                        <th>Message</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.createInquiry.getData.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.fname}</td>
                                            <td>{theData.lname}</td>
                                            <td>{theData.email}</td>
                                            <td>{theData.phone}</td>
                                            <td>{theData.message}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button onClick={() => onDeleteData(theData)}>Delete</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        createInquiry: store.createInquiry
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetInquiryData: () => dispatch(GetInquiry()),
        deleteInquiryData: (theInquiry) => dispatch(DeleteInquiry(theInquiry))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Inqurie)
