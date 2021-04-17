import React, { useEffect, useState } from 'react'
import { Alert,Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getProfile } from '../../actions/Profile.action'

function Profile(props) {

    // console.log(JSON.parse(sessionStorage.login))
    // //for getdata
    // useEffect(() => {
    //     console.log('dummy data')
    //     props.GetProfile(auth)
    // }, [])
    const auth = JSON.parse(sessionStorage.login)

    //Message State
    const [show, setShow] = useState(false)
    

    return (
        <>
            {show && <Alert className='pb-0' variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.createProfile.msg}{props.createProfile.error}</p>
            </Alert>
            }
            <h1>hello</h1>
            <br /><br /><br />
            {/* Get Table Data */} 
            {/* {props.createProfile.getData &&
                <Table striped hover className='container'>
                    <thead>
                        <tr>
                        <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zipcode</th>
                            <th>Gender</th>
                            <th>Parent's name</th>
                            <th>Parent's no.</th>
                            <th>Place of work</th>
                            <th>email</th>
                            <th>Dr. Name</th>
                            <th>Dr. phone num.</th>
                            <th>Allergies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.createProfile.getData.map(theData =>
                            <tr key={theData._id}>
                                <td>{theData.fname}</td>
                                <td>{theData.lname}</td>
                                <td>{theData.address}</td>
                                <td>{theData.city}</td>
                                <td>{theData.states}</td>
                                <td>{theData.zipcode}</td>
                                <td>{theData.gender}</td>
                                <td>{theData.parentnm}</td>
                                <td>{theData.phonenum}</td>
                                <td>{theData.plcwork}</td>
                                <td>{theData.email}</td>
                                <td>{theData.doctornm}</td>
                                <td>{theData.drphonenum}</td>
                                <td>{theData.allergies}</td>
                              
                            </tr>
                        )}
                    </tbody>
                </Table> 
            }  */}
            profile Data
            <Table>
                <tr>
                              <td>{auth.fname}</td>
                                <td>{auth.lname}</td>
                                <td>{auth.address}</td>
                                <td>{auth.city}</td>
                                <td>{auth.states}</td>
                                <td>{auth.zipcode}</td>
                                <td>{auth.gender}</td>
                                <td>{auth.parentnm}</td>
                                <td>{auth.phonenum}</td>
                                <td>{auth.plcwork}</td>
                                <td>{auth.email}</td>
                                <td>{auth.doctornm}</td>
                                <td>{auth.drphonenum}</td>
                                <td>{auth.allergies}</td>
                </tr>
            </Table>
        </>
    )
}

// const mapStateToProps = (store) => {
//     return {
//         createProfile: store.createProfile
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         GetProfile: (data) => dispatch((getProfile(data)))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Profile)
export default Profile