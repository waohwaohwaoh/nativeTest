import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {BLUE, LIGHTGREY, WHITE, acceptImage, acceptImageActive} from '../constant'
import PropTypes from 'prop-types'
 
const LawButton= ({
    checked,
    nameLaw,
    onPressCheckbox
})=>{
    const {container, textStyle, imageStyle}=styles;
    return(
        <TouchableOpacity style={[container,{backgroundColor:checked?BLUE:WHITE}]} onPress={onPressCheckbox}>
            <View style={imageStyle}>
                <Image
                    source={checked?acceptImage:acceptImageActive}>
                </Image>
            </View>
            <Text style={[textStyle,{color:checked?WHITE:LIGHTGREY}]}>{nameLaw} </Text>
        </TouchableOpacity> 
        
    )
}


const styles= StyleSheet.create({
   
    
})

export {LawButton}