import axios from 'axios'
import { GET_PROFILE_FAIL, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from '../constant/Profile.constant'

//get data
export const getProfile =(Data)=>{
    const getDataRequest =()=>{
        return{
            type:GET_PROFILE_REQUEST
        }
    }
    const getDataSuccess =(getData)=>{
        return{
            type:GET_PROFILE_SUCCESS,
            payload:getData
        }
    }
    const getDataFail =(error)=>{
        return{
            type:GET_PROFILE_FAIL,
            error
        }
    }
    return async(dispatch)=>{
        console.log(Data)
        dispatch(getDataRequest())
        try{
            const response = await axios.get('http://localhost:3001/profiles',Data)
            console.log('running')
            console.log(response)
            if(response.status===200){
                dispatch(getDataSuccess(response.data))
            }else{
                dispatch(getDataFail('Sorry We Failed to Get Your Profile!!!'))
            }
        }catch(error){
            console.log(error)
            dispatch(getDataFail('Sorry We Failed to Get Your Profile!!!'))
        }
    }
}
