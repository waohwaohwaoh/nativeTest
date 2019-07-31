import React from 'react';
import {View,TouchableOpacity,Image,Text,StyleSheet} from 'react-native';
import {arrowRight, widthWindow,LIGHTGREY} from '../constant'
import PropTypes from 'prop-types'



const SearchParametr = ({
    icon,
    title
})=>{
    const {container,iconStyle,titleStyle,descriptionStyle,flexEnd}=styles;
    return(
        <TouchableOpacity style={container}>
            <Image source={icon} style={iconStyle}></Image>
            <Text style={titleStyle}>{title}</Text>
            <View style={flexEnd}>
                <Text style={descriptionStyle}>{'Любой'}</Text>
                <Image source={arrowRight}></Image>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottomWidth: 1,
        borderColor: LIGHTGREY,
        height: 60 
    },
    flexEnd:{
        marginLeft: 'auto',
        flexDirection:'row',
        alignItems:'center'
    },
    iconStyle:{

    },
    titleStyle:{
        marginLeft:11
    },
    descriptionStyle:{
        marginRight:10
    }
})


export {SearchParametr}