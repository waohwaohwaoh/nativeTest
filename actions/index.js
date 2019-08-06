import {SEARCH_ZAKUP,UPDATE_CHECKBOX_VALUE,UPDATE_DATA,UPDATE_END_PRICE,UPDATE_LOADING,UPDATE_START_PRICE} from './actionTypes';

export const searchZakup=(text)=>{
    return {
        type:SEARCH_ZAKUP,
        payload:text
    }
}
export const updateStartPrice=(startPrice)=>{
    return {
        type:UPDATE_START_PRICE,
        startPrice
    }
}

export const updateEndPrice=(endPrice)=>{
    return {
        type:UPDATE_END_PRICE,
        endPrice
    }
}

export const updateCheckboxValue=(value)=>{
    return {
        type:UPDATE_CHECKBOX_VALUE,
        checkedLaws:value
    }
}

export const updateLoading=(value)=>{
    return {
        type:UPDATE_LOADING,
        isLoading:value
    }
}

export const updateData=(data)=>{
    return {
        type:UPDATE_DATA,
        data:data
    }
}