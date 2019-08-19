import {RECEIVE_PURCHASE,REQUEST_PURCHASE, FAILED_PURCHASE,UPDATE_FILTER_VALUE,UPDATE_PURCHASE_LIST} from '../actions/actionTypes'
import {combineReducers} from 'redux'


function filterValue(state={},action){
    switch(action.type){
        case UPDATE_FILTER_VALUE:
            return  {
                ...state,
                [action.key]:action.value
            }
            
        default:
            return state
    }
}



function data(state={
    isFetching:false,
    list:[],
    total:'',
    isError:null
}, action){
     switch (action.type){
         case REQUEST_PURCHASE:
             return {
                ...state,
                isFetching:true,
                isError:null
             }
         case RECEIVE_PURCHASE:
             return{
                 ...action.data,
                 isFetching:false,
                 isError:null
             }
         case FAILED_PURCHASE:
             return{
                 ...state,
                 isError:action.error,
                 isFetching:false
             }
         case UPDATE_PURCHASE_LIST:
             return{
                ...state,
                list:[
                    ...state.list,
                    ...action.list
                ],
                isFetching:false,
                isError:null
             }
        default:
            return state
     }
}


export const reducer=
combineReducers({
    filterValue,
    data
})

  