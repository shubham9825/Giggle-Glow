import {CREATE_USER_REQUEST,CREATE_USER_SUCCESS,CREATE_USER_FAIL,GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS,DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS} from '../constant'
import { UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../constant/about.constant'

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
        case CREATE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                newData:null
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
                error:action.error,
                newData:null
            }
         case GET_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
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
                error:action.error,
            }
        case DELETE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                theAbout:action.payload,
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case UPDATE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case UPDATE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                AboutData:action.payload,
                msg:'Your Data Successfully Updated...'
            }
        case UPDATE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error                
            }
        default:
            return state
    }
}