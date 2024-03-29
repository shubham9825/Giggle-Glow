import axios from 'axios'
import { CREATE_ABOUT_FAIL, CREATE_ABOUT_REQUEST, CREATE_ABOUT_SUCCESS, DELETE_ABOUT_FAIL, DELETE_ABOUT_REQUEST, DELETE_ABOUT_SUCCESS, GET_ABOUT_FAIL, GET_ABOUT_REQUEST, GET_ABOUT_SUCCESS, UPDATE_ABOUT_FAIL, UPDATE_ABOUT_REQUEST, UPDATE_ABOUT_SUCCESS} from '../constant/about.constant'
 
//post Request
export const createAbout=(Data)=>{
    const createDataRequest=()=>{
        return{
            type:CREATE_ABOUT_REQUEST
        }
    }
    const createDataSuccess=(newData)=>{
        return{
            type:CREATE_ABOUT_SUCCESS,
            payload:newData
        }
    }
    const createDataFail=(error)=>{
        return{
            type:CREATE_ABOUT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(createDataRequest())
        try{
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}abouts`,Data)
            console.log(response)

            if(response.status===201){
                dispatch(createDataSuccess(response.data))
                dispatch(GetAbout())
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
export const GetAbout=()=>{   
    const GetUserRequest=()=>{
        return{
            type:GET_ABOUT_REQUEST
        }
    }
    const GetUserSuccess=(getData)=>{
        return{
            type:GET_ABOUT_SUCCESS,
            payload:getData
        }
    }
    const GetUserFail=(error)=>{
        return{
            type:GET_ABOUT_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(GetUserRequest())
        try{
            const response=await axios.get(`${process.env.REACT_APP_SERVER_URL}abouts`)
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
export const DeleteAbout=(theAbout)=>{
    const deleteaboutRequest=()=>{
        return{
            type:DELETE_ABOUT_REQUEST
        }
    }
    const deleteaboutuccess=(Data)=>{
        return{
            type:DELETE_ABOUT_SUCCESS,
            payload:Data
        }
    }
    const deleteaboutFail=(error)=>{
        return{
            type:DELETE_ABOUT_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(deleteaboutRequest())
        try{
            const response=await axios.delete(`${process.env.REACT_APP_SERVER_URL}abouts/${theAbout._id}`)
            console.log(response)

            if(response.status===200){
                dispatch(deleteaboutuccess(response.data))
                dispatch(GetAbout())
            }else{
                dispatch(deleteaboutFail('Sorry We Failed to Delete Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(deleteaboutFail('Sorry We Failed to Delete Data!!! Try Again...'))
        }
    }
}

//UPDATE Request
export const UpdateAbout=(Data)=>{
    const updateaboutRequest=()=>{
        return{
            type:UPDATE_ABOUT_REQUEST
        }
    }
    const updateaboutuccess=(Data)=>{
        return{
            type:UPDATE_ABOUT_SUCCESS,
            payload:Data
        }
    }
    const updateaboutFail=(error)=>{
        return{
            type:UPDATE_ABOUT_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(updateaboutRequest())
        try{
            let _id=Data._id
            delete Data._id
            delete Data.updatedAt  
            delete Data.createdAt
            //console.log(Data)
            const response=await axios.put(`${process.env.REACT_APP_SERVER_URL}abouts/${_id}`,Data)
            console.log(response)

            if(response.status===200){
                dispatch(updateaboutuccess(response.data))
                dispatch(GetAbout())
            }else{
                dispatch(updateaboutFail('Sorry We Failed to Update Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(updateaboutFail('Sorry We Failed to Update Data!!! Try Again...'))
        }
    }
}