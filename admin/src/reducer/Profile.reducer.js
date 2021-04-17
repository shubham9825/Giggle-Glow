import { GET_PROFILE_FAIL, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from '../constant/Profile.constant'

const initialstate = {
    isLoading: false,
    error: '',
    getData: []  //get
}


export const ProfileReducer = (state = initialstate, action) => {
    switch (action.type) {
        //getdata
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                getData: action.payload,
                error: ''
            }
        case GET_PROFILE_FAIL:
            return {
                ...state,
                isLoading: false,
                getData: null,
                error: action.error
            }
        default:
            return state
    }
}