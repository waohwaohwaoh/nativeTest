import {UPDATE_CHECKBOX_VALUE,UPDATE_END_PRICE,UPDATE_LOADING,UPDATE_START_PRICE,UPDATE_SEARCHBAR_VALUE,TOGGLE_PARAMETR,RECEIVE_PURCHASE,REQUEST_PURCHASE,FAILED_PURCHASE} from './actionTypes';
import { url } from '../constant';

export const updateSearchbarValue=(text)=>{
    return {
        type:UPDATE_SEARCHBAR_VALUE,
        text
    }
}

export const updateRangePrice=(obj)=>(dispatch)=>{
    try{

        const{rangePrice,startPrice,endPrice}=(obj);
        if(startPrice!==rangePrice.startPrice){
            dispatch(updateStartPrice(startPrice));
            return dispatch(getPurchase(startPrice,rangePrice.endPrice))
        }
        else if(endPrice!==rangePrice.endPrice){
            dispatch(updateEndPrice(endPrice));
            return dispatch(getPurchase(rangePrice.startPrice,endPrice))
        }
        else return;      
    }
    catch(error){
        console.log(error.message);
    }
}

export const updateStartPrice=(startPrice=null)=>{
    return{
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

export const toggleParametrs=(value)=>{
    return{
        type:TOGGLE_PARAMETR,
        value
    }
}

export const getPurchase=(startPrice=null,endPrice=null)=>async(dispatch)=>{
    function receivePurchase(data){
        dispatch({type:RECEIVE_PURCHASE,data})
        return data
    }
    function requestPurchase(){
        dispatch({type:REQUEST_PURCHASE})
    }
    function failedPurchase(error){
        dispatch({type:FAILED_PURCHASE,error})
    }
    try{
        requestPurchase();
        const url1=`http://zakupki.gov.ru/api/mobile/proxy/epz/order/extendedsearch/results.html?morphology=on&openMode=USE_DEFAULT_PARAMS&pageNumber=1&sortDirection=false&recordsPerPage=_10&showLotsInfoHidden=false&af=on&ca=on&pc=on&pa=on&priceFromGeneral=${startPrice}&priceToGeneral=${endPrice}&currencyIdGeneral=-1&regionDeleted=false&sortBy=UPDATE_DATE`
        console.log(url1);
        const response=await fetch(url1);
        const data=await response.json();
        
        return receivePurchase({
            total:data.total,
            list:data.list
        })
    }
    catch(error){
        return failedPurchase(error)
    }

}


