import {CREATE_PAYMENT_FAIL, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS} from '../constant/payment.constant'
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
        console.log(Data)
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