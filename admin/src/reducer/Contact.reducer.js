import { CREATE_CONTACT_FAIL, CREATE_CONTACT_REQUEST, CREATE_CONTACT_SUCCESS, DELETE_CONTACT_FAIL, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, GET_CONTACT_FAIL, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS, UPDATE_CONTACT_FAIL, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS } from '../constant/contact.constant'

const initialstate={
    isLoading:false,
    error:'',
    newData:null, //post request
    getData:[], //get Request
    theContact:null, //delete Request
    contactData:null, //update Request
    msg:''  //message
}

export const ContactReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_CONTACT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                newData:null
            }
        case CREATE_CONTACT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                newData:action.payload,
                msg:'Form Created Successfully...'
            }
        case CREATE_CONTACT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error,
                newData:null
            }
        case GET_CONTACT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case GET_CONTACT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                getData:action.payload
            }
        case GET_CONTACT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error,
            }
        case DELETE_CONTACT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case DELETE_CONTACT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                theContact:action.payload,
                msg:'Data Deleted SuccessFully...'
            }
        case DELETE_CONTACT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        case UPDATE_CONTACT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case UPDATE_CONTACT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                contactData:action.payload,
                msg:'Your Data Successfully Updated...'
            }
        case UPDATE_CONTACT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            }
        default:
            return state
    }
}