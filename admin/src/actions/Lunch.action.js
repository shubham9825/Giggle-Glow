import { CREATE_LUNCH_FAIL, CREATE_LUNCH_REQUEST, CREATE_LUNCH_SUCCESS, DELETE_LUNCH_FAIL, DELETE_LUNCH_REQUEST, GET_LUNCH_FAIL, GET_LUNCH_REQUEST, GET_LUNCH_SUCCESS, UPDATE_LUNCH_FAIL, UPDATE_LUNCH_REQUEST, UPDATE_LUNCH_SUCCESS } from '../constant/lunch.constant'
import axios from 'axios'

//POST Request
export const CreateLunch=(Data)=>{
    const createDataRequest=()=>{
        return{
            type:CREATE_LUNCH_REQUEST
        }
    }
    const createDataSuccess=(newData)=>{
        return{
            type:CREATE_LUNCH_SUCCESS,
            payload:newData
        }
    }
    const createDataFail=(error)=>{
        return{
            type:CREATE_LUNCH_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(createDataRequest())
        try{
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}lunchs`,Data)
            console.log(response)

            if(response.status===201){
                dispatch(createDataSuccess(response.data))
                dispatch(GetLunch())
            }else{
                dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
            }
        }catch(error){
            dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
        }
    }
}

//Get Request
export const GetLunch=()=>{
    const getuserRequest=()=>{
        return{
            type:GET_LUNCH_REQUEST
        }
    }
    const getUserSuccess=(Data)=>{
        return{
            type:GET_LUNCH_SUCCESS,
            payload:Data
        }
    }
    const getUserFail=(error)=>{
        return{
            type:GET_LUNCH_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(getuserRequest())
        try{
            const response=await axios.get(`${process.env.REACT_APP_SERVER_URL}lunchs`)
            console.log(response)
            if(response.status===200){
                dispatch(getUserSuccess(response.data))
            }else{
                dispatch(getUserFail('Sorry We Failed to Getting Data!!!'))
            }
        }catch(error){
            getUserFail('Sorry We Failed to Getting Data!!!')
        }
    }
}

//Delete Lunch
export const DeleteLunch=(theLunch)=>{
    
    const deleteuserRequest=()=>{
        return{
            type:DELETE_LUNCH_REQUEST
        }
    }
    const deleteUserSuccess=(Data)=>{
        return{
            type:DELETE_LUNCH_REQUEST,
            payload:Data
        }
    }
    const deleteUserFail=(error)=>{
        return{
            type:DELETE_LUNCH_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(deleteuserRequest())
        try{
            const response=await axios.delete(`${process.env.REACT_APP_SERVER_URL}lunchs/${theLunch._id}`)
            console.log(response)
            if(response.status===200){
                dispatch(deleteUserSuccess(response.data))
                dispatch(GetLunch())
            }else{
                dispatch(deleteUserFail('Sorry We Failed to Delete Data!!! Try Again...'))
            }
        }catch(error){
            deleteUserFail('Sorry We Failed to Delete Data!!! Try Again...')
        }
    }
}

//Update Lunch
export const UpdateLunch=(Data)=>{
    const updateuserRequest=()=>{
        return{
            type:UPDATE_LUNCH_REQUEST
        }
    }
    const updateUserSuccess=(Data)=>{
        return{
            type:UPDATE_LUNCH_SUCCESS,
            payload:Data
        }
    }
    const updateUserFail=(error)=>{
        return{
            type:UPDATE_LUNCH_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(updateuserRequest())
        try{
            let _id=Data._id
            delete Data._id
            delete Data.updatedAt  
            delete Data.createdAt
            //console.log(Data)
            const response=await axios.put(`${process.env.REACT_APP_SERVER_URL}lunchs/${_id}`,Data)
            console.log(response)
            if(response.status===200){
                dispatch(updateUserSuccess(response.data))
                dispatch(GetLunch())
            }else{
                dispatch(updateUserFail('Sorry We Failed to Update Data!!! Try Again...'))
            }
        }catch(error){
            updateUserFail('Sorry We Failed to Update Data!!! Try Again...')
        }
    }
}