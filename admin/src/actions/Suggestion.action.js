import { CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../constant/suggestion.constant"
import axios from 'axios'

//post Request
export const CreateSuggestion=(Data)=>{
   const createDataRequest=()=>{
       return{
           type:CREATE_USER_REQUEST
       }
   }

   const createDataSuccess=(newData)=>{
       return{
           type:CREATE_USER_SUCCESS,
           payload:newData
       }
   }

   const createDataFail=(error)=>{
       return{
           type:CREATE_USER_FAIL,
           error
       }
   }
    return async(dispatch)=>{
        dispatch(createDataRequest())
        try{
            const response=await axios.post('http://localhost:3001/suggestions',Data)
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
            type:GET_USER_REQUEST
        }
    }
 
    const getDataSuccess=(getData)=>{
        return{
            type:GET_USER_SUCCESS,
            payload:getData
        }
    }
 
    const getDataFail=(error)=>{
        return{
            type:GET_USER_FAIL,
            error
        }
    }
    return async(dispatch)=>{
         dispatch(getDataRequest())
         try{
             const response=await axios.get('http://localhost:3001/suggestions')
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
            type:DELETE_USER_REQUEST
        }
    }
 
    const deleteDataSuccess=(Data)=>{
        return{
            type:DELETE_USER_SUCCESS,
            payload:Data
        }
    }
 
    const deleteDataFail=(error)=>{
        return{
            type:DELETE_USER_FAIL,
            error
        }
    }
     return async(dispatch)=>{
         dispatch(deleteDataRequest())
         try{
             const response=await axios.delete(`http://localhost:3001/suggestions/${theSuggest._id}`)
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
            type:UPDATE_USER_REQUEST
        }
    }
 
    const updateDataSuccess=(Data)=>{
        return{
            type:UPDATE_USER_SUCCESS,
            payload:Data
        }
    }
 
    const updateDataFail=(error)=>{
        return{
            type:UPDATE_USER_FAIL,
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
             const response=await axios.put(`http://localhost:3001/suggestions/${_id}`,Data)
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