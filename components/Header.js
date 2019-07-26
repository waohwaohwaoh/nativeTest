import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor:'#30d0fe',
    alignItems:"flex-end",
    height:116,
    justifyContent: 'center',
    paddingLeft:22,
    paddingTop:71,
    shadowColor:'#000',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.2,
    elevation:2
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '500',
    fontFamily:'AvenirNext-DemiBold'
  },
});
const Header = () => (
  <View style={styles.viewStyle}>
      <Text style={styles.text}>{'Зкшмуещы'}</Text>
  </View>
);

export default Header;