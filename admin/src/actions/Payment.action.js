import {CREATE_PAYMENT_FAIL, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS,GET_REPORT_REQUEST,GET_REPORT_SUCCESS,GET_REPORT_FAIL} from '../constant/payment.constant'
import axios from 'axios'

//POST Request
export const createPayment = (Data)=>{
    const createDataRequest =()=>{
        return{
            type:CREATE_PAYMENT_REQUEST
        }
    }
    const createDataSuccess = (newData)=>{
        return{
            type:CREATE_PAYMENT_SUCCESS,
            payload:newData
        }
    }
    const createDataFail = (error)=>{
        return{
            type:CREATE_PAYMENT_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(createDataRequest())
        console.log(Data)
        try{
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}payments`,Data)
            console.log(response)

            if(response.status===201){
                dispatch(createDataSuccess(response.data))
            }else{
                dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
        }
    }
}

//Get Report
export const getReportData = (Data)=>{
    const createDataRequest =()=>{
        return{
            type:GET_REPORT_REQUEST
        }
    }
    const createDataSuccess = (getReport)=>{
        return{
            type:GET_REPORT_SUCCESS,
            payload:getReport
        }
    }
    const createDataFail = (error)=>{
        return{
            type:GET_REPORT_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        dispatch(createDataRequest())
        console.log(Data)
        try{
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}paymentreport`,Data)
            console.log(response)

            if(response.status===200){
                dispatch(createDataSuccess(response.data))
            }else{
                dispatch(createDataFail('Sorry We Failed to generate Report'))
            }
        }catch(error){
            dispatch(createDataFail('Sorry We Failed to generate Report'))
        }
    }
}