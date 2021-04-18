import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

function Logout() {
    let history=useHistory()

    useEffect(()=>{
        sessionStorage.removeItem('login')
        history.push('/')
    },[])
    return (
        <>
            <h1>Logout</h1>
        </>
    )
}

export default Logout
