import { CREATE_TEAM_FAIL, CREATE_TEAM_REQUEST , CREATE_TEAM_SUCCESS, DELETE_TEAM_FAIL, DELETE_TEAM_REQUEST, DELETE_TEAM_SUCCESS, GET_TEAM_FAIL, GET_TEAM_REQUEST, GET_TEAM_SUCCESS, UPDATE_TEAM_FAIL, UPDATE_TEAM_REQUEST, UPDATE_TEAM_SUCCESS}from '../constant/ourteam.constant'

const initialstate ={
    isLoading :false,
    error:'',
    newData:null, //post 
    getData:[], //get
    delData:null, //delete
    editData:'',  //edit
    msg:'' //message
}

export const TeamReducer = (state = initialstate,action) =>{
    switch(action.type){
        case CREATE_TEAM_REQUEST:
            return{
                ...state,
                isLoading:true,
                newData:null,
                error:''
            }
        case CREATE_TEAM_SUCCESS:
            return{
                ...state,
                isLoading:false,
                newData:action.payload,
                msg:'Form Created Successfully...'
            }
        case CREATE_TEAM_FAIL:
            return{
                ...state,
                isLoading:false,
                newData:null,
                error:action.error
            }
        case GET_TEAM_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case GET_TEAM_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:'',
                getData:action.payload
            }
        case GET_TEAM_FAIL:
            return{  
                ...state,
                isLoading:false,
                error:action.error
            }
        case DELETE_TEAM_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:'',
                delData:null
            }
        case DELETE_TEAM_SUCCESS:
            return{
                ...state,
                isLoading:false,
                delData:action.payload,
                error:'',
                msg:'Data Delete SuccessFully...'
            }
        case DELETE_TEAM_FAIL:
            return{
                ...state,
                isLoading:false,
                delData:null,
                error:action.error
            }
        case UPDATE_TEAM_REQUEST:
            return{
                ...state,
                isLoading:true,
                editData:null,
                error:''
            }
        case UPDATE_TEAM_SUCCESS:
            return{
                ...state,
                isLoading:false,
                editData:action.payload,
                error:'',
                msg:'Your Data Updated SuccessFully...'
            }
        case UPDATE_TEAM_FAIL:
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