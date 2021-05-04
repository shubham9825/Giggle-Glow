import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getAttandance } from '../../actions/Attandance.action'

function Attandance(props) {
    const auth = JSON.parse(sessionStorage.login)
    console.log(auth)
    useEffect(() => {
        props.getAttandance(auth._id)
    }, [])
   
    return (
        <div>
            <div className='container card-header' style={{marginTop:'100px'}}>
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
                                    {props.createAttand.newData.map(thedata =>
                                        <tr key={thedata._id} key={thedata._id}>
                                            <td>{thedata.t_date}</td>
                                            <td>{thedata.total_time}</td>
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
        createAttand: store.CreateAttandace
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAttandance: (Data) => dispatch(getAttandance(Data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Attandance)
