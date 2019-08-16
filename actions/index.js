import {UPDATE_CHECKBOX_VALUE,UPDATE_END_PRICE,UPDATE_START_PRICE,RECEIVE_PURCHASE,REQUEST_PURCHASE,FAILED_PURCHASE,UPDATE_FILTER_VALUE,UPDATE_PAGE_NUMBER} from './actionTypes';


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

export const getPurchase=()=>async(dispatch,getStore)=>{
    const store=getStore();
    let {filterValue:{startPrice,endPrice,checkedLaws,searchBarValue,startDate,endDate}}=store;

    const priceFromGeneral=startPrice!=='0'?`priceFromGeneral=${startPrice.replace(' ','')}&`:'';
    const priceToGeneral=endPrice!=='0'?`priceToGeneral=${endPrice.replace(' ','')}&`:'';
    const laws=checkedLaws.map(item=>item+'=on&').join('');
    const searchString=searchBarValue!==''?`searchString=${searchBarValue}&`:'';
    const publishDateFrom=startDate!==null?`publishDateFrom=${startDate}&`:'';
    const publishDateTo=endDate!==null?`publishDateTo=${endDate}&`:''
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
        const url1=`http://zakupki.gov.ru/api/mobile/proxy/epz/order/extendedsearch/results.html?${searchString}morphology=on&openMode=USE_DEFAULT_PARAMS&pageNumber=1&sortDirection=false&recordsPerPage=_10&showLotsInfoHidden=false&${laws}af=on&ca=on&pc=on&pa=on&${priceFromGeneral}${priceToGeneral}currencyIdGeneral=-1&regionDeleted=false&${publishDateFrom}${publishDateTo}sortBy=UPDATE_DATE`
        const response=await fetch(url1);
        const data=await response.json();
        console.log(data);
        if(data.total!==0){
            return receivePurchase({
                total:data.total,
                list:data.list
            })
        }
        else throw new Error();
        
    }
    catch(error){
        return failedPurchase(error)
    }

}


