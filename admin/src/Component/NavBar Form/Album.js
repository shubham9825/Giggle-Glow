import React, { useEffect, useState } from 'react'
import {Form,Button, Table, ButtonGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import { createAlbum, GetAlbum } from '../../actions/Album.action'

function Album(props) {

    //get request 
    useEffect(() => {
        props.GetAlbum()
    }, [])

    const [albumdata,setAlbumdata]=useState({
        album:null,
        errors:{
            album:' '
        }
    })

    //api calling state
    const initialdata = {
        album:''
    }
    const [data, setdata] = useState(initialdata)

    const HandleChange=(e)=>{
        let name = e.target.name
        let value = e.target.value
        let errors = albumdata.errors
        switch (name) {
            case 'album':
                if (value.trim() == '') {
                    errors.album = '*Required'
                    break
                }
                if (value.length < 3) {
                    errors.album = 'To Short...!'
                    break
                }
                errors.album = ''
                break
        }

        setAlbumdata({
            ...albumdata,
            [name]:value,
            errors
        })
        setdata({
            ...data,
            [name]:value
        })
    }

    const validationForm = (errors) => {
        let valid = true
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        )
        return valid;
    }

    const HandleSubmit=(e)=>{
        e.preventDefault()
        if (validationForm(albumdata.errors)) {
            alert("Form Submitted")
            props.PostAlbum(data)
            setdata(initialdata)
        } else {
            alert('Please Fill Proper Form!!!')
        }
    }
    
    return (
        <div style={{marginTop:'60px'}}>
            <p>{props.albumstore.errors} </p>
            <Form className="container pt-5" onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Album</legend>
                <Form.Group>
                    <Form.Label>Album Name</Form.Label>
                    <Form.Control autoFocus={true} type="text" onChange={HandleChange} value={data.album} placeholder="Enter Album Name" name='album'  />
                    <div style={{ color: '#f50000' }} >{albumdata.errors.album}</div>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form> <br/><br/>

            {/* Get Table Data */}
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Album Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.albumstore.getData.length > 0 &&
                            <Table striped hover responsive className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Album</th>
                                        
                                        {/* <th>Edit | Delete</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.albumstore.getData.map(theData =>
                                        <tr key={theData._id}>
                                            <td>{theData.album}</td>
                                            <td>
                                                <ButtonGroup>
                                                    {/* <Button variant="success" onClick={() => EditUser(theData)}>Edit</Button>&nbsp;&nbsp;
                                                    <Button variant="danger" onClick={() => onDeleteData(theData)}>Delete</Button> */}
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
      albumstore:store.CreateAlbum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        PostAlbum: (data) => dispatch(createAlbum(data)),
        GetAlbum:()=>dispatch(GetAlbum())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Album)
