import React, { Component } from 'react';
import { Text, View,StyleSheet, Button } from 'react-native';
import {SearchBar,Container, SearchButton, LawButtonContainer,SearchParametr} from '../components';
import {heightWindow, widthWindow, searchBarImage,LIGHTGREY,laws,parametrs} from '../constant';


class Screen extends Component {
  
  state = {
    checkedLaws:[],
    searchBarValue:'',
    rangePrice:{
      startPrice:null,
      endPrice:null
    }
  }
  
  updateStartPrice=(value)=>{
    this.setState({
      rangePrice:{
        ...this.state.rangePrice,
        startPrice:value
      }
    })
  }
  updateEndPrice=(value)=>{
    this.setState({
      rangePrice:{
        ...this.state.rangePrice,
        endPrice:value
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
    const {container,containerParam}=styles;
    return (
      <View style={container}>
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
        <View style={containerParam}>
          {
            parametrs.map(item=>{
              const {id, icon, title}=item;
              return(
                <SearchParametr
                  key={id}
                  icon={icon}
                  title={title}
                  rangePrice={rangePrice}
                  updateStartPrice={this.updateStartPrice}
                  updateEndPrice={this.updateEndPrice}
                />
              )
            })
          }
        </View>
        <SearchButton
            title={""}
        />
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




export default Screen;