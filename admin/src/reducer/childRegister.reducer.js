import { CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../constant/childRegister.constant'
 
const initialstate = {
    isLoading:false,
    error:'',
    newdata:null, //post
    getData:[], //get
    delData:null, //delete
    editData:null, //edit
    msg:'' //message
}

export const childReducer = (state = initialstate,action)=>{
    switch(action.type){
        case CREATE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                newdata:null,
                error:''
            }
        case CREATE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newdata:action.payload,
                error:'',
                msg:'Form Created Successfully...'
            }
        case CREATE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                newdata:null,
                error:action.error
            }
        //get request's
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
        //delete
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
        //edit
        case UPDATE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                editData:null
            }
        case UPDATE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                editData:action.payload,
                msg:'Your Data Successfully Updated...'
            }
        case UPDATE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                editData:null,
                error:action.error            
            }
        default:
            return state
    }
}