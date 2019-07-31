import React, { Component } from 'react';
import { Text, View,StyleSheet, Button } from 'react-native';
import {SearchBar,Container, LawButton, LawButtonContainer,SearchParametr} from '../components';
import {heightWindow, widthWindow, searchBarImage,LIGHTGREY} from '../constant';
 '../constant';


const styles=StyleSheet.create({
  container:{
    marginTop: 35,
    borderTopWidth: 1,
    borderColor:LIGHTGREY,
    width: widthWindow - 40,
    marginLeft:20, 
  }
})
// let tempCheckValues=[];

class Screen extends Component {
  state = {
    checkBoxChecked:[],
    searchBarValue:''
  }
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Screen3',
      title: 'Screen 3',
    });
  };
  
  onChangeSearchBar=(value) =>{
    this.setState({
      searchBarValue:value
    })
  }

  updateCheckboxValue=(value)=>{
    this.setState({
      checkBoxChecked:value
    })
  }
  pressMe=()=>{
    alert(this.state.checkBoxChecked);
  }
  render() {
    const {searchBarValue}=this.state;
    const checkbox=[
      {
        id:0,
        nameLaw:'№ 44-ФЗ'
      },
      {
        id:1,
        nameLaw:'№ 223-ФЗ'
      },
      {
        id:2,
        nameLaw:'ПП РФ 615'
      }
    ];
    const parametrs=[
      {
        id:1,
        icon:require('../images/price_parametr.png'),
        title:'Цена'
      },
      {
        id:2,
        icon:require('../images/price_parametr.png'),
        title:'Цена'
      }
    ];
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
          checkBoxArray={checkbox}
          updateCheckboxValue={this.updateCheckboxValue}
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
                />
              )
            })
          }
        </View>
        <Button title="Click" onPress={this.pressMe}></Button>
      </View>
    );
  }
}

export default Screen;