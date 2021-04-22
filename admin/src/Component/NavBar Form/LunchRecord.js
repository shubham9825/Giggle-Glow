import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { GetLunch } from '../../actions/Lunch.action'

function LunchRecord(props) {

    //get request
    useEffect(() => {
        props.getLunch()
    }, [])

    return (
        <>
            {/* Get Table Data */}<br /><br />
            <div className='container card-header'>
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
                                    {props.CreateLunch.getData.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.food}</td>
                                        </tr>
                                    )}
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
