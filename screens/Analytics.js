import React, { Component } from 'react';
import { Text,StyleSheet,View } from 'react-native';
import { heightWindow } from '../constant';

class Screen extends Component {
  render() {
    return (
      <View style={style.relative}>
        <View style={style.www}>

        </View>
        <View style={style.absolute}>

        </View>
      </View>
    );
  }
}

const style=StyleSheet.create({
  relative:{
    flex: 1,
    alignItems: 'center',
  },
  absolute:{
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  www:{
    height:300,
    backgroundColor:'blue'
  }
})

export default Screen;