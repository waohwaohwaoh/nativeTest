import React from 'react'
import {TouchableOpacity,Button, StyleSheet,View,Text,ActivityIndicator} from 'react-native'
import {widthWindow,BLUE,WHITE} from '../constant'

const SearchButton=({
    isLoading,
    title,
    updateLoading   
}
)=>{
    const {container,button,text}=styles;
    return(
        <View style={container}>
           <TouchableOpacity
               onPress={updateLoading}
               style={button}
            >
                {
                    isLoading?
                    <ActivityIndicator
                        size="large"
                        color={WHITE}
                    >

                    </ActivityIndicator>
                    :<Text style={text}>
                        {`Показать закупки ${title}`}
                    </Text>    
                }
                
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