import { CREATE_INQUIRY_FAIL, CREATE_INQUIRY_REQUEST, CREATE_INQUIRY_SUCCESS, DELETE_INQUIRY_FAIL, DELETE_INQUIRY_REQUEST, DELETE_INQUIRY_SUCCESS, GET_INQUIRY_FAIL, GET_INQUIRY_REQUEST, GET_INQUIRY_SUCCESS, UPDATE_INQUIRY_FAIL, UPDATE_INQUIRY_REQUEST, UPDATE_INQUIRY_SUCCESS } from '../constant/inquiry.constant'

const initialstate={
    isLoading:false,
    error:'',
    newData:null, //post
    getData:[], //get
    deleteData:null, //delete
    UpdateData:null,  //update
    msg:'' //message
}

export const InquiryReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_INQUIRY_REQUEST:
            return{
                ...state,
                isLoading:true,
                newData:null,
                error:''
            }
        case CREATE_INQUIRY_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                newData:action.payload,
                msg:'Form Created Successfully...'
            }
        case CREATE_INQUIRY_FAIL:
            return{
                ...state,
                isLoading:false,
                newData:null,
                error:action.error
            }
        case GET_INQUIRY_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case GET_INQUIRY_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                getData:action.payload
            }
        case GET_INQUIRY_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case DELETE_INQUIRY_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case DELETE_INQUIRY_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                deleteData:action.payload,
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_INQUIRY_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error 
            }
        case UPDATE_INQUIRY_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case UPDATE_INQUIRY_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                UpdateData:action.payload,
                msg:'Your Data Successfully Updated...'
            }
        case UPDATE_INQUIRY_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        default:
            return state
    }
}