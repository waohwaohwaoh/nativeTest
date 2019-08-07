import {UPDATE_CHECKBOX_VALUE,UPDATE_DATA,UPDATE_END_PRICE,UPDATE_LOADING,UPDATE_START_PRICE,UPDATE_SEARCHBAR_VALUE,TOGGLE_PARAMETR} from './actionTypes';

export const updateSearchbarValue=(text)=>{
    return {
        type:UPDATE_SEARCHBAR_VALUE,
        text
    }
}
export const updateStartPrice=(startPrice=null)=>{
    return {
        type:UPDATE_START_PRICE,
        startPrice
    }
}

export const updateEndPrice=(endPrice=null)=>{
    return {
        type:UPDATE_END_PRICE,
        endPrice
    }
}

export const updateCheckboxValue=(value)=>{
    return {
        type:UPDATE_CHECKBOX_VALUE,
        key:value
    }
}

export const updateLoading=(value)=>{
    return {
        type:UPDATE_LOADING,
        loading:value
    }
}

export const updateData=(data)=>{
    return {
        type:UPDATE_DATA,
        data:data
    }
}

export const toggleParametrs=(value)=>{
    return{
        type:TOGGLE_PARAMETR,
        value
    }
}