import {UPDATE_START_PRICE,UPDATE_END_PRICE,UPDATE_CHECKBOX_VALUE,UPDATE_SEARCHBAR_VALUE,TOGGLE_PARAMETR,RECEIVE_PURCHASE,REQUEST_PURCHASE, FAILED_PURCHASE,UPDATE_FILTER_VALUE} from '../actions/actionTypes'
import {combineReducers} from 'redux'

function searchBarValue(state='',action){
    switch(action.type){
        case UPDATE_SEARCHBAR_VALUE:
            return action.text
        default:
            return state
    }
}

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

function startPrice(state=null,action){
    switch(action.type){
        case UPDATE_START_PRICE:
            return action.startPrice
        default:
            return state
    }
}

function endPrice(state=null,action){
    switch(action.type){
        case UPDATE_END_PRICE:
            return action.endPrice
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
        
        default:
            return state
     }
}

function checkedLaws (state=[] , action){
    switch (action.type){
        case UPDATE_CHECKBOX_VALUE:
            return action.key
        default:
            return state
    }
}

function toggleParametrs (state=[],action){
    switch (action.type){
        case TOGGLE_PARAMETR:
            return action.value
        default:
            return state
    }
}

export const reducer=
combineReducers({
    filterValue,
    searchBarValue,
    startPrice,
    endPrice,
    data,
    checkedLaws,
    toggleParametrs
})

  