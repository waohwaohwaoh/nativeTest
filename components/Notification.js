import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LIGHTGREY, WHITE,widthWindow } from '../constant';

class Notification extends Component {
    render() {
        const {isVisible,title}=this.props
        const {container,text}=style;
        return (
            isVisible &&
                <View style={container}>
                    <Text style={text}> {title} </Text>
                </View>            
            
        )
    }
}

const style=StyleSheet.create({
    container:{
        height:50,
        backgroundColor:LIGHTGREY,
        width:widthWindow,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    text:{
        color:WHITE,
        fontSize:13
    }
})



export {Notification}