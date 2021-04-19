import React, { useState } from 'react'
import { Alert, Table } from 'react-bootstrap'
 
function Profile(props) {
    const auth = JSON.parse(sessionStorage.login)

    return (
        <>    
            {/* profile Data */} <br /><br /><br />
            <div className='container card-header'>
                <h3 className="fa fa-table" style={{ fontSize: "20px" }}> Profile</h3><br />
                <div className="card-body">
                    <div className="table-responsive">
                        <Table>
                            <tbody>
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
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Profile