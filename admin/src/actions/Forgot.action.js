import axios from 'axios'
import {CREATE_FORGOT_FAIL, CREATE_FORGOT_REQUEST, CREATE_FORGOT_SUCCESS, UPDATE_FORGOT_FAIL, UPDATE_FORGOT_REQUEST, UPDATE_FORGOT_SUCCESS} from '../constant'

//post request
export const CreateForgot=(Data)=>{
    const createforgotrequest=()=>{
        return{
            type:CREATE_FORGOT_REQUEST
        }
    }
    const createforgotsuccess=(data)=>{
        return{
            type:CREATE_FORGOT_SUCCESS,
            payload:data
        }
    }
    const createforgotfail=(error)=>{
        return{
            type:CREATE_FORGOT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(createforgotrequest())
        try{   
            const response=await axios.post('http://localhost:3001/forgot',Data) 
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
export const UpdateForgot=(Data)=>{
    const updateforgotrequest=()=>{
        return{
            type:UPDATE_FORGOT_REQUEST
        }
    }
    const updateforgotsuccess=(data)=>{
        return{
            type:UPDATE_FORGOT_SUCCESS,
            payload:data
        }
    }
    const updateforgotfail=(error)=>{
        return{
            type:UPDATE_FORGOT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(updateforgotrequest())
        console.log(Data.password,Data.email)
        const email=Data.email
        try{   
            const response=await axios.put(`http://localhost:3001/forgot/${email}`,Data) 
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