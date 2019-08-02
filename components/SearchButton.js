import React from 'react'
import {TouchableOpacity,Button, StyleSheet,View,Text} from 'react-native'
import {widthWindow,BLUE,WHITE} from '../constant'

const SearchButton=({
    onPress,
    title   
}
)=>{
    const {container,button,text}=styles;
    return(
        <View style={container}>
           <TouchableOpacity
               onPress={onPress}
               style={button}
            >
                <Text style={text}>
                    {`Показать закупки ${title}`}
                </Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:40
    },
    button:{
        width:widthWindow*(7/9),
        height: 50,
        backgroundColor:BLUE,
        borderRadius:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:'IBM Plex Sans',
        fontSize:15,
        color:WHITE
    }
})

export {SearchButton}