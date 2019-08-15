import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,TouchableOpacity } from 'react-native'
import {widthWindow,star,starActive, LIGHTGREY, LIGHTBLUE} from '../constant'

class Purchase extends Component {
    render() {
        const {mainCointainer,stageText,descriptionText,header,flexEnd,price,preheader}=style;
        const flag=false;
        return (
            <View style={mainCointainer}>
                <View style={header}>
                    <Text style={stageText}>Электронный аукцион</Text>
                    <View style={flexEnd}>
                        <Text style={[descriptionText,{marginRight:19}]}>18.03.2018</Text>
                        <TouchableOpacity>
                            <Image source={flag?star:starActive}></Image>
                        </TouchableOpacity>
                    </View>                    
                </View>
                <View style={preheader}>
                    <Text style={descriptionText}>
                    {'44-ФЗ'}
                    </Text>
                    <Text style={[descriptionText,{marginLeft:10}]}>
                    {'№0138000066170000701'}
                    </Text>
                </View>
                <Text style={price}>
                      {'487 000 258 358,00'}
                </Text>
                <View>

                </View>
            </View>
        )
    }
}

const style=StyleSheet.create({
    mainCointainer:{
        width:widthWindow-40,
        flexDirection:'column',
        marginLeft:20,
        paddingTop:19,
        paddingBottom:10,
        paddingHorizontal:20,
        borderRadius:8,
        shadowColor:LIGHTBLUE,
        shadowOffset: {
            width:5,
            height:5
        },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation:11
    },
    stageText:{
        fontSize:15,
        color:'#27344C'
    },
    descriptionText:{
        fontSize:15,
        color:LIGHTGREY
    },
    header:{
        flexDirection:"row"
    },
    flexEnd:{
        marginLeft: 'auto',
        flexDirection:'row',
        alignItems:'center'
    },
    price:{
        fontSize:22,
        color:LIGHTBLUE
    },
    preheader:{
        flexDirection:'row'
    } 

})

export {Purchase}
