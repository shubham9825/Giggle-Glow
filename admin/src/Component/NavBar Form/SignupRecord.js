import React, { useEffect, useState } from 'react'
import { Alert, Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { DeleteSignup, GetSignup } from '../../actions/Signup.action'

function SignupRecord(props) {
    //get request
    useEffect(() => {
        props.getSignup()
    },[])

    //delete Request
    const ondelete=(theRecord)=>{
        props.deleteRecord(theRecord)
        setShow(true)
        MessageTime()
    }

     //Message State
     const [show, setShow] = useState(false) 
    
     //Alert Message timing 
     const MessageTime=()=>{
             setTimeout(() => {
                 setShow(false)
               }, 4000)
     }
    return (
        <>
             {show && <Alert className='pb-0' variant="danger" onClose={() => setShow(false)} dismissible>
                        <p>{props.createSignup.msg}{props.createSignup.error}</p>
                    </Alert>
            }

            {/* Get Table Data */} <br/><br/>
            <div className='container'> 
                <h3>Signup User Details</h3><br/>
             {props.createSignup.getData.length > 0 &&
                <Table striped hover>
                    <thead>
                        <tr>
                            <th className="text-center">FirstName</th>
                            <th className="text-center">LastName</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Password</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {props.createSignup.getData.map(theData =>
                            <tr key={theData._id}>
                                <td>{theData.fname}</td>
                                <td>{theData.lname}</td>
                                <td>{theData.email}</td>
                                <td>{theData.password}</td>
                                  <td><Button onClick={()=>ondelete(theData)}>Delete</Button></td> 
                            </tr>
                        )}
                    </tbody>
                </Table>
            }  
            </div>
        </>
    )
}

const mapStateToProps=(store)=>{
    return{
        createSignup:store.createSignup
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getSignup:()=>dispatch(GetSignup()),
        deleteRecord:(theRecord)=>dispatch(DeleteSignup(theRecord))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignupRecord)
