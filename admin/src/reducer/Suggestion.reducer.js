import { CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../constant/suggestion.constant"

const initialstate={
    isLoading:false,
    error:'',
    newData:null,//post request
    getData:[], //get request
    theSuggest:null, //delete Request
    suggestdata:null, //update Request
    msg:'' //Message
}
export const SuggestReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                newData:null,
                error:''
            }
        case CREATE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newData:action.payload,
                error:'',
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
                error:''
            }
        case GET_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                getData:action.payload,
                error:''
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
                error:''
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                theSuggest:action.payload,
                error:'',
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case UPDATE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case UPDATE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                suggestdata:action.payload,
                error:'',
                msg:'Your Data Updated Successfully...'
            }
        case UPDATE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
       default:
           return state
    }
}