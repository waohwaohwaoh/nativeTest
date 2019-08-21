import {RECEIVE_PURCHASE,REQUEST_PURCHASE, FAILED_PURCHASE,UPDATE_FILTER_VALUE,UPDATE_PURCHASE_LIST,ADD_FAVOURITES,DELETE_FAVOURITES, UPDATE_NOTIFICATION} from '../actions/actionTypes'
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

function notification(state={
    visible:false,
    title:''
},action){
    switch (action.type){
        case UPDATE_NOTIFICATION:
            return {
                visible:action.value,
                title:action.title
            }
        default:
            return state
    }
}

function favourites(state=[],action){
    switch(action.type){
        case ADD_FAVOURITES:
            return[
                ...state,
                ...action.object
            ]
        case DELETE_FAVOURITES:
            return action.value
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
    data,
    favourites,
    notification
})

  