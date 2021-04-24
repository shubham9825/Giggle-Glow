import { CREATE_ABOUT_FAIL, CREATE_ABOUT_REQUEST, CREATE_ABOUT_SUCCESS, DELETE_ABOUT_FAIL, DELETE_ABOUT_REQUEST, DELETE_ABOUT_SUCCESS, GET_ABOUT_FAIL, GET_ABOUT_REQUEST, GET_ABOUT_SUCCESS, UPDATE_ABOUT_FAIL, UPDATE_ABOUT_REQUEST, UPDATE_ABOUT_SUCCESS } from '../constant/about.constant'

const initialstate={
    isLoading:false,
    error:'',
    newData:null, //post 
    getData:[],   //get
    theAbout:null, //delete 
    AboutData:null, //update
    msg:'' //message
}

export const AboutReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_ABOUT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                newData:null
            }
        case CREATE_ABOUT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                newData:action.payload,
                msg:'Form Created Successfully...'
            }
        case CREATE_ABOUT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error,
                newData:null
            }
         case GET_ABOUT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case GET_ABOUT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                getData:action.payload
            }
        case GET_ABOUT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error,
            }
        case DELETE_ABOUT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case DELETE_ABOUT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                theAbout:action.payload,
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_ABOUT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case UPDATE_ABOUT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case UPDATE_ABOUT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                AboutData:action.payload,
                msg:'Your Data Successfully Updated...'
            }
        case UPDATE_ABOUT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error                
            }
        default:
            return state
    }
}