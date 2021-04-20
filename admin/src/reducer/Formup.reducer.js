import {CREATE_USER_REQUEST,CREATE_USER_SUCCESS,CREATE_USER_FAIL, GET_USER_REQUEST, 
    GET_USER_SUCCESS, GET_USER_FAIL, 
    FDELETE_USER_REQUEST, FDELETE_USER_SUCCESS, FDELETE_USER_FAIL, 
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL} from '../constant/formup.constant'

const initialstate={
    isLoading:false,
    error:'',
    newData:null,//post request
    getData:[],//get request
    delData:null,//delete request
    editData:null,//put request
    msg:null
}

export const FormupReducer=(state=initialstate,action)=>{
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
        //get data
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
                error:'',
                getData:action.payload
            }
        case GET_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        //delete
        case FDELETE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case FDELETE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                delData:action.payload,
                msg:'Data Deleted SuccessFully...'          
            }
        case FDELETE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error                
            }
        //put data
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
                editData:action.payload,
                error:'',
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