import axios from 'axios'
import { CREATE_CONTACT_FAIL, CREATE_CONTACT_REQUEST, CREATE_CONTACT_SUCCESS, DELETE_CONTACT_FAIL, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, GET_CONTACT_FAIL, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS, UPDATE_CONTACT_FAIL, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS } from '../constant/contact.constant'

//post request
export const createContact=(Data)=>{
    const createDataRequest=()=>{
        return{
            type:CREATE_CONTACT_REQUEST
        }
    }
    const createDataSuccess=(newData)=>{
        return{
            type:CREATE_CONTACT_SUCCESS,
            payload:newData
        }
    }
    const createDataFail=(error)=>{
        return{
            type:CREATE_CONTACT_FAIL,
            error 
        }
    }
    
    return async(dispatch)=>{
        dispatch(createDataRequest())
        try{
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}contacts`,Data)
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
            type:GET_CONTACT_REQUEST
        }
    }
    const getcontactsuccess=(Data)=>{
        return{
            type:GET_CONTACT_SUCCESS,
            payload:Data
        }
    }
    const getcontactfail=(error)=>{
        return{
            type:GET_CONTACT_FAIL,
            error
        }
    }

    return async(dispatch)=>{
        dispatch(getcontactrequest())
        try{
            const response=await axios.get(`${process.env.REACT_APP_SERVER_URL}contacts`)
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
            type:DELETE_CONTACT_REQUEST
        }
    }
    const deletecontactsuccess=(Data)=>{
        return{
            type:DELETE_CONTACT_SUCCESS,
            payload:Data
        }
    }
    const deletecontactfail=(error)=>{
        return{
            type:DELETE_CONTACT_FAIL,
            error
        }
    }

    return async(dispatch)=>{
        dispatch(deletecontactrequest())
        try{
            const response=await axios.delete(`${process.env.REACT_APP_SERVER_URL}contacts/${theContact._id}`)
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
            type:UPDATE_CONTACT_REQUEST
        }
    }
    const updatecontactsuccess=(Data)=>{
        return{
            type:UPDATE_CONTACT_SUCCESS,
            payload:Data
        }
    }
    const updatecontactfail=(error)=>{
        return{
            type:UPDATE_CONTACT_FAIL,
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
            const response=await axios.put(`${process.env.REACT_APP_SERVER_URL}contacts/${_id}`,Data)
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