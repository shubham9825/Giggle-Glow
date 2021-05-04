import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Button, Alert, Table, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CreateGallery, DelGallary, GetGallery } from '../../actions/Gallery.action'
import { GetAlbum } from '../../actions/Album.action'
import Progress from './Progress'
import Pagination from "react-js-pagination"

function Gallery(props) {

    const [data, setdata] = useState('')
    const [owner,setowner]= useState('')
    const [msg, setmsg] = useState('')
    const [upload, setupload] = useState({})
    const [display, setdisplay] = useState(false)
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [testdata,settestdata]=useState('')

    //get request 
    useEffect(() => {
        props.GetAlbum()
    }, [])
    //delete
    const deleteData = (theData) => {
        props.deleteImage(theData)
        setshow(true)
        MessageTime()
    }

    const HandleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)

        const formData = new FormData();
        formData.append('file', data);
        console.log(data.name)
        if (data.name == null) {
            alert('Please Fill Proper Form!!!')
        } else {
            if (!data.name.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)) {
                alert('Only Jpg , Jpeg , Png , Gif File Allowed!!!')
                e.target.reset() //reset image and Clear Message
            } else {
                try {                
                    console.log(owner)
                    const response = await axios.post(`http://localhost:3001/upload/${owner}`, formData, {
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
                    props.getimage(testdata)
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

    const Handlekey = (e) => {
        const test = e.target.value
        settestdata(test)
        setowner(test)
        props.getimage(test)
    }
    
    //pagination
    const [activePage, setCurrentPage] = useState(1)
    const todosPerPage = 10
    // Logic for displaying current  page
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = props.creategallery.getData.slice(indexOfFirstTodo, indexOfLastTodo);

    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }

    return (
        <div className="position-relative" style={{marginTop:'60px'}}>
            {show && <Alert className='pb-0 position-absolute w-100' style={{ "top": "0", "left": "0px" }} variant="danger" onClose={() => setshow(false)} dismissible>
                <p>{msg}{props.creategallery.message}{props.creategallery.error}</p>
            </Alert>
            } <br />

            <Form className='container pt-5' onSubmit={HandleSubmit}>
                <fieldset >
                    <legend>Gallery</legend>
                    <hr className='m-0' style={{ background: 'rgb(148, 141, 141)' }}></hr>
                    <br />
                    <Form.Group>
                        {props.albumstore.getData.length > 0 &&
                            <div>
                                <Form.Label>Select list Name</Form.Label><br />
                                <select onChange={Handlekey}>
                                    <option hidden>Select Name</option>
                                    {props.albumstore.getData.map(theData =>
                                            <option key={theData._id} value={theData._id}>{theData.album}</option>
                                    )}
                                </select>
                            </div>
                        }  
                    </Form.Group>
                    <Form.Group>
                        <Form.File name='UploadImg' onChange={handleChange} label="Enter Image"></Form.File>
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
                            <Table striped responsive hover className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Response</th>
                                        <th className="text-center">Image</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTodos.map(theData =>
                                        <tr key={theData._id}>
                                            <td style={{ width: "30%" }}>{theData.fileName}</td>
                                            <td>
                                                <img style={{ width: '150px', height: '150px', cursor: 'pointer', display: 'block', marginRight: 'auto', marginLeft: 'auto' }} onClick={() => window.open(`http://localhost:3001/${theData.fileName}`, "_blank")} src={`http://localhost:3001/${theData.fileName}`} alt="Image Not Found" />
                                            </td>
                                            <td style={{ width: "20%" }}>
                                                <ButtonGroup>
                                                    <Button variant="danger" style={{ display: 'flex', justifyContent: 'center' }} onClick={() => deleteData(theData)}>Delete</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan={3} className="text-center">
                                            <Pagination
                                                activePage={activePage}
                                                itemsCountPerPage={todosPerPage}
                                                totalItemsCount={props.creategallery.getData.length}
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
        creategallery: store.CreateGallery,
        albumstore: store.CreateAlbum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gallerypost: (result) => dispatch(CreateGallery(result)),
        getimage: (owner) => dispatch(GetGallery(owner)),
        deleteImage: (theData) => dispatch(DelGallary(theData)),
        GetAlbum: () => dispatch(GetAlbum())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
