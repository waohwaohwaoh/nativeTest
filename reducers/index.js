import {UPDATE_START_PRICE,UPDATE_END_PRICE,UPDATE_LOADING,UPDATE_DATA,ADD_CHECKBOX_VALUE,REMOVE_CHECKBOX_VALUE} from '../actions/actionTypes'
import {combineReducers} from 'redux'

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
             return{
                 data:action.data
             }
        default:
            return state
     }
}

function checkboxLaws (state=[] , action){
    switch (action.type){
        case ADD_CHECKBOX_VALUE:
            return[
                ...state,
                action.key
            ]
        case REMOVE_CHECKBOX_VALUE:
            return state.filter(item=>{
                return item!==action.key
            })
        default:
            return state
    }
}

export const reducer=
combineReducers({
    rangePrice,
    loadingStatus,
    data,
    checkboxLaws
})

  