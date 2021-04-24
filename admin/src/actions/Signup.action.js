import axios from "axios"
import { CREATE_SINGUP_FAIL, CREATE_SINGUP_REQUEST, CREATE_SINGUP_SUCCESS, DELETE_SINGUP_FAIL, DELETE_SINGUP_REQUEST, DELETE_SINGUP_SUCCESS, GET_SINGUP_FAIL, GET_SINGUP_REQUEST, GET_SINGUP_SUCCESS } from "../constant/signup.constant"

//POST request
export const CreateSignup=(Data)=>{
    const createDataRequest=()=>{
        return{
            type:CREATE_SINGUP_REQUEST
        }
    }
    const createDataSuccess=(newData)=>{
        return{
            type:CREATE_SINGUP_SUCCESS,
            payload:newData
        }
    }
    const createDataFail=(error)=>{
        return{
            type:CREATE_SINGUP_FAIL,
            error
        }
    }
   
    return async(dispatch)=>{
        console.log(Data)
        dispatch(createDataRequest())
        try{
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}signups`,Data) 
            console.log(response)
            if(response.status===201){
                dispatch(createDataSuccess(response.data))
                 
            }else{
                dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
            }
        }catch(error){
            dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
        }
    }
}

//GET request
export const GetSignup=()=>{
    const getDataRequest=()=>{
        return{
            type:GET_SINGUP_REQUEST
        }
    }
    const getDataSuccess=(getData)=>{
        return{
            type:GET_SINGUP_SUCCESS,
            payload:getData
        }
    }
    const getDataFail=(error)=>{
        return{
            type:GET_SINGUP_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(getDataRequest())
        try{
            const response=await axios.get(`${process.env.REACT_APP_SERVER_URL}signups`) 
            console.log(response)
            if(response.status===200){
                dispatch(getDataSuccess(response.data))
            }else{
                dispatch(getDataFail('Sorry We Failed to Getting Data!!!'))
            }
        }catch(error){
            dispatch(getDataFail('Sorry We Failed to Getting Data!!!'))
        }
    }
}

//DELETE request
export const DeleteSignup=(Data)=>{
    const deleteDataRequest=()=>{
        return{
            type:DELETE_SINGUP_REQUEST
        }
    }
    const deleteDataSuccess=(delData)=>{
        return{
            type:DELETE_SINGUP_SUCCESS,
            payload:delData
        }
    }
    const deleteDataFail=(error)=>{
        return{
            type:DELETE_SINGUP_FAIL,
            error
        }
    }
       
    return async(dispatch)=>{
        dispatch(deleteDataRequest())
        try{
            const response=await axios.delete(`${process.env.REACT_APP_SERVER_URL}signups/${Data._id}`) 
            console.log(response)
            if(response.status===200){
                dispatch(deleteDataSuccess(response.data))
                dispatch(GetSignup())
            }else{
                dispatch(deleteDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
            }
        }catch(error){
            dispatch(deleteDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
        }
    }
}
