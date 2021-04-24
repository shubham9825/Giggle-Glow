import { CREATE_ALBUM_FAIL, CREATE_ALBUM_REQUEST, CREATE_ALBUM_SUCCESS, GET_ALBUM_FAIL, GET_ALBUM_REQUEST, GET_ALBUM_SUCCESS } from '../constant/album.constant'

const initialstate={
    isLoading:false,
    error:'',
    newData:null, //post 
    getData:[],   //get
    // theAbout:null, //delete 
    // AboutData:null, //update
    // msg:'' //message
}

export const AlbumReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_ALBUM_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                newData:null
            }
        case CREATE_ALBUM_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                newData:action.payload,
                msg:'Form Created Successfully...'
            }
        case CREATE_ALBUM_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error,
                newData:null
            }
         case GET_ALBUM_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case GET_ALBUM_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                getData:action.payload
            }
        case GET_ALBUM_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error,
            }
        // case DELETE_ABOUT_REQUEST:
        //     return{
        //         ...state,
        //         isLoading:true,
        //         error:'',
        //     }
        // case DELETE_ABOUT_SUCCESS:
        //     return{
        //         ...state,
        //         isLoading:false,
        //         error:'',
        //         theAbout:action.payload,
        //         msg:'Data Deleted SuccessFully...'
        //     }
        // case DELETE_ABOUT_FAIL:
        //     return{
        //         ...state,
        //         isLoading:false,
        //         error:action.error
        //     }
        // case UPDATE_ABOUT_REQUEST:
        //     return{
        //         ...state,
        //         isLoading:true,
        //         error:'',
        //     }
        // case UPDATE_ABOUT_SUCCESS:
        //     return{
        //         ...state,
        //         isLoading:false,
        //         error:'',
        //         AboutData:action.payload,
        //         msg:'Your Data Successfully Updated...'
        //     }
        // case UPDATE_ABOUT_FAIL:
        //     return{
        //         ...state,
        //         isLoading:false,
        //         error:action.error                
        //     }
        default:
            return state
    }
}