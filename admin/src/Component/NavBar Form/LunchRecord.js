import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { GetLunch } from '../../actions/Lunch.action'
import Pagination from "react-js-pagination"

function LunchRecord(props) {

    //get request
    useEffect(() => {
        props.getLunch()
    }, [])

    //pagination
    const [activePage, setCurrentPage] = useState(1)
    const todosPerPage = 10
    // Logic for displaying current  page
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = props.CreateLunch.getData.slice(indexOfFirstTodo, indexOfLastTodo);

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }
    return (
        <>
            {/* Get Table Data */}<br /><br />
            <div className='container card-header' style={{ marginTop: '60px' }}>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Lunch Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.CreateLunch.getData.length > 0 &&
                            <Table striped hover responsive className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th className={"text-center"}>Today's &nbsp; Food </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTodos.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.food}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td className="text-center">
                                            <Pagination
                                                activePage={activePage}
                                                itemsCountPerPage={todosPerPage}
                                                totalItemsCount={props.CreateLunch.getData.length}
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
        </>
    )
}


const mapStateToProps = (store) => {
    return {
        CreateLunch: store.CreateLunch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLunch: () => dispatch(GetLunch()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LunchRecord)
