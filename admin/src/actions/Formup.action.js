import { CREATE_FORMUP_FAIL, CREATE_FORMUP_REQUEST, CREATE_FORMUP_SUCCESS, FDELETE_FORMUP_FAIL, FDELETE_FORMUP_REQUEST, FDELETE_FORMUP_SUCCESS, GET_FORMUP_FAIL, GET_FORMUP_REQUEST, GET_FORMUP_SUCCESS, UPDATE_FORMUP_FAIL, UPDATE_FORMUP_REQUEST, UPDATE_FORMUP_SUCCESS } from "../constant/formup.constant"
import axios from 'axios'

//Post Request
export const createFormup = (Data) => {
    const createDataRequest = () => {
        return {
            type: CREATE_FORMUP_REQUEST
        }
    }
    const createDataSuccess = (newData) => {
        return {
            type: CREATE_FORMUP_SUCCESS,
            payload: newData
        }
    }
    const createDataFail = (error) => {
        return {
            type: CREATE_FORMUP_FAIL,
            error
        }
    }
    return async (dispatch) => {
        dispatch(createDataRequest())
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}formups`,Data)
            console.log(response)

            if (response.status === 201) {
                dispatch(createDataSuccess(response.data))
                dispatch(GetFormup(Data.owner))
            } else {
                dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
            }
        } catch (error) {
            console.log(error)
            dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
        }
    }
}

//Get request
export const GetFormup = (owner) => {
    const getDataRequest = () => {
        return {
            type: GET_FORMUP_REQUEST
        }
    }
    const getDataSuccess = (getData) => {
        return {
            type: GET_FORMUP_SUCCESS,
            payload: getData
        }
    }
    const getDataFail = (error) => {
        return {
            type: GET_FORMUP_FAIL,
            error
        }
    }
    return async (dispatch) => {
        dispatch(getDataRequest())
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}formups/${owner}`)
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

//Delete 
export const DelFormup = (theformup) => {
    const delDataRequest = () => {
        return {
            type: FDELETE_FORMUP_REQUEST
        }
    }
    const delDataSuccess = (delData) => {
        return {
            type: FDELETE_FORMUP_SUCCESS,
            payload: delData
        }
    }
    const delDataFail = (error) => {
        return {
            type: FDELETE_FORMUP_FAIL,
            error
        }
    }
    return async (dispatch) => {
        dispatch(delDataRequest())
        try {
            const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}formups/${theformup._id}`)
            console.log(response)
            if (response.status === 200) {
                dispatch(delDataSuccess(response.data))
                dispatch(GetFormup(theformup.owner))
            } else {
                dispatch(delDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
            }
        } catch (error) {
            console.log(error)
            dispatch(delDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
        }
    }
}

//Update Request
export const UpdateFormup =(Data)=>{
    const updateDataRequest =()=>{
        return{
            type:UPDATE_FORMUP_REQUEST
        }
    }
    const updateDataSuccess =(editData)=>{
        return{
            type:UPDATE_FORMUP_SUCCESS,
            payload:editData
        }
    }
    const updateDataFail = (error)=>{
        return{
            type:UPDATE_FORMUP_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(updateDataRequest())
        console.log(Data)
        try{
            let owner=Data.owner
            let _id = Data._id
            delete Data._id 
            delete Data.updatedAt //old data's field can't enter because we set only response field so it edit only that field not other so it will deleted to puting and this field is automatically changed when data update it will be same for above and belove delete operation's.
            delete Data.createdAt
            delete Data.owner
            console.log(Data)    
            const response= await axios.put(`${process.env.REACT_APP_SERVER_URL}formups/${_id}`,Data)
            console.log(response)
            if(response.status===200){
                dispatch(updateDataSuccess(response.data))
                 dispatch(GetFormup(owner))
            }else{
                dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
        }
    }
}