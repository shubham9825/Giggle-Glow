import axios from 'axios'
import {CREATE_ALBUM_FAIL, CREATE_ALBUM_REQUEST, CREATE_ALBUM_SUCCESS, DELETE_ALBUM_FAIL, DELETE_ALBUM_REQUEST, DELETE_ALBUM_SUCCESS, GET_ALBUM_FAIL, GET_ALBUM_REQUEST, GET_ALBUM_SUCCESS, UPDATE_ALBUM_FAIL, UPDATE_ALBUM_REQUEST, UPDATE_ALBUM_SUCCESS} from '../constant/album.constant'

//post Request
export const createAlbum=(Data)=>{
    const createDataRequest=()=>{
        return{
            type:CREATE_ALBUM_REQUEST
        }
    }
    const createDataSuccess=(newData)=>{
        return{
            type:CREATE_ALBUM_SUCCESS,
            payload:newData
        }
    }
    const createDataFail=(error)=>{
        return{
            type:CREATE_ALBUM_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(createDataRequest())
        console.log(Data)
        try{
            if(Data !== null){
                dispatch(createDataSuccess(Data))
                dispatch(GetAlbum())
            }else{
                dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again....'))
            }
        }catch(error){
            console.log(error)
            createDataFail('Sorry We Failed to Submit Data!!! Try Again...')
        }
    }
} 

//GET Request
export const GetAlbum=()=>{   
    const GetUserRequest=()=>{
        return{
            type:GET_ALBUM_REQUEST
        }
    }
    const GetUserSuccess=(getData)=>{
        return{
            type:GET_ALBUM_SUCCESS,
            payload:getData
        }
    }
    const GetUserFail=(error)=>{
        return{
            type:GET_ALBUM_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(GetUserRequest())
        try{
            const response=await axios.get(`${process.env.REACT_APP_SERVER_URL}albums`)
            if(response.status===200){
                dispatch(GetUserSuccess(response.data))
            }else{
                dispatch(GetUserFail('Sorry We Failed to Getting Data!!!'))
            }
        }catch(error){
            console.log(error)
            dispatch(GetUserFail('Sorry We Failed to Getting Data!!!'))
        }
    }
}

//DELETE Request
export const DeleteAlbum=(Data)=>{
    const userrequest=()=>{
        return{
            type:DELETE_ALBUM_REQUEST
        }
    }
    const usersuccess=(Data)=>{
        return{
            type:DELETE_ALBUM_SUCCESS,
            payload:Data
        }
    }
    const userfail=(error)=>{
        return{
            type:DELETE_ALBUM_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(userrequest())
        try{
            const response=await axios.delete(`${process.env.REACT_APP_SERVER_URL}albums/${Data._id}`)
            console.log(response)

            if(response.status===200){
                dispatch(usersuccess(response.data))
                dispatch(GetAlbum())
            }else{
                dispatch(userfail('Sorry We Failed to Delete Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(userfail('Sorry We Failed to Delete Data!!! Try Again...'))
        }
    }
}

//UPDATE Request
export const UpdateAlbum=(Data)=>{
    const userRequest=()=>{
        return{
            type:UPDATE_ALBUM_REQUEST
        }
    }
    const userSuccess=(Data)=>{
        return{
            type:UPDATE_ALBUM_SUCCESS,
            payload:Data
        }
    }
    const userFail=(error)=>{
        return{
            type:UPDATE_ALBUM_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(userRequest())
        console.log(Data)
        try{
          
            if(Data!==null){
                dispatch(userSuccess(Data))
                dispatch(GetAlbum())
            }else{
                dispatch(userFail('Sorry We Failed to Update Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(userFail('Sorry We Failed to Update Data!!! Try Again...'))
        }
    }
}