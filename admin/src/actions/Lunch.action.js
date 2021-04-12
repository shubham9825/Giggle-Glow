import { CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../constant/lunch.constant'
import axios from 'axios'

//POST Request
export const CreateLunch=(Data)=>{
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
            const response=await axios.post('http://localhost:3001/lunchs',Data)
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
            type:GET_USER_REQUEST
        }
    }
    const getUserSuccess=(Data)=>{
        return{
            type:GET_USER_SUCCESS,
            payload:Data
        }
    }
    const getUserFail=(error)=>{
        return{
            type:GET_USER_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(getuserRequest())
        try{
            const response=await axios.get('http://localhost:3001/lunchs')
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
            type:DELETE_USER_REQUEST
        }
    }
    const deleteUserSuccess=(Data)=>{
        return{
            type:DELETE_USER_SUCCESS,
            payload:Data
        }
    }
    const deleteUserFail=(error)=>{
        return{
            type:DELETE_USER_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(deleteuserRequest())
        try{
            const response=await axios.delete(`http://localhost:3001/lunchs/${theLunch._id}`)
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
            type:UPDATE_USER_REQUEST
        }
    }
    const updateUserSuccess=(Data)=>{
        return{
            type:UPDATE_USER_SUCCESS,
            payload:Data
        }
    }
    const updateUserFail=(error)=>{
        return{
            type:UPDATE_USER_FAIL,
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
            const response=await axios.put(`http://localhost:3001/lunchs/${_id}`,Data)
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