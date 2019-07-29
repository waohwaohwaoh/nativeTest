import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Header,Container} from '../components';
import {heightWindow, widthWindow} from '../constant';

class Screen extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Screen3',
      title: 'Screen 3',
    });
  };

  render() {
    return (
      <View>
        <Header title={heightWindow}/>
        <Container
          backgroundColor="#F44336"
          onPress={this.handlePress}
        />

      </View>
      
      
    );
  }
}

export default Screen;