import { CREATE_CHILD_FAIL, CREATE_CHILD_REQUEST, CREATE_CHILD_SUCCESS, DELETE_CHILD_FAIL, DELETE_CHILD_REQUEST, DELETE_CHILD_SUCCESS, GET_CHILD_FAIL, GET_CHILD_REQUEST, GET_CHILD_SUCCESS, UPDATE_CHILD_FAIL, UPDATE_CHILD_REQUEST, UPDATE_CHILD_SUCCESS } from '../constant/childRegister.constant'
import axios from 'axios'

//post Request
export const createChild = (Data)=>{
    const createDataRequest = ()=>{
        return{
            type:CREATE_CHILD_REQUEST
        }
    }
    const createDataSuccess = (newData)=>{
        return{
            type:CREATE_CHILD_SUCCESS,
            payload:newData
        }
    }
    const createDataFail = (error)=>{
        return{
            type:CREATE_CHILD_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(createDataRequest())
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}registrations`,Data)
            console.log(response)
    
            if(response.status===201){
                dispatch(createDataSuccess(response.data))
                dispatch(getChild())
            }else{
                dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
            }
        } catch (error) {
            console.log(error)
            dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
        }
    }
}

//get data
export const getChild = ()=>{
    const getDataRequest = ()=>{
        return{
            type:GET_CHILD_REQUEST
        }
    }
    const getDataSuccess = (getData)=>{
        return{
            type:GET_CHILD_SUCCESS,
            payload:getData
        }
    }
    const getDataFail =(error)=>{
        return{
            type:GET_CHILD_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(getDataRequest())
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}registrations`)
            console.log(response)
            
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

//delete
export const DelRegistartion = (thechild)=>{
    const delDataRequest =()=>{
        return{
            type:DELETE_CHILD_REQUEST
        }
    }
    const delDataSuccess =(delData)=>{
        return{
            type:DELETE_CHILD_SUCCESS,
            payload:delData
        }
    }
    const delDataFail =(error)=>{
        return{
            type:DELETE_CHILD_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(delDataRequest())
        try{
            const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}registrations/${thechild._id}`)
            console.log(response)

            if(response.status === 200){
                dispatch(delDataSuccess(response.data))
                dispatch(getChild())
            }else{
                dispatch(delDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)       
            dispatch(delDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
        }
    }
}

//edit
export const UpdateRegistraton =(Data)=>{
    const updateDataRequest =()=>{
        return{
            type:UPDATE_CHILD_REQUEST
        }
    }
    const updateDataSuccess =(editData)=>{
        return{
            type:UPDATE_CHILD_SUCCESS,
            payload:editData
        }
    }
    const updateDataFail =(error)=>{
        return{
            type:UPDATE_CHILD_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(updateDataRequest())
        try{
            let _id = Data._id
            delete Data._id
            delete Data.updatedAt //old data's field can't enter because we set only response field so it edit only that field not other so it will deleted to puting and this field is automatically changed when data update it will be same for above and belove delete operation's.
            delete Data.createdAt
            console.log(Data)
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}registrations/${_id}`,Data)
            console.log(response)
            if(response.status===200){
                dispatch(updateDataSuccess(response.data))
                dispatch(getChild())
            }else{
                dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
        }
    }
}
