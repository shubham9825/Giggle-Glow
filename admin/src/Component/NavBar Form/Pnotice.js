import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getNotice } from '../../actions/Notice.action'

function Pnotice(props) {

    //for getdata
    useEffect(() => {
        props.GetNotice()
    }, [])

    return (
        <>
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
                                {props.createNotice.getData.map(theData =>
                                    <tr key={theData._id}>
                                        <td style={{width:'20%'}}>{theData.title}</td>
                                        <td style={{width:'80%'}}>{theData.description}</td>
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
                    createNotice: store.createNotice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
                    GetNotice: () => dispatch(getNotice())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pnotice)
