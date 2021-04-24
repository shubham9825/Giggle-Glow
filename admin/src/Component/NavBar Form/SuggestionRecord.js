/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Button, Table, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { GetSuggestion, DeleteSuggestion } from '../../actions/Suggestion.action'

function SuggestionRecord(props) {

    //get request
    useEffect(() => {
        props.getsuggestion()
    }, [])

    //delete Data
    const onDeleteData = (theSuggest) => {
        if(confirm('Are you sure you want to Delete Record')){
            props.deletesuggestion(theSuggest)
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
        <div className="position-relative" style={{marginTop:'60px'}}>
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.CreateSuggestion.msg}{props.CreateSuggestion.error}</p>
            </Alert>
            }  
           
            {/* Get Table Data */} <br /><br /><br />
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Suggestion Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.CreateSuggestion.getData.length > 0 &&
                            <Table  striped responsive hover className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th className="text-center">Response</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.CreateSuggestion.getData.map(data =>
                                        <tr key={data._id}>
                                            <td style={{width:'80%'}}>{data.suggest}</td>
                                            <td style={{width:'20%'}}><Button variant='danger' onClick={() => onDeleteData(data)}>Delete</Button></td>
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
        CreateSuggestion: store.CreateSuggestion
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getsuggestion: () => dispatch(GetSuggestion()),
        deletesuggestion: (theSuggest) => dispatch(DeleteSuggestion(theSuggest))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SuggestionRecord)
