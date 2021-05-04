import { CREATE_ALBUM_FAIL, CREATE_ALBUM_REQUEST, CREATE_ALBUM_SUCCESS, DELETE_ALBUM_FAIL, DELETE_ALBUM_REQUEST, DELETE_ALBUM_SUCCESS, GET_ALBUM_FAIL, GET_ALBUM_REQUEST, GET_ALBUM_SUCCESS, UPDATE_ALBUM_FAIL, UPDATE_ALBUM_REQUEST, UPDATE_ALBUM_SUCCESS } from '../constant/album.constant'

const initialstate={
    isLoading:false,
    error:'',
    newData:null, //post 
    getData:[],   //get
    theAlbum:null, //delete 
    AlbumData:null, //update
    msg:'' //message
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
        case DELETE_ALBUM_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case DELETE_ALBUM_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                theAlbum:action.payload,
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_ALBUM_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case UPDATE_ALBUM_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case UPDATE_ALBUM_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                AlbumData:action.payload,
                msg:'Your Data Successfully Updated...'
            }
        case UPDATE_ALBUM_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error                
            }
        default:
            return state
    }
}