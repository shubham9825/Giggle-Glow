/* eslint-disable */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export function Plogout() {
    let history=useHistory()

    useEffect(()=>{
        if(confirm('Select "OK" below if you are ready to end your current session.')){
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
