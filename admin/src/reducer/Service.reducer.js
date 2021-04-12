import { CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from '../constant/service.constant'

const initialstate ={
    isLoading :false,
    error:'',
    newData:null, //post 
    getData:[], //get
    delData:null, //delete
    editData:'',  //edit
    msg:'' //message
}

export const serviceReducer = (state = initialstate,action) =>{
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
                newData:action.payload,
                error:'',
                msg:'Form Created Successfully...'
            }
        case CREATE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                newData:null,
                error:action.error
            }
        //getdata
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
        case DELETE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                delData:null
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                delData:action.payload,
                error:'',
                msg:'Data Delete SuccessFully...'
            }
        case DELETE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                delData:null,
                error:action.error
            }
        //edit
        case UPDATE_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                editData:null,
                error:''
            }
        case UPDATE_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                editData:action.payload,
                error:'',
                msg:'Your Data Updated SuccessFully...'
            }
        case UPDATE_USER_FAIL:
            return{
                ...state,
                isLoading:false,
                editData:'',
                error:action.error
            }
        default:
            return state
    }
}