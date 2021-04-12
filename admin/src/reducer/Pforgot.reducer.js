import { CREATE_PFORGOT_FAIL, CREATE_PFORGOT_REQUEST, CREATE_PFORGOT_SUCCESS, UPDATE_PFORGOT_FAIL, UPDATE_PFORGOT_REQUEST, UPDATE_PFORGOT_SUCCESS } from '../constant/pforgot.constant'

const initialdata={
    isLoading:false,
    error:'',
    newData:null, //post
    editData:null, //update
    msg:'', //message
    showOtp:false,
    showmail:false
}

export const PforgotReducer=(state=initialdata,action)=>{
    switch(action.type){
        case CREATE_PFORGOT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case CREATE_PFORGOT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newData:action.payload,
                error:'',
                msg:' OTP Sent...',
                showOtp:true,
                showmail:false
            }
        case CREATE_PFORGOT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error,
                msg:'',
                showOtp:false,
                showmail:true
            }
            //edit
        case  UPDATE_PFORGOT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case  UPDATE_PFORGOT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                editData:action.payload,
                error:'',
                msg:'Your Password Update SuccessFully...'
            }
        case  UPDATE_PFORGOT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error,
                msg:''  
            }
        default: 
            return state
    }
}