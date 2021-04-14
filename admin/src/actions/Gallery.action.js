import axios from "axios"
import { CREATE_FILE_FAIL, CREATE_FILE_REQUEST, CREATE_FILE_SUCCESS, DELETE_FILE_FAIL, DELETE_FILE_REQUEST, DELETE_FILE_SUCCESS, GET_FILE_FAIL, GET_FILE_REQUEST, GET_FILE_SUCCESS } from "../constant"

//post Request
export const CreateGallery=(Data)=>{
    const createrequest=()=>{
        return{
            type:CREATE_FILE_REQUEST
        }
    }
    const createsuccess=(newData)=>{
        return{
            type:CREATE_FILE_SUCCESS,
            payload: newData
        }
    }
    const createfail=(error)=>{
        return{
            type:CREATE_FILE_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(createrequest())
         const Intdata=JSON.parse(Data)
         console.log(Data)

         if(Intdata!==''){
            dispatch(createsuccess(Data))
            dispatch(GetGallery())
         }else{
            dispatch(createfail('Sorry We Failed to Upload Image!!!...Try Again'))
         }
    }
}

//Get Request
export const GetGallery=()=>{
    const getrequest=()=>{
        return{
            type:GET_FILE_REQUEST
        }
    }
    const getsuccess=(getData)=>{
        return{
            type:GET_FILE_SUCCESS,
            payload: getData
        }
    }
    const getfail=(error)=>{
        return{
            type:GET_FILE_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(getrequest())
        try {
            const response = await axios.get('http://localhost:3001/upload')
            console.log(response)

            if (response.status === 200) {
                dispatch(getsuccess(response.data))
            } else {
                dispatch(getfail('Sorry We Failed to Getting Image!!!'))
            }
        } catch (error) {
            console.log(error)
            dispatch(getfail('Sorry We Failed to Getting Image!!!'))
        }
    }
}

//Delete Request
export const DelGallary=(Data)=>{
    const delrequest=()=>{
        return{
            type:DELETE_FILE_REQUEST
        }
    }
    const delsuccess=(delData)=>{
        return{
            type:DELETE_FILE_SUCCESS,
            payload: delData
        }
    }
    const delfail=(error)=>{
        return{
            type:DELETE_FILE_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(delrequest())
        
        try {
            const response = await axios.delete(`http://localhost:3001/upload/${Data._id}`)
            console.log(response)

            if (response.status === 200) {
                dispatch(delsuccess(response.data))
                dispatch(GetGallery())
            } else {
                dispatch(delfail('Sorry We Failed to Delete Image!!!'))
            }
        } catch (error) {
            console.log(error)
            dispatch(delfail('Sorry We Failed to Delete Image!!!'))
        }
    }
}