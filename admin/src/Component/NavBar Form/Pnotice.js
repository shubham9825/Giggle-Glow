import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getNotice } from '../../actions/Notice.action'
import Pagination from "react-js-pagination"

function Pnotice(props) {
    //for getdata
    useEffect(() => {
        props.GetNotice()
    }, [])

    //pagination
    const [activePage, setCurrentPage] = useState(1)
    const todosPerPage = 10
    // Logic for displaying current  page
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = props.createNotice.getData.slice(indexOfFirstTodo, indexOfLastTodo);

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }
    return (
        <div style={{ marginTop: '60px' }}>
            <br /><br /><br />
            {/* Get Table Data */}
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Notice</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.createNotice.getData.length > 0 &&
                            <Table striped responsive hover className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th className="text-center">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTodos.map(theData =>
                                        <tr key={theData._id}>
                                            <td style={{ width: '20%' }}>{theData.title}</td>
                                            <td style={{ width: '80%' }}>{theData.description}</td>
                                        </tr>
                                    )}
                                </tbody>
                                <tr>
                                    <td colSpan={2} className="text-center">
                                        <Pagination
                                            activePage={activePage}
                                            itemsCountPerPage={todosPerPage}
                                            totalItemsCount={props.createNotice.getData.length}
                                            pageRangeDisplayed={3}
                                            onChange={handlePageChange} />
                                    </td>
                                </tr>
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
        createNotice: store.createNotice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetNotice: () => dispatch(getNotice())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pnotice)
