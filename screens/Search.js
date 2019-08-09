import React, { Component } from 'react';
import { Text, View,StyleSheet, Button,Alert } from 'react-native';
import {SearchBar,Container, SearchButton, LawButtonContainer,SearchParametr} from '../components';
import {heightWindow, widthWindow, searchBarImage,LIGHTGREY,laws,parametrs} from '../constant';
import {connect} from 'react-redux'
import {updateStartPrice,updateEndPrice,updateCheckboxValue,updateSearchbarValue,toggleParametrs,getPurchase,updateRangePrice} from '../actions'


class Screen extends Component {
  
  click=()=>{
    console.log(this.props)
  }
  

  render() {
    
    const{rangePrice,checkedLaws,data,toggleParametrs,searchBarValue,updateToggleParametrs,updateStartPrice,updateRangePrice,updateCheckboxValue,updateEndPrice,getPurchase,updateSearchbarValue}=this.props
    const {container,containerParam}=styles;
    return (
      <View style={container}>
        { data.isError!==null && Alert.alert(`Ошибка: ${data.isError.name}`)}
        <SearchBar
          iconLeft={searchBarImage}
          placeholder="Ключевое слово"
          onChangeText={updateSearchbarValue}
          placeholderColor='#6F7C98'
          value={searchBarValue}
        />
        <LawButtonContainer
          checkedLaws={checkedLaws}
          updateCheckboxValue={updateCheckboxValue}
          laws={laws}
        />
        <View style={containerParam}>
          {
            parametrs.map(item=>{
              const {id, icon, title}=item;
              return(
                <SearchParametr
                  key={id}
                  id={id}
                  icon={icon}
                  title={title}
                  rangePrice={rangePrice}
                  updateRangePrice={updateRangePrice}
                  updateStartPrice={updateStartPrice}
                  updateEndPrice={updateEndPrice}
                  toggleParametrs={toggleParametrs}
                  updateToggleParametrs={updateToggleParametrs}
                />
              )
            })
          }
        </View>
        <SearchButton
            title={JSON.stringify(data.list) == "[]"?'Поиск':`Показать закупки ${data.total}`}
            isFetching={data.isFetching}
            getPurchase={getPurchase}
        />
        <Button title='click' onPress={this.click}></Button>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  containerParam:{
    marginTop: 35,
    borderTopWidth: 1,
    borderColor:LIGHTGREY,
    width: widthWindow - 40,
    marginLeft:20, 
  },
  container:{
    flexDirection:'column'
  }
})

const mapStateToProps=state=>{
  return{
    searchBarValue:state.searchBarValue,
    rangePrice:state.rangePrice,
    checkedLaws:state.checkedLaws,
    data:state.data,
    toggleParametrs:state.toggleParametrs
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    updateStartPrice:(startPrice)=>dispatch(updateStartPrice(startPrice)),
    updateEndPrice:(endPrice)=>dispatch(updateEndPrice(endPrice)),
    updateCheckboxValue:(value)=>dispatch(updateCheckboxValue(value)),
    updateRangePrice:(startPrice,endPrice)=>dispatch(updateRangePrice(startPrice,endPrice)),
    getPurchase:(startPrice,endPrice)=>dispatch(getPurchase(startPrice,endPrice)),
    updateSearchbarValue:(value)=>dispatch(updateSearchbarValue(value)),
    updateToggleParametrs:(value)=>dispatch(toggleParametrs(value))
  }
}



export default connect (mapStateToProps,mapDispatchToProps)(Screen);