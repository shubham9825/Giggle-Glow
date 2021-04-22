/* eslint-disable */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export function Plogout() {
    let history=useHistory()

    useEffect(()=>{
        if(confirm('Are you sure you want to Delete Record')){
            sessionStorage.removeItem('login')
            history.push('/')
        }else{
            history.push('/profile')
        }
    },[])
    return (
        <>
             
        </>
    )
}

export default Plogout
