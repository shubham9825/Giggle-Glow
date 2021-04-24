import { CREATE_NOTICE_FAIL, CREATE_NOTICE_REQUEST, CREATE_NOTICE_SUCCESS, DELETE_NOTICE_FAIL, DELETE_NOTICE_REQUEST, DELETE_NOTICE_SUCCESS, GET_NOTICE_FAIL, GET_NOTICE_REQUEST, GET_NOTICE_SUCCESS, UPDATE_NOTICE_FAIL, UPDATE_NOTICE_REQUEST, UPDATE_NOTICE_SUCCESS } from '../constant/notice.constant'

const initialstate = {
    isLoading: false,
    error: '',
    newData: null, //post 
    getData: [],  //get
    delData: null, //delete
    editData:null, //update
    msg:'' //message
}

export const NoticeReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CREATE_NOTICE_REQUEST:
            return {
                ...state,
                isLoading: true,
                newData: null,
                error: ''
            }
        case CREATE_NOTICE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                newData: action.payload,
                error: '',
                msg:'Form Created Successfully...'
            }
        case CREATE_NOTICE_FAIL:
            return {
                ...state,
                isLoading: false,
                newData: null,
                error: action.error
            }
        //getdata
        case GET_NOTICE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_NOTICE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                getData: action.payload,
                error: ''
            }
        case GET_NOTICE_FAIL:
            return {
                ...state,
                isLoading: false,
                getData: null,
                error: action.error
            }
        //delete data
        case DELETE_NOTICE_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                delData:null
            }
        case DELETE_NOTICE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                delData:action.payload,
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_NOTICE_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        //update
        case UPDATE_NOTICE_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                editData:null
            }
        case UPDATE_NOTICE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                editData:action.payload,
                msg:'Your Data Successfully Updated...'
            }
        case UPDATE_NOTICE_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        default:
            return state
    }
}