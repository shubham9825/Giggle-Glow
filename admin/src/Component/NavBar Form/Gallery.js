/* eslint-disable */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Button, Alert, Table, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CreateGallery, DelGallary, GetGallery } from '../../actions/Gallery.action'
import Progress from './Progress'

function Gallery(props) {

    const [data, setdata] = useState('')
    const [msg, setmsg] = useState('')
    const [upload, setupload] = useState({})
    const [display, setdisplay] = useState(false)
    const [uploadPercentage, setUploadPercentage] = useState(0);

    // get request
    useEffect(() => {
        props.getimage()
    }, [])

    //delete
    const deleteData = (theData) => {
        if(confirm('Are you sure you want to Delete Image')){
            props.deleteImage(theData)
            setshow(true)
            MessageTime()
        }
    }

    const HandleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('file', data);
        console.log(data.name)
        if (data.name == null) {
            alert('Please Fill Proper Form!!!')
        } else {
            if (!data.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                alert('Only Jpg , Jpeg , Png , Gif File Allowed!!!')
                e.target.reset() //reset image and Clear Message
            } else {
                try {
                    const response = await axios.post('http://localhost:3001/upload', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        onUploadProgress: progressEvent => {
                            setUploadPercentage(
                                parseInt(
                                    Math.round((progressEvent.loaded * 100) / progressEvent.total)
                                ),

                            );
                            // Clear percentage
                            setTimeout(() => {
                                e.target.reset() //reset image and Clear Message
                                setdisplay(false) //Image remove after 7 second
                                setUploadPercentage(0)
                            }, 7000);
                        }
                    })
                    console.log(response.data)

                    const dummy = JSON.stringify(response.data)
                    console.log(dummy)
                    props.gallerypost(dummy)
                    setmsg('')
                    setdata('')

                    setdisplay(true)
                    const { fileName, filePath } = response.data
                    setupload({ fileName, filePath })

                    setshow(true)
                    MessageTime()

                } catch (error) {
                    if (error.response.status === 500) {
                        setmsg('There was a problem with the server')
                        setshow(true)
                        MessageTime()
                    }
                }
            }
        }

    }

    const handleChange = (e) => {
        setdata(e.target.files[0])
    }

    //message state
    const [show, setshow] = useState(false)

    //Alert Message timing 
    const MessageTime = () => {
        setTimeout(() => {
            setshow(false)
        }, 7000)
    }

    return (
        <div className="position-relative">
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setshow(false)} dismissible>
                <p>{msg}{props.creategallery.message}{props.creategallery.error}</p>
            </Alert>
            } <br/>

            <Form className='container pt-5' onSubmit={HandleSubmit}>
                <fieldset >
                    <legend>Gallery</legend>
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                    <br/>
                    <Form.Group>
                        <Form.File autoFocus={true} name='UploadImg' onChange={handleChange} label="Enter Image"></Form.File>
                    </Form.Group>
                    <Progress percentage={uploadPercentage} /><br />
                    <Button variant="primary" type="submit">Submit</Button>
                    {/* <p>{data.name}</p> */}
                    {display && (
                        <div className='row mt-5'>
                            <div className='col-md-6'>
                                <img style={{ width: '150px', height: '150px', cursor: 'pointer' }} onClick={() => window.open(`http://localhost:3001/${upload.fileName}`, "_blank")} src={`http://localhost:3001/${upload.fileName}`} alt='Image Not Found' />
                            </div>
                        </div>
                    )}
                </fieldset>
            </Form><br /><br />

            {/* Display Image */}
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Gallery Details</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        {props.creategallery.getData.length > 0 &&
                            <Table striped hover responsive className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Response</th>
                                        <th className="text-center">Image</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.creategallery.getData.map(theData =>
                                        <tr key={theData._id}>
                                            <td style={{width:"30%"}}>{theData.fileName}</td>
                                            <td>
                                                <img style={{ width: '150px', height: '150px', cursor: 'pointer',display: 'block',marginRight: 'auto',marginLeft: 'auto' }} onClick={() => window.open(`http://localhost:3001/${theData.fileName}`, "_blank")} src={`http://localhost:3001/${theData.fileName}`} alt="Image Not Found" />
                                            </td>
                                            <td style={{width:"20%"}}>
                                                <ButtonGroup>
                                                    <Button variant="danger" style={{display: 'flex', justifyContent: 'center'}}  onClick={() => deleteData(theData)}>Delete</Button>
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
        creategallery: store.CreateGallery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gallerypost: (result) => dispatch(CreateGallery(result)),
        getimage: () => dispatch(GetGallery()),
        deleteImage: (theData) => dispatch(DelGallary(theData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
