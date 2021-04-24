import { CREATE_LUNCH_FAIL, CREATE_LUNCH_REQUEST, CREATE_LUNCH_SUCCESS, DELETE_LUNCH_FAIL, DELETE_LUNCH_REQUEST, DELETE_LUNCH_SUCCESS, GET_LUNCH_FAIL, GET_LUNCH_REQUEST, GET_LUNCH_SUCCESS, UPDATE_LUNCH_FAIL, UPDATE_LUNCH_REQUEST, UPDATE_LUNCH_SUCCESS } from "../constant/lunch.constant"

const initialstate={
    isLoading:false,
    error:'',
    newData:null, //post request
    getData:[], //get Request
    theLunchData:null, //delete Request
    lunchdata:null, //update Request
    msg:'' //Message
}

export const LunchReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_LUNCH_REQUEST:
            return{
                ...state,
                isLoading:true,
                newData:null,
                error:''
            }
        case CREATE_LUNCH_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newData:action.payload,
                error:'',
                msg:'Form Created SuccessFully...'
            }
        case CREATE_LUNCH_FAIL:
            return{
                ...state,
                isLoading:false,
                newData:'',
                error:action.error                
            }
        case GET_LUNCH_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case GET_LUNCH_SUCCESS:
            return{
                ...state,
                isLoading:false,
                getData:action.payload,
                error:''
            }
        case GET_LUNCH_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error                
            }
        case DELETE_LUNCH_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case DELETE_LUNCH_SUCCESS:
            return{
                ...state,
                isLoading:false,
                theLunchData:action.payload,
                error:'',
                msg:'Data Delete SuccessFully...'
            }
        case DELETE_LUNCH_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error                
            }
        case UPDATE_LUNCH_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case UPDATE_LUNCH_SUCCESS:
            return{
                ...state,
                isLoading:false,
                lunchdata:action.payload,
                error:'',
                msg:'Your Data SuccessFully Updated'
            }
        case UPDATE_LUNCH_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error                
            }
        default:
            return state
    }
}