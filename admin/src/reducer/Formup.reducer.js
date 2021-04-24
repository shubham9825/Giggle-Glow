import { CREATE_FORMUP_FAIL, CREATE_FORMUP_REQUEST, CREATE_FORMUP_SUCCESS, FDELETE_FORMUP_FAIL, FDELETE_FORMUP_REQUEST, FDELETE_FORMUP_SUCCESS, GET_FORMUP_FAIL, GET_FORMUP_REQUEST, GET_FORMUP_SUCCESS, UPDATE_FORMUP_FAIL, UPDATE_FORMUP_REQUEST, UPDATE_FORMUP_SUCCESS } from '../constant/formup.constant'

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
        case CREATE_FORMUP_REQUEST:
            return{
                ...state,
                isLoading:true,
                newData:null,
                error:''
            }
        case CREATE_FORMUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                newData:action.payload,
                msg:'Form Created Successfully...'
            }
        case CREATE_FORMUP_FAIL:
            return{
                ...state,
                isLoading:false,
                newData:null,
                error:action.error
            }
        //get data
        case GET_FORMUP_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case GET_FORMUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                getData:action.payload
            }
        case GET_FORMUP_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        //delete
        case FDELETE_FORMUP_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case FDELETE_FORMUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                delData:action.payload,
                msg:'Data Deleted SuccessFully...'          
            }
        case FDELETE_FORMUP_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error                
            }
        //put data
        case UPDATE_FORMUP_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                editData:null
            }
        case UPDATE_FORMUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                editData:action.payload,
                error:'',
                msg:'Your Data Successfully Updated...'
            }
        case UPDATE_FORMUP_FAIL:
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