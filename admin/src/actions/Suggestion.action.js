import { CREATE_SUGGESTION_FAIL, CREATE_SUGGESTION_REQUEST, CREATE_SUGGESTION_SUCCESS, DELETE_SUGGESTION_FAIL, DELETE_SUGGESTION_REQUEST, DELETE_SUGGESTION_SUCCESS, GET_SUGGESTION_FAIL, GET_SUGGESTION_REQUEST, GET_SUGGESTION_SUCCESS, UPDATE_SUGGESTION_FAIL, UPDATE_SUGGESTION_REQUEST, UPDATE_SUGGESTION_SUCCESS } from "../constant/suggestion.constant"
import axios from 'axios'

//post Request
export const CreateSuggestion=(Data)=>{
   const createDataRequest=()=>{
       return{
           type:CREATE_SUGGESTION_REQUEST
       }
   }

   const createDataSuccess=(newData)=>{
       return{
           type:CREATE_SUGGESTION_SUCCESS,
           payload:newData
       }
   }

   const createDataFail=(error)=>{
       return{
           type:CREATE_SUGGESTION_FAIL,
           error
       }
   }
    return async(dispatch)=>{
        dispatch(createDataRequest())
        try{
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}suggestions`,Data)
            console.log(response)

            if(response.status===201){
                dispatch(createDataSuccess(response.data))
                dispatch(GetSuggestion())
            }else{
                dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
            }
        }catch(error){
            console.log(error)
            dispatch(createDataFail('Sorry We Failed to Submit Data!!! Try Again...'))
        }
    }
}

//GET request
export const GetSuggestion=()=>{
    const getDataRequest=()=>{
        return{
            type:GET_SUGGESTION_REQUEST
        }
    }
 
    const getDataSuccess=(getData)=>{
        return{
            type:GET_SUGGESTION_SUCCESS,
            payload:getData
        }
    }
 
    const getDataFail=(error)=>{
        return{
            type:GET_SUGGESTION_FAIL,
            error
        }
    }
    return async(dispatch)=>{
         dispatch(getDataRequest())
         try{
             const response=await axios.get(`${process.env.REACT_APP_SERVER_URL}suggestions`)
             console.log(` response ::: ${response}`)
 
             if(response.status===200){
                 dispatch(getDataSuccess(response.data))
             }else{
                 dispatch(getDataFail('Sorry We Failed to Getting Data!!!'))
             }
         }catch(error){
             console.log(error)
             dispatch(getDataFail('Sorry We Failed to Getting Data!!!'))
         }
     }
 }

//DELETE Request
export const DeleteSuggestion=(theSuggest)=>{
    const deleteDataRequest=()=>{
        return{
            type:DELETE_SUGGESTION_REQUEST
        }
    }
 
    const deleteDataSuccess=(Data)=>{
        return{
            type:DELETE_SUGGESTION_SUCCESS,
            payload:Data
        }
    }
 
    const deleteDataFail=(error)=>{
        return{
            type:DELETE_SUGGESTION_FAIL,
            error
        }
    }
     return async(dispatch)=>{
         dispatch(deleteDataRequest())
         try{
             const response=await axios.delete(`${process.env.REACT_APP_SERVER_URL}suggestions/${theSuggest._id}`)
             console.log(response)
 
             if(response.status===200){
                 dispatch(deleteDataSuccess(response.data))
                 dispatch(GetSuggestion())
             }else{
                 dispatch(deleteDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
             }
         }catch(error){
             console.log(error)
             dispatch(deleteDataFail('Sorry We Failed to Delete Data!!! Try Again...'))
         }
     }
 }

 //UPDATE Request
export const UpdateSuggestion=(Data)=>{
    const updateDataRequest=()=>{
        return{
            type:UPDATE_SUGGESTION_REQUEST
        }
    }
 
    const updateDataSuccess=(Data)=>{
        return{
            type:UPDATE_SUGGESTION_SUCCESS,
            payload:Data
        }
    }
 
    const updateDataFail=(error)=>{
        return{
            type:UPDATE_SUGGESTION_FAIL,
            error
        }
    }
     return async(dispatch)=>{
         dispatch(updateDataRequest())
         try{
            let _id=Data._id
            delete Data._id
            delete Data.updatedAt  
            delete Data.createdAt
            //console.log(Data)
             const response=await axios.put(`${process.env.REACT_APP_SERVER_URL}suggestions/${_id}`,Data)
             console.log(response)
 
             if(response.status===200){
                 dispatch(updateDataSuccess(response.data))
                 dispatch(GetSuggestion())
             }else{
                 dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
             }
         }catch(error){
             console.log(error)
             dispatch(updateDataFail('Sorry We Failed to Update Data!!! Try Again...'))
         }
     }
 }