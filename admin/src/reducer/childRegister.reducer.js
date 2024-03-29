import { CREATE_CHILD_FAIL, CREATE_CHILD_REQUEST, CREATE_CHILD_SUCCESS, DELETE_CHILD_FAIL, DELETE_CHILD_REQUEST, DELETE_CHILD_SUCCESS, GET_CHILD_FAIL, GET_CHILD_REQUEST, GET_CHILD_SUCCESS, UPDATE_CHILD_FAIL, UPDATE_CHILD_REQUEST, UPDATE_CHILD_SUCCESS } from '../constant/childRegister.constant'
 
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
        case CREATE_CHILD_REQUEST:
            return{
                ...state,
                isLoading:true,
                newdata:null,
                error:''
            }
        case CREATE_CHILD_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newdata:action.payload,
                error:'',
                msg:'Form Created Successfully...'
            }
        case CREATE_CHILD_FAIL:
            return{
                ...state,
                isLoading:false,
                newdata:null,
                error:action.error
            }
        //get request's
        case GET_CHILD_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case GET_CHILD_SUCCESS:
            return{
                ...state,
                isLoading:false,
                getData:action.payload,
                error:''
            }
        case GET_CHILD_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        //delete
        case DELETE_CHILD_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case DELETE_CHILD_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                delData:action.payload,
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_CHILD_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        //edit
        case UPDATE_CHILD_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                editData:null
            }
        case UPDATE_CHILD_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                editData:action.payload,
                msg:'Your Data Successfully Updated...'
            }
        case UPDATE_CHILD_FAIL:
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