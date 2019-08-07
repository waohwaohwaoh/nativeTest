import {UPDATE_START_PRICE,UPDATE_END_PRICE,UPDATE_LOADING,UPDATE_DATA,UPDATE_CHECKBOX_VALUE,UPDATE_SEARCHBAR_VALUE,TOGGLE_PARAMETR} from '../actions/actionTypes'
import {combineReducers} from 'redux'

function searchBarValue(state='',action){
    switch(action.type){
        case UPDATE_SEARCHBAR_VALUE:
            return action.text
        default:
            return state
    }
}

function rangePrice(state={},action){
    switch(action.type){
        case UPDATE_START_PRICE:
            return {
                ...state,
                startPrice:action.startPrice
            }
        case UPDATE_END_PRICE:
            return {
                ...state,
                endPrice:action.endPrice
            }
        default:
            return state
    }
}

function loadingStatus(state=false, action){
    switch(action.type){
        case UPDATE_LOADING:
            return action.loading
        default:
            return state    
    }
}

function data(state={}, action){
     switch (action.type){
         case UPDATE_DATA:
             return action.data
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
    searchBarValue,
    rangePrice,
    loadingStatus,
    data,
    checkedLaws,
    toggleParametrs
})

  