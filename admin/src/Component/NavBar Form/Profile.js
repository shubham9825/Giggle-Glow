import React, {useState } from 'react'
import { Alert } from 'react-bootstrap'

function Profile(props) {

    const auth = JSON.parse(sessionStorage.login)

    //Message State
    const [show, setShow] = useState(false)


    return (
        <div style={{marginTop:'60px'}}>
            {show && <Alert className='pb-0' variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.createProfile.error}</p>
            </Alert>
            } <br/><br/>
            <div className='container card-header'>
                <div className="card-body">
                    <div className="table-responsive">
                        <br /><h2> Profile</h2>
                        <div>
                            <hr />
                            <h4>Student Detail</h4><br />
                            <p><b>Student Full Name :</b> {auth.fname} {auth.lname}</p>
                            <p><b>Gender :</b> {auth.gender} </p>
                            <p><b>Address :</b> {auth.address} </p>
                            <p><b>Zipcode :</b> {auth.zipcode} </p>
                            <p><b>City :</b> {auth.city} </p>
                            <p><b>State :</b> {auth.states} </p>

                            <br /><hr /><h3>Parent's Detail</h3><br />
                            <p><b>Parent's Name :</b> {auth.parentnm} </p>
                            <p><b>Parent's Phone Num. :</b> {auth.phonenum} </p>
                            <p><b>Parent's Email :</b> {auth.email}</p>
                            <p><b>Parent's Work Address :</b> {auth.plcwork} </p>

                            <br /><hr /><h3>Doctor's Detail</h3><br />
                            <p><b>Doctor Name :</b> {auth.doctornm} </p>
                            <p><b>Doctor Phone Num. :</b> {auth.drphonenum} </p>
                            <p><b>Student Have any Allergies :</b> {auth.allergies} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile