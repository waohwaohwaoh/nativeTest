import React, {Component} from 'react'
import {TouchableOpacity,Button, StyleSheet,View,Text,ActivityIndicator} from 'react-native'
import {widthWindow,BLUE,WHITE,url} from '../constant'

class SearchButton extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {container,button,text}=styles;
        const{isFetching,title,onPress}=this.props;
        return(
        <View style={container}>
           <TouchableOpacity
               style={button}
               onPress={onPress}
            >
                {
                    isFetching?
                    <ActivityIndicator
                        size="large"
                        color={WHITE}
                    >

                    </ActivityIndicator>
                    :<Text style={text}>
                        {title}
                    </Text>    
                }
                
            </TouchableOpacity>
        </View>
        )
    }
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