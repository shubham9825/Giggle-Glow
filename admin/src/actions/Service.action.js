import axios from 'axios'
import { CREATE_SERVICE_FAIL, CREATE_SERVICE_REQUEST, CREATE_SERVICE_SUCCESS, DELETE_SERVICE_FAIL, DELETE_SERVICE_REQUEST, DELETE_SERVICE_SUCCESS, GET_SERVICE_FAIL, GET_SERVICE_REQUEST, GET_SERVICE_SUCCESS, UPDATE_SERVICE_FAIL, UPDATE_SERVICE_REQUEST, UPDATE_SERVICE_SUCCESS } from '../constant/service.constant'

//Post Request
export const CreateService = (Data) => {    
    const createDataRequest = () => {
        return {
            type: CREATE_SERVICE_REQUEST
        }
    }
    const createDataSuccess = (newData) => {
        return {
            type: CREATE_SERVICE_SUCCESS,
            payload:newData
        }
    }
    const createDataFail = () => {
        return {
            type: CREATE_SERVICE_FAIL
        }
    }

    return async (dispatch) => {
        console.log(Data)
        dispatch(createDataRequest())
        try {
            if (Data !== null) {
                dispatch(createDataSuccess(Data))
                dispatch(GetService())
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
            type: GET_SERVICE_REQUEST
        }
    }
    const getDataSuccess = (getData) => {
        return {
            type: GET_SERVICE_SUCCESS,
            payload: getData
        }
    }
    const getDataFail = (error) => {
        return {
            type: GET_SERVICE_FAIL,
            error
        }
    }

    return async (dispatch) => {
        dispatch(getDataRequest())
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}services`)
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
            type: DELETE_SERVICE_REQUEST
        }
    }
    const delDataSuccess = (delData) => {
        return {
            type: DELETE_SERVICE_SUCCESS,
            payload: delData
        }
    }
    const delDataFail = (error) => {
        return {
            type: DELETE_SERVICE_FAIL,
            error
        }
    }
    return async (dispatch) => {
        dispatch(delDataRequest())
        try {
            const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}services/${theService._id}`)
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
            type:UPDATE_SERVICE_REQUEST
        }
    }
    const updateDataSuccess=(editData)=>{
        return{
            type:UPDATE_SERVICE_SUCCESS,
            payload:editData
        }
    }
    const updateDataFail=(error)=>{
        return{
            type:UPDATE_SERVICE_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(updateDataRequest())
        console.log(Data)
        try{
         
            if(Data!== null){
                dispatch(updateDataSuccess(Data))
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