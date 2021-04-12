import { CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from "../constant/signup.constant"

const initialstate={
    isLoading:false,
    error:'',
    newData:null,//post Request
    getData:[], //getData
    delData:null, //delete Data
    msg:null //message
}
export const SignupReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                newData:null
            }
        case CREATE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                newData:action.payload,
                msg:'Form Created Successfully...'
            }
        case CREATE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                newData:null,
                error:action.error
            }
        case GET_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case GET_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                getData:action.payload
            }
        case GET_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case DELETE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                delData:action.payload,
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
       
        default:
            return state
    }
}