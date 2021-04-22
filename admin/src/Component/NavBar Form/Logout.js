/* eslint-disable */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

function Logout() {
    let history=useHistory()

    useEffect(()=>{
        if(confirm('Are you sure you want to Delete Record')){
             sessionStorage.removeItem('login')
             history.push('/')
        }else{
            history.push('/home')
        }
    },[])
    return (
        <>
        
        </>
    )
}

export default Logout
