import { CREATE_SUGGESTION_FAIL, CREATE_SUGGESTION_REQUEST, CREATE_SUGGESTION_SUCCESS, DELETE_SUGGESTION_FAIL, DELETE_SUGGESTION_REQUEST, DELETE_SUGGESTION_SUCCESS, GET_SUGGESTION_FAIL, GET_SUGGESTION_REQUEST, GET_SUGGESTION_SUCCESS, UPDATE_SUGGESTION_FAIL, UPDATE_SUGGESTION_REQUEST, UPDATE_SUGGESTION_SUCCESS } from "../constant/suggestion.constant"

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
        case CREATE_SUGGESTION_REQUEST:
            return{
                ...state,
                isLoading:true,
                newData:null,
                error:''
            }
        case CREATE_SUGGESTION_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newData:action.payload,
                error:'',
                msg:'Form Created Successfully...'
            }
        case CREATE_SUGGESTION_FAIL:
            return{
                ...state,
                isLoading:false,
                newData:null,
                error:action.error
            }
        case GET_SUGGESTION_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case GET_SUGGESTION_SUCCESS:
            return{
                ...state,
                isLoading:false,
                getData:action.payload,
                error:''
            }
        case GET_SUGGESTION_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case DELETE_SUGGESTION_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case DELETE_SUGGESTION_SUCCESS:
            return{
                ...state,
                isLoading:false,
                theSuggest:action.payload,
                error:'',
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_SUGGESTION_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case UPDATE_SUGGESTION_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case UPDATE_SUGGESTION_SUCCESS:
            return{
                ...state,
                isLoading:false,
                suggestdata:action.payload,
                error:'',
                msg:'Your Data Updated Successfully...'
            }
        case UPDATE_SUGGESTION_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
       default:
           return state
    }
}