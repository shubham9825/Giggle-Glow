import axios from "axios"
import { CREATE_PLOGIN_FAIL, CREATE_PLOGIN_REQUEST, CREATE_PLOGIN_SUCCESS } from '../constant/Plogin.constant'

//Post Request
export const CreatePlogin=(Data)=>{
      const createuserrequest=()=>{
        return{
            type:CREATE_PLOGIN_REQUEST
        }
    }
    const createusersuccess=(newData)=>{
        sessionStorage.login=JSON.stringify(newData)
        return{
            type:CREATE_PLOGIN_SUCCESS,
            payload:newData
        }
    }
    const createuserfail=(error)=>{
        return{
            type:CREATE_PLOGIN_FAIL,
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
            const response=await axios.post('http://localhost:3001/plogin',Data)
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
 
