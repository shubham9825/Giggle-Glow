import { CREATE_PUSER_FAIL, CREATE_PUSER_REQUEST, CREATE_PUSER_SUCCESS, DELETE_PUSER_FAIL, DELETE_PUSER_REQUEST, DELETE_PUSER_SUCCESS, GET_PUSER_FAIL, GET_PUSER_REQUEST, GET_PUSER_SUCCESS } from '../constant/Psignup.constant'

const initialstate={
    isLoading:false,
    error:'',
    newData:null,//post Request
    getData:[], //getData
    delData:null, //delete Data
    msg:null //message
}

export const PsignupReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_PUSER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                newData:null
            }
        case CREATE_PUSER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                newData:action.payload,
                msg:'Form Created Successfully...'
            }
        case CREATE_PUSER_FAIL:
            return{
                ...state,
                isLoading:false,
                newData:null,
                error:action.error
            }
        case GET_PUSER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case GET_PUSER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                getData:action.payload
            }
        case GET_PUSER_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case DELETE_PUSER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case DELETE_PUSER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                delData:action.payload,
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_PUSER_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
       
        default:
            return state
    }
}