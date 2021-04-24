import { CREATE_SINGUP_FAIL, CREATE_SINGUP_REQUEST, CREATE_SINGUP_SUCCESS, DELETE_SINGUP_FAIL, DELETE_SINGUP_REQUEST, DELETE_SINGUP_SUCCESS, GET_SINGUP_FAIL, GET_SINGUP_REQUEST, GET_SINGUP_SUCCESS } from "../constant/signup.constant"

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
        case CREATE_SINGUP_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                newData:null
            }
        case CREATE_SINGUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                newData:action.payload,
                msg:'Form Created Successfully...'
            }
        case CREATE_SINGUP_FAIL:
            return{
                ...state,
                isLoading:false,
                newData:null,
                error:action.error
            }
        case GET_SINGUP_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case GET_SINGUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                getData:action.payload
            }
        case GET_SINGUP_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case DELETE_SINGUP_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case DELETE_SINGUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                delData:action.payload,
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_SINGUP_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
       
        default:
            return state
    }
}