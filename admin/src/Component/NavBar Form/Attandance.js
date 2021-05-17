import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Pagination from 'react-js-pagination'
import { connect } from 'react-redux'
import { getAttandance } from '../../actions/Attandance.action'

function Attandance(props) {
    const auth = JSON.parse(sessionStorage.login)
    console.log(auth)
    useEffect(() => {
        props.getAttandance(auth._id)
    }, [])

    //pagination
    const [activePage, setCurrentPage] = useState(1)
    const todosPerPage = 10
    // Logic for displaying current  page
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    var currentTodos = []
    if (props.createAttand.newData) {
        currentTodos = props.createAttand.newData.slice(indexOfFirstTodo, indexOfLastTodo);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div>
            <div className='container card-header' style={{ marginTop: '100px' }}>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Daily Attandance Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.createAttand.newData &&
                            <Table striped hover responsive className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Total Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTodos && currentTodos.map(thedata =>
                                        <tr key={thedata._id} key={thedata._id}>
                                            <td>{thedata.t_date}</td>
                                            <td>{thedata.total_time}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan={4} className="text-center">
                                            <Pagination
                                                activePage={activePage}
                                                itemsCountPerPage={todosPerPage}
                                                totalItemsCount={props.createAttand.newData.length}
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
        createAttand: store.CreateAttandace
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAttandance: (Data) => dispatch(getAttandance(Data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Attandance)
