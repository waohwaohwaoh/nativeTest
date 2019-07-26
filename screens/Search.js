import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Container from '../components/Container';
import Header from '../components/Header';

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
        <Header/>
        <Container
          backgroundColor="#F44336"
          onPress={this.handlePress}
        />

      </View>
      
      
    );
  }
}

export default Screen;