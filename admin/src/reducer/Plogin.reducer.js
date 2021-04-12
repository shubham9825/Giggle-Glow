import { CREATE_PLOGIN_FAIL, CREATE_PLOGIN_REQUEST, CREATE_PLOGIN_SUCCESS } from '../constant/Plogin.constant'

const initialstate={
    isLoading:false,
    error:'',
    newData:null//post request
}

export const PloginReducer=(state=initialstate,action)=>{
    switch(action.type){
        case CREATE_PLOGIN_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case CREATE_PLOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                newData:action.payload,
            }
        case CREATE_PLOGIN_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.error
            } 
        //logout
        case "DelNewData":
            return{
                ...state,
                newData:null
            }
        default:
            return state
    }
}