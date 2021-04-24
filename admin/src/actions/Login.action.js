import axios from "axios"
import { CREATE_LOGIN_FAIL, CREATE_LOGIN_REQUEST, CREATE_LOGIN_SUCCESS } from '../constant/login.constant'

//Post Request
export const CreateLogin=(Data)=>{
      const createuserrequest=()=>{
        return{
            type:CREATE_LOGIN_REQUEST
        }
    }
    const createusersuccess=(newData)=>{
        sessionStorage.login=JSON.stringify(newData)
        return{
            type:CREATE_LOGIN_SUCCESS,
            payload:newData
        }
    }
    const createuserfail=(error)=>{
        return{
            type:CREATE_LOGIN_FAIL,
            error
        }
    }
    //logout
    const Dellogin=()=>{
        return{
            type:"DelNewData"
        }
    }
    return async(dispatch)=>{
        dispatch(createuserrequest())
        try{
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}login`,Data)
            console.log(response)

            if(response.status===200){
                dispatch(createusersuccess(response.data))
                dispatch(Dellogin())
            }else{
                dispatch(createuserfail('Sorry We Failed to Submit Data!!! Try Again...'))
            }
        }catch(error){
            dispatch(createuserfail('Invalid Username & Password!!! Try Again'))
        }
    }
}
 
