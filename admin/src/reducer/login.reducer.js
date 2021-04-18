import { CREATE_LOGIN_FAIL, CREATE_LOGIN_REQUEST, CREATE_LOGIN_SUCCESS } from "../constant/login.constant"

const initialstate={
    isLoading:false,
    error:'',
    newData:null//post request
}

export const LoginReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_LOGIN_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:null
            }
        case CREATE_LOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newData:action.payload
            }
        case CREATE_LOGIN_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            } 
        //logout
        case "DelNewData":
            return{
                ...state,
                newData:null
            }
        default:
            return state
    }
}