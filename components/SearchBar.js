import React from "react"
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import {heightWindow, widthWindow, LIGHTBLUE, WHITE, BLACK} from '../constant';

const SearchBar =({
    iconLeft,
    placeholder,
    placeholderColor,
    value,
    onChangeText
}) => {
    const {sub, iconLeftStyle, inputStyle}=styles
    return(
        <View style={sub}>
          <Image 
            source={iconLeft}
            style={iconLeftStyle}
          />  
          <TextInput
            style={inputStyle}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
            underlineColorAndroid='transparent'
          />
        </View>
    )
}


const styles= StyleSheet.create({
    sub: {
        justifyContent: 'flex-start',
        marginTop: 12,
        alignItems: 'center',
        flexDirection: 'row',
        width: widthWindow - 30,
        marginLeft: 15,
        backgroundColor: WHITE,
        height: 50,
        borderRadius: 50,
        shadowColor:LIGHTBLUE,
        shadowOffset: {
            width:10,
            height:10
        },
        shadowOpacity: 0.74,
        shadowRadius: 8,
        elevation:11
    },
    iconLeftStyle: {
        marginLeft: 20
      },
    inputStyle: {
        fontSize: 15,
        height: 40,
        color:BLACK,
        width: widthWindow - 120,
        marginTop: 15,
        marginLeft:10,
        marginBottom: 10,
        backgroundColor: WHITE,
        borderWidth:0,
    },
})

export {SearchBar}