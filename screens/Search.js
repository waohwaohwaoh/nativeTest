import React, { Component } from 'react';
import { Text, View,StyleSheet, Button } from 'react-native';
import {SearchBar,Container, SearchButton, LawButtonContainer,SearchParametr} from '../components';
import {heightWindow, widthWindow, searchBarImage,LIGHTGREY,laws,parametrs} from '../constant';
import {searchZakup} from '../actions/index'
import {connect} from 'react-redux'
import {updateStartPrice,updateEndPrice,updateCheckboxValue,updateLoading,updateData,updateSearchbarValue,toggleParametrs} from '../actions'


class Screen extends Component {
  
  click=()=>{
    console.log(this.props)
    
  }

  render() {
    
    const{rangePrice,checkedLaws,data,loadingStatus,toggleParametrs,searchBarValue,updateToggleParametrs,updateStartPrice,updateCheckboxValue,updateEndPrice,updateLoading,updateData,updateSearchbarValue}=this.props
    const {container,containerParam}=styles;
    return (
      <View style={container}>
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
                  updateStartPrice={updateStartPrice}
                  updateEndPrice={updateEndPrice}
                  openParametrs={toggleParametrs}
                  updateToggleParametrs={updateToggleParametrs}
                />
              )
            })
          }
        </View>
        <SearchButton
            title={JSON.stringify(data) == "{}"?'Поиск':`Показать закупки ${data.total}`}
            isLoading={loadingStatus}
            updateLoading={updateLoading}
            updateData={updateData}
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
    loadingStatus:state.loadingStatus,
    data:state.data,
    toggleParametrs:state.toggleParametrs
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    updateStartPrice:(startPrice)=>dispatch(updateStartPrice(startPrice)),
    updateEndPrice:(endPrice)=>dispatch(updateEndPrice(endPrice)),
    updateCheckboxValue:(value)=>dispatch(updateCheckboxValue(value)),
    updateLoading:(value)=>dispatch(updateLoading(value)),
    updateData:(value)=>dispatch(updateData(value)),
    updateSearchbarValue:(value)=>dispatch(updateSearchbarValue(value)),
    updateToggleParametrs:(value)=>dispatch(toggleParametrs(value))
  }
}



export default connect (mapStateToProps,mapDispatchToProps)(Screen);