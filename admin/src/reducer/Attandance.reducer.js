import { CREATE_ATTANDANCE_FAIL, CREATE_ATTANDANCE_REQUEST, CREATE_ATTANDANCE_SUCCESS } from "../constant/attandance.constant"

const initialstate = {
    isLoading: false,
    error: '',
    newData: [], //get
}

export const AttandanceReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CREATE_ATTANDANCE_REQUEST:
            return {
                ...state,
                isLoading: true,
                newData: null,
                error: ''
            }
        case CREATE_ATTANDANCE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                newData: action.payload,
                error: ''
            }
        case CREATE_ATTANDANCE_FAIL:
            return {
                ...state,
                isLoading: false,
                newData: null,
                error: action.error
            }
       
        default:
            return state
    }
}