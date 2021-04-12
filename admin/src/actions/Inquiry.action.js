import {CREATE_USER_REQUEST,CREATE_USER_SUCCESS,CREATE_USER_FAIL,GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS,DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS} from '../constant'
import axios from 'axios' 
import { UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../constant/inquiry.constant'
 
//post Request
export const createInquiry=(Data)=>{
    const createDataRequest =()=>{
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
            const response=await axios.post('http://localhost:3001/inquires',Data)
            console.log(response)

            if(response.status===201){
                dispatch(createDataSuccess(response.data))
                dispatch(GetInquiry())
            }else{
                dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
        }
    }
}

//Get Request
export const GetInquiry=()=>{
    const getDataRequest=()=>{
        return{
            type:GET_USER_REQUEST
        }
    }
    const getDataSuccess=(data)=>{
        return{ 
            type:GET_USER_SUCCESS,
            payload:data
        }
    }
    const getDataFail=(error)=>{
        return{
            type:GET_USER_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(getDataRequest())
        try{
            const response=await axios.get('http://localhost:3001/inquires')

            if(response.status===200){
                dispatch(getDataSuccess(response.data))
            }else{
                dispatch(getDataFail('Sorry We Failed to Getting Data!!!'))
            }
        }catch(error){
            console.log(error)
            dispatch(getDataFail('Sorry We Failed to Getting Data!!!'))
        }
    }
}

//DELETE Request
export const DeleteInquiry=(theInquiry)=>{
    const DeleteDataRequest=()=>{
        return{
            type:DELETE_USER_REQUEST
        }
    }
    const DeleteDataSuccess=(data)=>{
        return{ 
            type:DELETE_USER_SUCCESS,
            payload:data
        }
    }
    const DeleteDataFail=(error)=>{
        return{
            type:DELETE_USER_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(DeleteDataRequest())
        try{
            const response=await axios.delete(`http://localhost:3001/inquires/${theInquiry._id}`)

            if(response.status===200){
                dispatch(DeleteDataSuccess(response.data))
                dispatch(GetInquiry())
            }else{
                dispatch(DeleteDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(DeleteDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
        }
    }
}

//UPDATE request
export const UpdateInquiry=(Data)=>{
    const updateDataRequest =()=>{
        return{
            type:UPDATE_USER_REQUEST
        }
    }
    const udateDataSuccess=(Data)=>{
        return{
            type:UPDATE_USER_SUCCESS,
            payload:Data
        }
    }
    const updateDataFail=(error)=>{
        return{
            type:UPDATE_USER_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(updateDataRequest())
        try{
            let _id=Data._id
            delete Data._id
            delete Data.updatedAt  
            delete Data.createdAt
            //console.log(Data)
            const response=await axios.put(`http://localhost:3001/inquires/${_id}`,Data)
            console.log(response)

            if(response.status===200){
                dispatch(udateDataSuccess(response.data))
                dispatch(GetInquiry())
            }else{
                dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
        }
    }
}
