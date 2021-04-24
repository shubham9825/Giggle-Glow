import axios from 'axios'
import { CREATE_PFORGOT_FAIL, CREATE_PFORGOT_REQUEST, CREATE_PFORGOT_SUCCESS, UPDATE_PFORGOT_FAIL, UPDATE_PFORGOT_REQUEST, UPDATE_PFORGOT_SUCCESS } from '../constant/pforgot.constant'

//post request
export const CreatePforgot=(Data)=>{
    const createforgotrequest=()=>{
        return{
            type:CREATE_PFORGOT_REQUEST
        }
    }
    const createforgotsuccess=(data)=>{
        return{
            type:CREATE_PFORGOT_SUCCESS,
            payload:data
        }
    }
    const createforgotfail=(error)=>{
        return{
            type:CREATE_PFORGOT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(createforgotrequest())
        try{   
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}pforgot`,Data) 
            console.log(response)
            if(response.status===200){
                dispatch(createforgotsuccess(response.data))
            }else{
                dispatch(createforgotfail('Email Does Not Exit...'))
            }
        }catch(error){
            dispatch(createforgotfail('Email Does Not Exit...'))
        }
    }
}

//put request
export const UpdatePforgot=(Data)=>{
    const updateforgotrequest=()=>{
        return{
            type:UPDATE_PFORGOT_REQUEST
        }
    }
    const updateforgotsuccess=(data)=>{
        return{
            type:UPDATE_PFORGOT_SUCCESS,
            payload:data
        }
    }
    const updateforgotfail=(error)=>{
        return{
            type:UPDATE_PFORGOT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(updateforgotrequest())
       
        const email=Data.email
        try{   
            const response=await axios.put(`${process.env.REACT_APP_SERVER_URL}pforgot/${email}`,Data) 
            console.log(response)
            if(response.status===200){
                dispatch(updateforgotsuccess(response.data))
            }else{
                dispatch(updateforgotfail('Sorry We Failed to Update Password!!! Try Again...'))
            }
        }catch(error){
            dispatch(updateforgotfail('Sorry We Failed to Update Password!!! Try Again...'))
        }
    }
}