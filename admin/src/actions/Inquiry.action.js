import axios from 'axios' 
import { CREATE_INQUIRY_FAIL, CREATE_INQUIRY_REQUEST, CREATE_INQUIRY_SUCCESS, DELETE_INQUIRY_FAIL, DELETE_INQUIRY_REQUEST, DELETE_INQUIRY_SUCCESS, GET_INQUIRY_FAIL, GET_INQUIRY_REQUEST, GET_INQUIRY_SUCCESS, UPDATE_INQUIRY_FAIL, UPDATE_INQUIRY_REQUEST, UPDATE_INQUIRY_SUCCESS } from '../constant/inquiry.constant'
 
//post Request
export const createInquiry=(Data)=>{
    const createDataRequest =()=>{
        return{
            type:CREATE_INQUIRY_REQUEST
        }
    }
    const createDataSuccess=(newData)=>{
        return{
            type:CREATE_INQUIRY_SUCCESS,
            payload:newData
        }
    }
    const createDataFail=(error)=>{
        return{
            type:CREATE_INQUIRY_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(createDataRequest())
        console.log(Data)
        try{
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}inquires`,Data)
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
            type:GET_INQUIRY_REQUEST
        }
    }
    const getDataSuccess=(data)=>{
        return{ 
            type:GET_INQUIRY_SUCCESS,
            payload:data
        }
    }
    const getDataFail=(error)=>{
        return{
            type:GET_INQUIRY_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(getDataRequest())
        try{
            const response=await axios.get(`${process.env.REACT_APP_SERVER_URL}inquires`)

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
            type:DELETE_INQUIRY_REQUEST
        }
    }
    const DeleteDataSuccess=(data)=>{
        return{ 
            type:DELETE_INQUIRY_SUCCESS,
            payload:data
        }
    }
    const DeleteDataFail=(error)=>{
        return{
            type:DELETE_INQUIRY_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(DeleteDataRequest())
        try{
            const response=await axios.delete(`${process.env.REACT_APP_SERVER_URL}inquires/${theInquiry._id}`)

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
            type:UPDATE_INQUIRY_REQUEST
        }
    }
    const udateDataSuccess=(Data)=>{
        return{
            type:UPDATE_INQUIRY_SUCCESS,
            payload:Data
        }
    }
    const updateDataFail=(error)=>{
        return{
            type:UPDATE_INQUIRY_FAIL,
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
            const response=await axios.put(`${process.env.REACT_APP_SERVER_URL}inquires/${_id}`,Data)
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
