import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
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
let tempCheckValues=[];

class Screen extends Component {
  state = {
    checkBoxChecked:[]
  }
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Screen3',
      title: 'Screen 3',
    });
  };
  
  onChangeSearchBar=() =>{

  }

  onChangeCheckbox=(id,value)=>{
    this.setState({
      checkBoxChecked: tempCheckValues
    })

    let tempCheckBoxChecked = this.state.checkBoxChecked;
    tempCheckBoxChecked[id] = !value;

    this.setState({
      checkBoxChecked: tempCheckBoxChecked
    })
  }


  render() {
    const checkbox=[
      {
        id:1,
        nameLaw:'№ 44-ФЗ'
      },
      {
        id:2,
        nameLaw:'№ 223-ФЗ'
      },
      {
        id:3,
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
        />
        <LawButtonContainer
          checkboxArray={checkbox}
          tempCheckValues={tempCheckValues}
          checkValues={this.state.checkBoxChecked}
          onPressCheckbox={this.onChangeCheckbox}
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
      </View>
    );
  }
}

export default Screen;