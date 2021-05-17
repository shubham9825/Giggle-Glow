/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Form, Button, Alert, Row, Col, Table, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getChild } from '../../actions/child.action'
import { createPayment, getReportData } from '../../actions/Payment.action'
import Pagination from "react-js-pagination"

function Payment(props) {
    const [payments, setpayments] = useState({
        t_date: new Date(),
        entry_time: null,
        exit_time: null,
        errors: {
            t_date: ' ',
            entry_time: ' ',
            exit_time: ' '
        }
    })

    const [show, setshow] = useState(false)

    const [totalShow, setTotalShow] = useState('')

    //use in api calling 
    const initialdata = {
        t_date: new Date().toString(),
        entry_time: '',
        exit_time: '',
        total_time: '',
        owner: ''
    }
    const [data, setdata] = useState(initialdata)

    const HandleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = payments.errors
        let total = "00:00"

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
                var date1 = new Date("08/05/2015 " + data.entry_time);
                var date2 = new Date("08/05/2015 " + value);

                var diff = date2.getTime() - date1.getTime();

                if (diff < 0) {
                    alert('Exit Time Not Valid')
                }

                console.log(`Diff : ${diff}`)
                var msec = diff;
                var hh = Math.floor(msec / 1000 / 60 / 60);
                msec -= hh * 1000 * 60 * 60;
                var mm = Math.floor(msec / 1000 / 60);
                total = `${hh}:${mm}`
                setTotalShow(total)
                console.log(total)
                break
        }

        if (mm > 30) {
            hh = hh + 1
        }
        console.log(hh)
        setpayments({
            ...payments,
            [name]: value,
            errors
        })

        setdata({
            ...data,
            [name]: value,
            total_time: hh
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
            setTotalShow('')
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

    const [report, setreport] = useState()
    const HandleReport = (e) => {
        let name = e.target.name
        let value = e.target.value

        setreport({
            ...report,
            [name]: value
        })
    }
    console.log(report)
    const SubmitReport = () => {
        props.getAllReport(report)
    }

    //pagination
    const [activePage, setCurrentPage] = useState(1)
    const todosPerPage = 10
    // Logic for displaying current  page
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    var currentTodos=[]
    if (props.CratePayment.getReport) {
        currentTodos = props.CratePayment.getReport.slice(indexOfFirstTodo, indexOfLastTodo);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div style={{ marginTop: '60px' }} className="position-relative">
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
                                <Form.Label>Select Child Name</Form.Label><br />
                                <select onChange={Handlekey}>
                                    <option hidden>Select Name</option>
                                    {props.createChild.getData.map(theData =>
                                        <option key={theData._id} value={theData._id}>{theData.fname}</option>
                                    )}
                                </select>
                            </div>
                        } <br />
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
                        <Form.Control type="text" name="total_time" onChange={HandleChange}
                            placeholder="Enter Total Time." value={totalShow} readOnly />
                        <div style={{ color: '#f50000' }}>{payments.errors.total_time}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>

                    {/* Get Payment Record (Get Child Dropdown)*/} <br /><br /><br />
                    <div className='container card-header'>
                        <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Generate Payment Report </h3><br />
                        <div className="card-body">

                            {props.createChild.getData.length > 0 &&
                                <Row>
                                    <Col md={3}>
                                        <Form.Label>Select Month</Form.Label><br />
                                        <select name='Month' onChange={HandleReport} >
                                            <option hidden>Select Month</option>
                                            <option value='1'>January</option>
                                            <option value='2'>February</option>
                                            <option value='3'>march</option>
                                            <option value='4'>April</option>
                                            <option value='5'>May</option>
                                            <option value='6'>june</option>
                                            <option value='7'>July</option>
                                            <option value='8'>Auguest</option>
                                            <option value='9'>September</option>
                                            <option value='10'>Octomber</option>
                                            <option value='11'>November</option>
                                            <option value='12'>December</option>
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Label>Select Year</Form.Label><br />
                                        <select name='Year' onChange={HandleReport}>
                                            <option hidden>Select Year</option>
                                            <option value='2021'>2021</option>
                                            <option value='2022'>2022</option>
                                            <option value='2023'>2023</option>
                                            <option value='2024'>2024</option>
                                            <option value='2025'>2025</option>
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <Button className='mt-3' variant="primary" type="button" onClick={SubmitReport}>Submit</Button>
                                    </Col>
                                </Row>
                            }<br />

                            <div className="table-responsive">
                                {props.CratePayment.getReport &&
                                    <Table striped responsive hover className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Child Name</th>
                                                <th>Contact No</th>
                                                <th>total Hour</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentTodos && currentTodos.map(theData =>
                                                <tr key={theData._id}>
                                                    <td>{theData.owner.fname}&nbsp;{theData.owner.parentnm}</td>
                                                    <td>{theData.owner.phonenum}</td>
                                                    <td>{theData.totalHour}</td>
                                                </tr>
                                            )}
                                            <tr>
                                                <td colSpan={4} className="text-center">
                                                    <Pagination
                                                        activePage={activePage}
                                                        itemsCountPerPage={todosPerPage}
                                                        totalItemsCount={props.CratePayment.getReport.length}
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
                </fieldset>
            </Form>
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
        getAllRegister: () => dispatch(getChild()),
        getAllReport: (report) => dispatch(getReportData(report))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)