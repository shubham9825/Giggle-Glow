import { CREATE_ATTANDANCE_FAIL, CREATE_ATTANDANCE_REQUEST, CREATE_ATTANDANCE_SUCCESS } from "../constant/attandance.constant"
import axios from 'axios'
//Get Report
export const getAttandance = (Data)=>{
    const createDataRequest =()=>{
        return{
            type:CREATE_ATTANDANCE_REQUEST
        }
    }
    const createDataSuccess = (attandance)=>{
        return{
            type:CREATE_ATTANDANCE_SUCCESS,
            payload:attandance
        }
    }
    const createDataFail = (error)=>{
        return{
            type:CREATE_ATTANDANCE_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(createDataRequest())
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}payments/${Data}`)
            console.log(response.data.payments)
        
            if(response.status===200){
                dispatch(createDataSuccess(response.data.payments))
            }else{
                dispatch(createDataFail('Sorry We Failed to generate Report'))
            }
        }catch(error){
            dispatch(createDataFail('Sorry We Failed to generate Report'))
        }
    }
}