/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Button, Table, ButtonGroup, Alert } from 'react-bootstrap'
import { connect } from 'react-redux';
import { GetInquiry, DeleteInquiry } from '../../actions/Inquiry.action'
import Pagination from "react-js-pagination"

function Inqurie(props) {
    
    //get request
    useEffect(() => {
        props.GetInquiryData()
    }, [])

    //delete request
    const onDeleteData = (theInquiry) => {
        if(confirm('Are you sure you want to Delete Record')){
            props.deleteInquiryData(theInquiry)
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

    
    //pagination
    const [activePage, setCurrentPage] = useState(1)
    const todosPerPage = 10
     // Logic for displaying current  page
     const indexOfLastTodo = activePage * todosPerPage
     const indexOfFirstTodo = indexOfLastTodo - todosPerPage
     const currentTodos = props.createInquiry.getData.slice(indexOfFirstTodo, indexOfLastTodo)
     
    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }
    return (
        <div className="position-relative" style={{marginTop:'60px'}}>
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.createInquiry.msg}{props.createInquiry.error}</p>
            </Alert>
            } <br/>
           
            {/* Get Table Data */} <br /><br />
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Inquiry Record's</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.createInquiry.getData.length > 0 &&
                            <Table striped hover responsive className='table table-bordered'>
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
                                    {currentTodos.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.fname}</td>
                                            <td>{theData.lname}</td>
                                            <td>{theData.email}</td>
                                            <td>{theData.phone}</td>
                                            <td>{theData.message}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button variant='danger' onClick={() => onDeleteData(theData)}>Delete</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan={6} className="text-center">
                                            <Pagination
                                                activePage={activePage}
                                                itemsCountPerPage={todosPerPage}
                                                totalItemsCount={props.createInquiry.getData.length}
                                                pageRangeDisplayed={3}
                                                onChange={handlePageChange} />
                                        </td>
                                    </tr>
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
