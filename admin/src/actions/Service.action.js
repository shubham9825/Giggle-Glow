import axios from 'axios'
import { CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../constant/service.constant'

//Post Request
export const CreateService = (Data) => {    
    const createDataRequest = () => {
        return {
            type: CREATE_USER_REQUEST
        }
    }
    const createDataSuccess = (newData) => {
        return {
            type: CREATE_USER_SUCCESS,
            payload:newData
        }
    }
    const createDataFail = () => {
        return {
            type: CREATE_USER_FAIL
        }
    }

    return async (dispatch) => {
        console.log(Data)
        dispatch(createDataRequest())
        try {
            if (Data !== null) {
                dispatch(createDataSuccess(Data))
            } else {
                dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
            }
        } catch (error) {
            console.log(error)
            dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
        }
    }
}

//get data
export const GetService = () => {
    const getDataRequest = () => {
        return {
            type: GET_USER_REQUEST
        }
    }
    const getDataSuccess = (getData) => {
        return {
            type: GET_USER_SUCCESS,
            payload: getData
        }
    }
    const getDataFail = (error) => {
        return {
            type: GET_USER_FAIL,
            error
        }
    }

    return async (dispatch) => {
        dispatch(getDataRequest())
        try {
            const response = await axios.get('http://localhost:3001/services')
            console.log(response)
            if (response.status === 200) {
                dispatch(getDataSuccess(response.data))
            } else {
                dispatch(getDataFail('Sorry We Failed to Getting Data!!!'))
            }
        } catch (error) {
            console.log(error)
            dispatch(getDataFail('Sorry We Failed to Getting Data!!!'))
        }
    }
}

//deletedata
export const DelService = (theService) => {
    const delDataRequest = () => {
        return {
            type: DELETE_USER_REQUEST
        }
    }
    const delDataSuccess = (delData) => {
        return {
            type: DELETE_USER_SUCCESS,
            payload: delData
        }
    }
    const delDataFail = (error) => {
        return {
            type: DELETE_USER_FAIL,
            error
        }
    }
    return async (dispatch) => {
        dispatch(delDataRequest())
        try {
            const response = await axios.delete(`http://localhost:3001/services/${theService._id}`)
            console.log(response)
            if (response.status === 200) {
                dispatch(delDataSuccess(response.data))
                dispatch(GetService())
            } else {
                dispatch(delDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
            }
        } catch (error) {
            console.log(error)
            dispatch(delDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
        }
    }
}

//editdata
export const UpdateService =(Data)=>{
    const updateDataRequest=()=>{
        return{
            type:UPDATE_USER_REQUEST
        }
    }
    const updateDataSuccess=(editData)=>{
        return{
            type:UPDATE_USER_SUCCESS,
            payload:editData
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
            delete Data.updatedAt //old data's field can't enter because we set only response field so it edit only that field not other so it will deleted to puting and this field is automatically changed when data update it will be same for above and belove delete operation's.
            delete Data.createdAt
            console.log(Data)
            console.log(_id)
            const response = await axios.put(`http://localhost:3001/services/${_id}`,Data)
            console.log(response.data)
            if(response.status===200){
                dispatch(updateDataSuccess(response.data))
                dispatch(GetService())
            }else{
                dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
        }
    }
}