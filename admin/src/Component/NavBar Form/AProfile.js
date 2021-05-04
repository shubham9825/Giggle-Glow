import React, {useState } from 'react'
import { Alert } from 'react-bootstrap'

function AProfile(props) {

    const auth = JSON.parse(sessionStorage.login)

    //Message State
    const [show, setShow] = useState(false)
    return (

        <div style={{ marginTop: '60px' }}>
            {show && <Alert className='pb-0' variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.createProfile.error}</p>
            </Alert>
            } <br /><br />
            <div className='container card-header'>
                <div className="card-body">
                    <div className="table-responsive">
                        <br /><h2>Admin Profile</h2>
                        <div>
                            <hr />
                            <h4>Admin Detail</h4><br />
                            <p><b> Full Name :</b> {auth.fname} {auth.lname}</p>                            
                            <p><b>Email :</b> {auth.email} </p>                                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AProfile
