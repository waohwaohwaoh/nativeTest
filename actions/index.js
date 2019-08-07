import {SEARCH_ZAKUP,ADD_CHECKBOX_VALUE,REMOVE_CHECKBOX_VALUE,UPDATE_DATA,UPDATE_END_PRICE,UPDATE_LOADING,UPDATE_START_PRICE} from './actionTypes';

export const searchZakup=(text)=>{
    return {
        type:SEARCH_ZAKUP,
        payload:text
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

export const addCheckboxValue=(value)=>{
    return {
        type:ADD_CHECKBOX_VALUE,
        key:value
    }
}

export const removeCheckboxValue=(value)=>{
    return {
        type:REMOVE_CHECKBOX_VALUE,
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