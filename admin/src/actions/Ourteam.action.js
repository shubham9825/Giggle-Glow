import axios from 'axios'
import { CREATE_TEAM_FAIL, CREATE_TEAM_REQUEST, CREATE_TEAM_SUCCESS, DELETE_TEAM_FAIL, DELETE_TEAM_REQUEST, DELETE_TEAM_SUCCESS, GET_TEAM_FAIL, GET_TEAM_REQUEST, GET_TEAM_SUCCESS, UPDATE_TEAM_FAIL, UPDATE_TEAM_REQUEST, UPDATE_TEAM_SUCCESS } from '../constant/ourteam.constant'
//Post Request
export const CreateTeam = (Data) => {    
    const createDataRequest = () => {
        return {
            type: CREATE_TEAM_REQUEST
        }
    }
    const createDataSuccess = (newData) => {
        return {
            type: CREATE_TEAM_SUCCESS,
            payload:newData
        }
    }
    const createDataFail = () => {
        return {
            type: CREATE_TEAM_FAIL
        }
    }

    return async (dispatch) => {
        console.log(Data)
        dispatch(createDataRequest())
        try {
            if (Data !== null) {
                dispatch(createDataSuccess(Data))
                dispatch(GetTeam())
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
export const GetTeam = () => {
    const getDataRequest = () => {
        return {
            type: GET_TEAM_REQUEST
        }
    }
    const getDataSuccess = (getData) => {
        return {
            type: GET_TEAM_SUCCESS,
            payload: getData
        }
    }
    const getDataFail = (error) => {
        return {
            type: GET_TEAM_FAIL,
            error
        }
    }

    return async (dispatch) => {
        dispatch(getDataRequest())
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}ourteams`)
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
export const DelTeam = (theService) => {
    const delDataRequest = () => {
        return {
            type: DELETE_TEAM_REQUEST
        }
    }
    const delDataSuccess = (delData) => {
        return {
            type: DELETE_TEAM_SUCCESS,
            payload: delData
        }
    }
    const delDataFail = (error) => {
        return {
            type: DELETE_TEAM_FAIL,
            error
        }
    }
    return async (dispatch) => {
        dispatch(delDataRequest())
        try {
            const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}ourteams/${theService._id}`)
            console.log(response)
            if (response.status === 200) {
                dispatch(delDataSuccess(response.data))
                dispatch(GetTeam())
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
export const UpdateTeam =(Data)=>{
    const updateDataRequest=()=>{
        return{
            type:UPDATE_TEAM_REQUEST
        }
    }
    const updateDataSuccess=(editData)=>{
        return{
            type:UPDATE_TEAM_SUCCESS,
            payload:editData
        }
    }
    const updateDataFail=(error)=>{
        return{
            type:UPDATE_TEAM_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(updateDataRequest())
        console.log(Data)
        try{
             
            if(Data!==null){
                dispatch(updateDataSuccess(Data))
                dispatch(GetTeam())
            }else{
                dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
        }
    }
}