import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,TouchableOpacity } from 'react-native'
import {widthWindow,star,starActive, LIGHTGREY, LIGHTBLUE, WHITE,stage} from '../constant'

class Purchase extends Component {
    render() {
        const {mainCointainer,purhaseType,descriptionText,header,flexEnd,priceStyle,preheader,lot,body,stageText,bottomText}=style;
        const {date,title,text,price,number}=this.props
        const flag=false;
        return (
            <View style={mainCointainer}>
                <View style={header}>
                    <Text style={purhaseType} numberOfLines={1}>{title}</Text>
                    <View style={flexEnd}>
                        <Text style={[descriptionText,{marginRight:19}]}>{date}</Text>
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
                    {'№'+number}
                    </Text>
                </View>
                <Text style={priceStyle}>
                      {price}
                </Text>
                <View style={body}>
                    <Image source={stage}/>
                    <Text style={stageText}>{'Подача Заявок'}</Text>
                    <View style={flexEnd}>
                        <Text style={lot}>
                            Лот 2222
                        </Text>
                    </View>
                </View>
                <Text style={bottomText} numberOfLines={3}>
                    {text}
                </Text>
            </View>
        )
    }
}

const style=StyleSheet.create({
    mainCointainer:{
        width:widthWindow-40,
        flexDirection:'column',
        marginLeft:20,
        marginVertical:20,
        paddingTop:19,
        paddingBottom:10,
        paddingHorizontal:20,
        borderRadius:8,
        backgroundColor:WHITE,
        height:210,
        shadowColor:LIGHTBLUE,
        shadowOffset: {
            width:10,
            height:10
        },
        shadowOpacity: 0.74,
        shadowRadius: 8,
        elevation:17
    },
    purhaseType:{
        fontSize:15,
        color:'#27344C',
        maxWidth:widthWindow/2.3
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
    priceStyle:{
        fontSize:22,
        color:LIGHTBLUE,
        paddingVertical:5
    },
    preheader:{
        flexDirection:'row'
    },
    lot:{
        height:24,
        paddingTop:5,
        paddingHorizontal:10,
        color:'#7F9AFB',
        borderColor:'#7F9AFB',
        borderWidth:2,
        fontSize:11,
        borderRadius:20,
        backgroundColor:WHITE
    },
    body:{
        flexDirection:'row',
        paddingVertical:5,
        alignItems:"center"
    },
    stageText:{
        paddingLeft:7,
        color:'#501AEA',
        fontSize:11,
        overflow:'hidden',
        maxWidth:widthWindow/3
    },
    bottomText:{
        fontSize:13,
        color:'#27344C',
        lineHeight:20,
        overflow:'hidden',
        maxHeight:65,
        marginTop:5
    } 

})

export {Purchase}
