import React, { Component } from 'react';
import {View,StyleSheet, Button,Alert } from 'react-native';
import {SearchBar, SearchButton, LawButtonContainer,SearchParametr,SearchParametrDate} from '../components';
import { widthWindow, searchBarImage,LIGHTGREY,laws,parametrPrice,parametrDate} from '../constant';
import {connect} from 'react-redux'
import {getPurchase,updateChangeFilter} from '../actions'
// import Realm from 'realm'


class Screen extends Component {
  
  click=()=>{
    console.log(this.props)
  }
  showPurchase=()=>{
    this.props.navigator.push({
      screen: 'Screen5',
      title: 'Поиск',
    });
  }
  
  componentDidMount(){
    this.props.getPurchase()
  }

  render() {
    
    const{updateValueFilter, filterValue:{startPrice,endPrice,checkedLaws,searchBarValue,startDate,endDate},data}=this.props
    const {container,containerParam}=styles;
    
    return (
      <View style={container}>
        { data.isError!==null && Alert.alert(`Ошибка: ${data.isError}`)}
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
          <SearchParametr
              key={parametrPrice.id}
              icon={parametrPrice.icon}
              title={parametrPrice.title}
              startPrice={startPrice}
              endPrice={endPrice}
              updateValueFilter={updateValueFilter}
          />
        </View>
        <View style={containerParam}>
          <SearchParametrDate
            key={parametrDate.id}
            icon={parametrDate.icon}
            title={parametrDate.title}
            startDate={startDate}
            endDate={endDate}
            updateValueFilter={updateValueFilter}
          />
        </View>
        <SearchButton
            title={JSON.stringify(data.list) == "[]"?'Поиск':`Показать закупки ${data.total}`}
            isFetching={data.isFetching}
            onPress={this.showPurchase}
        />
        <Button title='click' onPress={this.click}></Button>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  containerParam:{
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
    favourites:state.favourites
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    updateValueFilter:(value)=>dispatch(updateChangeFilter(value)),
    getPurchase:()=>dispatch(getPurchase())
  }
}



export default connect (mapStateToProps,mapDispatchToProps)(Screen);