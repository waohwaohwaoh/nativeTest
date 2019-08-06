import React, { Component } from 'react';
import { Text, View,StyleSheet, Button } from 'react-native';
import {SearchBar,Container, LawButton, LawButtonContainer,SearchParametr} from '../components';
import {heightWindow, widthWindow, searchBarImage,LIGHTGREY,laws,parametrs} from '../constant';



const styles=StyleSheet.create({
  container:{
    marginTop: 35,
    borderTopWidth: 1,
    borderColor:LIGHTGREY,
    width: widthWindow - 40,
    marginLeft:20, 
  }
})

class Screen extends Component {
  
  state = {
    checkedLaws:[],
    searchBarValue:'',
    startPrice:null,
    endPrice:null
  }
  
  updatePriceValue=(startPrice,endPrice)=>{
    this.setState({
      rangePrice:{
        startPrice,
        endPrice
      }
    })
  }

  onChangeSearchBar=(value) =>{
    this.setState({
      searchBarValue:value
    })
  }

  updateCheckboxValue=(value)=>{
    this.setState({
      checkedLaws:value
    })
  }

  render() {
    const {checkedLaws,searchBarValue,rangePrice}=this.state;
    const {container}=styles;
    return (
      <View>
        <SearchBar
          iconLeft={searchBarImage}
          placeholder="Ключевое слово"
          onChangeText={this.onChangeSearchBar}
          placeholderColor='#6F7C98'
          value={searchBarValue}
        />
        <LawButtonContainer
          checkedLaws={checkedLaws}
          updateCheckboxValue={this.updateCheckboxValue}
          laws={laws}
        />
        <View style={container}>
          {
            parametrs.map(item=>{
              const {id, icon, title}=item;
              return(
                <SearchParametr
                  key={id}
                  icon={icon}
                  title={title}
                  rangePrice={rangePrice}
                  updatePriceValue={this.updatePriceValue}
                />
              )
            })
          }
        </View>
      </View>
    );
  }
}

export default Screen;