import React, {Component} from 'react';
import {View,TouchableOpacity,Image,Text,StyleSheet,Button,TextInput} from 'react-native';
import {arrowRight, widthWindow,LIGHTGREY} from '../constant'
import PropTypes from 'prop-types'

class SearchParametr extends Component{
    constructor(props){
        super(props)
        this.state={
            open:false
        }
    }
    openParametr=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    updateStartPrice=(startPrice)=>{
        const {updateStartPrice}=this.props;
        startPrice.trim()!==''?updateStartPrice(startPrice):updateStartPrice(null);
    }
    updateEndPrice=(endPrice)=>{
        const {updateEndPrice}=this.props;
        endPrice.trim()!==''?updateEndPrice(endPrice):updateEndPrice(null);
    }
    render(){
        const {parametr,expansion, expansionInput,expansionText,iconStyle,titleStyle,descriptionStyle,flexEnd,mainContainer}=styles;
        const {icon,title,rangePrice:{startPrice,endPrice}}=this.props;
        const {open}=this.state;
        return(
            <View  style={mainContainer}>
                <TouchableOpacity onPress={this.openParametr} style={parametr}>
                    <Image source={icon} style={iconStyle}></Image>
                    <Text style={titleStyle}>{title}</Text>
                    {!open && 
                        <View style={flexEnd}>
                            <Text style={descriptionStyle}>{'Любой'}</Text>
                            <Image source={arrowRight}></Image>
                        </View>
                    }
                </TouchableOpacity>
                {open && 
                    <View style={expansion}>
                        <Text style={expansionText}>{'от'}</Text>
                        <TextInput
                            placeholder='Любая'
                            style={expansionInput}
                            value={startPrice!==null?startPrice:''}
                            onChangeText={this.updateStartPrice}
                            keyboardType="numeric"
                        />
                        <View style={flexEnd}>
                            <Text style={expansionText}>{'до'}</Text>
                            <TextInput
                                placeholder='Любая'
                                style={expansionInput}
                                value={endPrice!==null?endPrice:''}
                                onChangeText={this.updateEndPrice}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                }
            </View>    
        )
    }
}

const styles=StyleSheet.create({
    mainContainer:{
        borderBottomWidth: 1,
        borderColor: LIGHTGREY,
    },
    expansion:{
        height:40,
        flexDirection:"row",
        alignItems:"center",
    },
    expansionInput:{
        width:widthWindow/3
    },
    expansionText:{
        marginRight:1
    },
    parametr:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
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