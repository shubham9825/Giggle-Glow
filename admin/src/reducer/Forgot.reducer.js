import { CREATE_FORGOT_FAIL, CREATE_FORGOT_REQUEST, CREATE_FORGOT_SUCCESS, UPDATE_FORGOT_FAIL, UPDATE_FORGOT_REQUEST, UPDATE_FORGOT_SUCCESS } from "../constant"

const initialdata={
    isLoading:false,
    error:'',
    newData:null, //post
    editData:null, //update
    msg:'', //message
    showOtp:false,
    showmail:false
}

export const ForgotReducer=(state=initialdata,action)=>{
    switch(action.type){
        case CREATE_FORGOT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case CREATE_FORGOT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newData:action.payload,
                error:'',
                msg:' OTP Sent...',
                showOtp:true,
                showmail:false
            }
        case CREATE_FORGOT_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error,
                msg:'',
                showOtp:false,
                showmail:true
            }
            //edit
        case  UPDATE_FORGOT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case  UPDATE_FORGOT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                editData:action.payload,
                error:'',
                msg:'Your Password Update SuccessFully...'
            }
        case  UPDATE_FORGOT_FAIL:
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