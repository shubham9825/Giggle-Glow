import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Button, Alert, Table, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CreateGallery, GetGallery } from '../../actions/Gallery.action'
import Progress from './Progress'
    
function Gallery(props) {

    const [data, setdata] = useState('')
    const [msg, setmsg] = useState('')
    const [upload, setupload] = useState({})
    const [display,setdisplay]=useState(false)
    const [uploadPercentage, setUploadPercentage] = useState(0);

    //get request
    useEffect(() => {
        props.getimage()
    }, [])

    const HandleSubmit = async (e) => {
        e.preventDefault()   
        console.log(data)
        console.log(data.name)

        const formData = new FormData();
        formData.append('file', data);
        if (data.name == null) {
            setmsg('Please Upload File !!!')
            setshow(true)   
        } else {
            if (!data.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                setmsg('Only Jpg , Jpeg , Png , Gif File Allowed')
                setshow(true)
                MessageTime()
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
                    
                    const dummy=JSON.stringify(response.data)
                    console.log(dummy)
                    props.gallerypost(dummy)

                    setdisplay(true)
                    const { fileName, filePath } = response.data
                    setupload({ fileName, filePath })
                    console.log(filePath)

                    setmsg('File Uploaded SuccessFully...')
                    setshow(true)
                    MessageTime()

                } catch (error) {
                    if(error.response.status === 500) {
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
     const MessageTime=()=>{
        setTimeout(() => {
            setshow(false)
          }, 7000)
    }
    
    return (
        <div className="position-relative">
            {show && <Alert className='pb-0 position-absolute w-100' style={{"top" : "0" , "left" : "0px"}} variant="danger" onClose={() => setshow(false)} dismissible>
                <p>{msg}</p>
            </Alert>
            }
         
            <Form className='container pt-5' onSubmit={HandleSubmit}>
                <fieldset>
                    <legend>Gallery</legend>   
                    <Form.Group>
                        <Form.File name='UploadImg' onChange={handleChange} label="Enter Image"></Form.File>
                    </Form.Group> 
                    <Progress percentage={uploadPercentage} /><br/>
                    <Button variant="primary" type="submit">Submit</Button>
                    {/* <p>{data.name}</p> */}
                    {display && (
                        <div className='row mt-5'>
                            <div className='col-md-6 m-auto'>
                                <h3 className='text-center'>{upload.fileName}</h3>
                                {/* <img style={{ width: '100%' }} src={`${__dirname}../../../../Giggle/src/uploads/${upload.fileName}`} alt='Image Not Found' /> */}
                                <img style={{ width: '100%' }} src={`http://localhost:3001/${upload.fileName}`} alt='Image Not Found' />
                            </div>
                        </div>
                    ) }
                </fieldset>
            </Form>

            {/* Display Image */}
            {props.creategallery.getData.length > 0 &&
                <Table striped hover className='container'>
                    <thead>
                        <tr>
                            <th className="text-center">Response</th>
                            <th className="text-center">Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.creategallery.getData.map(theData =>
                            <tr key={theData._id}>
                                <td>{theData.fileName}</td>
                                <td>{theData.filePath}</td>
                                {/* <td><Button onClick={() => editUser(theData)}>Edit</Button></td>
                                <td><Button onClick={() => deleteData(theData)}>Delete</Button></td> */}
                                <td>
                                    {/* <ButtonGroup>
                                         <Button onClick={() => editUser(theData)}>Edit</Button>&nbsp;&nbsp;
                                         <Button onClick={() => deleteData(theData)}>Delete</Button>
                                    </ButtonGroup> */}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            }
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
        getimage:()=>dispatch(GetGallery())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
