import React, {Component} from 'react';
import {View,TouchableOpacity,Image,Text,StyleSheet,Button,TextInput,DatePickerAndroid} from 'react-native';
import {arrowRight, widthWindow,LIGHTGREY} from '../constant'
import DateTimePicker from 'react-native-modal-datetime-picker'

class SearchParametr extends Component{
    constructor(props){
        super(props)
    }
    openParametr=()=>{
        const {toggleParametrs,updateToggleParametrs,id}=this.props;
        const newToggleParametrs=toggleParametrs.indexOf(id)==!-1?toggleParametrs.filter(item=>item!==id):[...toggleParametrs,id];
        updateToggleParametrs(newToggleParametrs)
    }

    updateEndPrice=(endPrice)=>{
        const {updateValueFilter}=this.props;
        console.log(endPrice.trim()!=='');
        updateValueFilter({
            endPrice:endPrice.trim()!==''?endPrice:null
        });
    }

    updateStartPrice=(startPrice)=>{
        const {updateValueFilter}=this.props;
        updateValueFilter({
            startPrice:startPrice.trim()!==''?startPrice:null
        });
    }


    render(){
        const {parametr,expansion, expansionInput,expansionText,iconStyle,titleStyle,descriptionStyle,flexEnd,mainContainer}=styles;
        const {id,icon,title,startPrice,endPrice,toggleParametrs}=this.props;
        const open=toggleParametrs.indexOf(id)!==-1
        let description=''
        if(startPrice===null && endPrice===null){
            description='Любая';
        }
        else if(startPrice===null && endPrice!==null){
            description=`до ${endPrice}`
        }
        else if(startPrice!==null && endPrice===null){
            description=`от ${startPrice}`
        }
        else
            description=`от ${startPrice} до ${endPrice}`
        return(
            <View  style={mainContainer}>
                <TouchableOpacity onPress={this.openParametr} style={parametr}>
                    <Image source={icon} style={iconStyle}></Image>
                    <Text style={titleStyle}>{title}</Text>
                    {!open && 
                        <View style={flexEnd}>
                            <Text style={descriptionStyle}>{description}</Text>
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