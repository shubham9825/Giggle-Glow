import { CREATE_SERVICE_FAIL, CREATE_SERVICE_REQUEST, CREATE_SERVICE_SUCCESS, DELETE_SERVICE_FAIL, DELETE_SERVICE_REQUEST, DELETE_SERVICE_SUCCESS, GET_SERVICE_FAIL, GET_SERVICE_REQUEST, GET_SERVICE_SUCCESS, UPDATE_SERVICE_FAIL, UPDATE_SERVICE_REQUEST, UPDATE_SERVICE_SUCCESS } from '../constant/service.constant'

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
        case CREATE_SERVICE_REQUEST:
            return{
                ...state,
                isLoading:true,
                newData:null,
                error:''
            }
        case CREATE_SERVICE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newData:action.payload,
                error:'',
                msg:'Form Created Successfully...'
            }
        case CREATE_SERVICE_FAIL:
            return{
                ...state,
                isLoading:false,
                newData:null,
                error:action.error
            }
        //getdata
        case GET_SERVICE_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case GET_SERVICE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                getData:action.payload
            }
        case GET_SERVICE_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        //delete
        case DELETE_SERVICE_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                delData:null
            }
        case DELETE_SERVICE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                delData:action.payload,
                error:'',
                msg:'Data Delete SuccessFully...'
            }
        case DELETE_SERVICE_FAIL:
            return{
                ...state,
                isLoading:false,
                delData:null,
                error:action.error
            }
        //edit
        case UPDATE_SERVICE_REQUEST:
            return{
                ...state,
                isLoading:true,
                editData:null,
                error:''
            }
        case UPDATE_SERVICE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                editData:action.payload,
                error:'',
                msg:'Your Data Updated SuccessFully...'
            }
        case UPDATE_SERVICE_FAIL:
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