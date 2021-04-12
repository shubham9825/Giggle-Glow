import { CREATE_FILE_FAIL, CREATE_FILE_REQUEST, CREATE_FILE_SUCCESS, DELETE_FILE_FAIL, DELETE_FILE_REQUEST, DELETE_FILE_SUCCESS, GET_FILE_FAIL, GET_FILE_REQUEST, GET_FILE_SUCCESS } from "../constant/gallery.constant"

const initialstate={
    isLoading:false,
    error:'',
    newData:null,//post request
    getData:[], //get Request
    delData:null, //delete Request
    message:''
}

export const GalleryReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_FILE_REQUEST:
            return{
                ...state,
                isLoading:true,
                newData:null,
                error:''
            }
        case CREATE_FILE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newData:action.payload,
                message:'File Uploaded SuccessFully...'
            }
        case CREATE_FILE_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
         case GET_FILE_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case GET_FILE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                getData:action.payload
            }
        case GET_FILE_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case DELETE_FILE_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case DELETE_FILE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                delData:action.payload,
                message:'File Successfully Deleted'
            }
        case DELETE_FILE_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        
        default:
            return state
    }
}