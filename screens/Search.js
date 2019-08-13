import React, { Component } from 'react';
import { Text, View,StyleSheet, Button,Alert } from 'react-native';
import {SearchBar,Container, SearchButton, LawButtonContainer,SearchParametr} from '../components';
import {heightWindow, widthWindow, searchBarImage,LIGHTGREY,laws,parametrs} from '../constant';
import {connect} from 'react-redux'
import {toggleParametrs,getPurchase,updateChangeFilter} from '../actions'


class Screen extends Component {
  
  click=()=>{
    console.log(this.props)
  }
  

  render() {
    
    const{updateValueFilter, filterValue:{startPrice,endPrice,newStartPrice,newEndPrice,checkedLaws,searchBarValue},data,toggleParametrs,updateToggleParametrs,getPurchase}=this.props
    const {container,containerParam}=styles;
    return (
      <View style={container}>
        { data.isError!==null && Alert.alert(`Ошибка: ${data.isError.name}`)}
        <SearchBar
          iconLeft={searchBarImage}
          placeholder="Ключевое слово"
          onChangeText={updateValueFilter}
          placeholderColor='#6F7C98'
          value={searchBarValue}
        />
        <LawButtonContainer
          checkedLaws={checkedLaws}
          updateCheckboxValue={updateValueFilter}
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
                  startPrice={startPrice}
                  endPrice={endPrice}
                  newstartPrice={newStartPrice}
                  newEndPrice={newEndPrice}
                  toggleParametrs={toggleParametrs}
                  updateToggleParametrs={updateToggleParametrs}
                  updateValueFilter={updateValueFilter}
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
    filterValue:state.filterValue,
    data:state.data,
    toggleParametrs:state.toggleParametrs
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    updateValueFilter:(value)=>dispatch(updateChangeFilter(value)),
    getPurchase:()=>dispatch(getPurchase()),
    updateToggleParametrs:(value)=>dispatch(toggleParametrs(value))
  }
}



export default connect (mapStateToProps,mapDispatchToProps)(Screen);