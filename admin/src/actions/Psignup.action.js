import axios from "axios"
import { CREATE_PUSER_FAIL, CREATE_PUSER_REQUEST, CREATE_PUSER_SUCCESS, DELETE_PUSER_FAIL, DELETE_PUSER_REQUEST, DELETE_PUSER_SUCCESS, GET_PUSER_FAIL, GET_PUSER_REQUEST, GET_PUSER_SUCCESS } from '../constant/Psignup.constant'

//POST request
export const CreatePsignup=(Data)=>{
    const createDataRequest=()=>{
        return{
            type:CREATE_PUSER_REQUEST
        }
    }
    const createDataSuccess=(newData)=>{
        return{
            type:CREATE_PUSER_SUCCESS,
            payload:newData
        }
    }
    const createDataFail=(error)=>{
        return{
            type:CREATE_PUSER_FAIL,
            error
        }
    }
   
    return async(dispatch)=>{
        console.log(Data)
        dispatch(createDataRequest())
        try{
            const response=await axios.post('http://localhost:3001/psignups',Data) 
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
export const GetPsignup=()=>{
    const getDataRequest=()=>{
        return{
            type:GET_PUSER_REQUEST
        }
    }
    const getDataSuccess=(getData)=>{
        return{
            type:GET_PUSER_SUCCESS,
            payload:getData
        }
    }
    const getDataFail=(error)=>{
        return{
            type:GET_PUSER_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(getDataRequest())
        try{
            const response=await axios.get('http://localhost:3001/psignups') 
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
export const DeletePsignup=(Data)=>{
    const deleteDataRequest=()=>{
        return{
            type:DELETE_PUSER_REQUEST
        }
    }
    const deleteDataSuccess=(delData)=>{
        return{
            type:DELETE_PUSER_SUCCESS,
            payload:delData
        }
    }
    const deleteDataFail=(error)=>{
        return{
            type:DELETE_PUSER_FAIL,
            error
        }
    }
       
    return async(dispatch)=>{
        dispatch(deleteDataRequest())
        try{
            const response=await axios.delete(`http://localhost:3001/psignups/${Data._id}`) 
            console.log(response)
            if(response.status===200){
                dispatch(deleteDataSuccess(response.data))
                dispatch(GetPsignup())
            }else{
                dispatch(deleteDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
            }
        }catch(error){
            dispatch(deleteDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
        }
    }
}
