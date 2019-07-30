import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {BLUE, LIGHTGREY, WHITE, acceptImage, acceptImageActive} from '../constant'

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
    container:{
        paddingLeft: 15,
        marginRight:5,
        flexDirection:'row',
        paddingRight: 5,
        height: 24,
        borderRadius: 20
    },
    textStyle:{
        fontSize: 11,
        fontFamily:'IBM Plex Sans',
        paddingLeft: 9,
        paddingTop:5,
        color:'#fff'
    },
    textStyleActive:{

    },
    imageStyle:{
        paddingTop: 9
    }
    
})

export {LawButton}