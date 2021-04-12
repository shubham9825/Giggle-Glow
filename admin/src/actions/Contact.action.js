import {CREATE_USER_REQUEST,CREATE_USER_SUCCESS,CREATE_USER_FAIL,GET_USER_REQUEST,GET_USER_FAIL, GET_USER_SUCCESS} from '../constant'
import axios from 'axios'
import { DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../constant/contact.constant'

//post request
export const createContact=(Data)=>{
    const createDataRequest=()=>{
        return{
            type:CREATE_USER_REQUEST
        }
    }
    const createDataSuccess=(newData)=>{
        return{
            type:CREATE_USER_SUCCESS,
            payload:newData
        }
    }
    const createDataFail=(error)=>{
        return{
            type:CREATE_USER_FAIL,
            error 
        }
    }
    
    return async(dispatch)=>{
        dispatch(createDataRequest())
        try{
            const response=await axios.post('http://localhost:3001/contacts',Data)
            console.log(response)
            
            if(response.status===201){
                dispatch(createDataSuccess(response.data))
                dispatch(GetContact())
            }else{
                dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
            }
        }catch(error){
            console.log(`Error ${error}`)
            dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
        }
    }
}

//GET Request
export const GetContact=()=>{
    const getcontactrequest=()=>{
        return{
            type:GET_USER_REQUEST
        }
    }
    const getcontactsuccess=(Data)=>{
        return{
            type:GET_USER_SUCCESS,
            payload:Data
        }
    }
    const getcontactfail=(error)=>{
        return{
            type:GET_USER_FAIL,
            error
        }
    }

    return async(dispatch)=>{
        dispatch(getcontactrequest())
        try{
            const response=await axios.get('http://localhost:3001/contacts')
            console.log(response)
            if(response.status===200){
                dispatch(getcontactsuccess(response.data))
            }else{
                dispatch(getcontactfail('Sorry We Failed to Getting Data!!!'))
            }
        }catch(error){
            console.log(error)
            dispatch(getcontactfail('Sorry We Failed to Getting Data!!!'))
        }
    }
}


//Delete Request
export const DeleteContact=(theContact)=>{
    const deletecontactrequest=()=>{
        return{
            type:DELETE_USER_REQUEST
        }
    }
    const deletecontactsuccess=(Data)=>{
        return{
            type:DELETE_USER_SUCCESS,
            payload:Data
        }
    }
    const deletecontactfail=(error)=>{
        return{
            type:DELETE_USER_FAIL,
            error
        }
    }

    return async(dispatch)=>{
        dispatch(deletecontactrequest())
        try{
            const response=await axios.delete(`http://localhost:3001/contacts/${theContact._id}`)
            console.log(response)
            if(response.status===200){
                dispatch(deletecontactsuccess(response.data))
                dispatch(GetContact())
            }else{
                dispatch(deletecontactfail('Sorry We Failed to Delete Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(deletecontactfail('Sorry We Failed to Delete Data!!! Try Again...'))
        }
    }
}

//Update Request
export const UpdateContact=(Data)=>{
    const updatecontactrequest=()=>{
        return{
            type:UPDATE_USER_REQUEST
        }
    }
    const updatecontactsuccess=(Data)=>{
        return{
            type:UPDATE_USER_SUCCESS,
            payload:Data
        }
    }
    const updatecontactfail=(error)=>{
        return{
            type:UPDATE_USER_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(updatecontactrequest())
        try{
            let _id=Data._id
            delete Data._id
            delete Data.updatedAt  
            delete Data.createdAt
            console.log(Data)
            const response=await axios.put(`http://localhost:3001/contacts/${_id}`,Data)
            console.log(response)
            if(response.status===200){
                dispatch(updatecontactsuccess(response.data))
                dispatch(GetContact())
            }else{
                dispatch(updatecontactfail('Sorry We Failed to Update Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(updatecontactfail('Sorry We Failed to Update Data!!! Try Again...'))
        }
    }
}