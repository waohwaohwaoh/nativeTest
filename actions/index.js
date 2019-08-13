import {UPDATE_CHECKBOX_VALUE,UPDATE_END_PRICE,UPDATE_LOADING,UPDATE_START_PRICE,UPDATE_SEARCHBAR_VALUE,TOGGLE_PARAMETR,RECEIVE_PURCHASE,REQUEST_PURCHASE,FAILED_PURCHASE,UPDATE_FILTER_VALUE} from './actionTypes';
import { url } from '../constant';

export const updateSearchbarValue=(text)=>{
    return {
        type:UPDATE_SEARCHBAR_VALUE,
        text
    }
}

export const updateChangeFilter=(obj)=>(dispatch)=>{
    try{
        const key=(Object.keys(obj).join(''));
        const value=obj[key];
        dispatch(updateValueFilter(value,key));
        dispatch(getPurchase());      
    }
    catch(error){
        console.log(error.message);
    }
}

export const updateValueFilter=(value=null,key=null)=>{
    return{
        type:UPDATE_FILTER_VALUE,
        key,
        value
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

export const getPurchase=()=>async(dispatch,getStore)=>{
    const store=getStore();
    let {filterValue:{startPrice,endPrice,checkedLaws,searchBarValue}}=store;

    const priceFromGeneral=startPrice!=='0'?`priceFromGeneral=${startPrice.replace(' ','')}&`:'';
    const priceToGeneral=endPrice!=='0'?`priceToGeneral=${endPrice.replace(' ','')}&`:'';
    const laws=checkedLaws.map(item=>item+'=on&').join('');
    const searchString=searchBarValue!==''?`searchString=${searchBarValue}&`:'';

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
        const url1=`http://zakupki.gov.ru/api/mobile/proxy/epz/order/extendedsearch/results.html?${searchString}morphology=on&openMode=USE_DEFAULT_PARAMS&pageNumber=1&sortDirection=false&recordsPerPage=_10&showLotsInfoHidden=false&${laws}af=on&ca=on&pc=on&pa=on&${priceFromGeneral}${priceToGeneral}currencyIdGeneral=-1&regionDeleted=false&sortBy=UPDATE_DATE`
        console.log(url1);
        const response=await fetch(url1);
        const data=await response.json();
        console.log(data.total);
        if(data.total!==0){
            return receivePurchase({
                total:data.total,
                list:data.list
            })
        }
        else console.log('ne nashel')
        
    }
    catch(error){
        return failedPurchase(error)
    }

}


