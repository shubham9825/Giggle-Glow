import {   CREATE_PAYMENT_FAIL, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS } from '../constant/payment.constant'

const initialstate = {
    isLoading: false,
    error: '',
    newData: null, //post 
}

export const PaymentReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CREATE_PAYMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                newData: null,
                error: ''
            }
        case CREATE_PAYMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                newData: action.payload,
                error: '',
                msg:'Form Created Successfully...'
            }
        case CREATE_PAYMENT_FAIL:
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