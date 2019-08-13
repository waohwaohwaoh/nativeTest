import React, {Component} from 'react';
import {View,TouchableOpacity,Image,Text,StyleSheet,Button,TextInput,DatePickerAndroid} from 'react-native';
import {arrowRight, widthWindow,LIGHTGREY} from '../constant';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { TextInputMask } from 'react-native-masked-text';

class SearchParametr extends Component{
    constructor(props){
        super(props)
        this.state={
            newStartPrice:'0',
            newEndPrice:'0'
        }
    }
    openParametr=()=>{
        const {toggleParametrs,updateToggleParametrs,id}=this.props;
        const newToggleParametrs=toggleParametrs.indexOf(id)==!-1?toggleParametrs.filter(item=>item!==id):[...toggleParametrs,id];
        updateToggleParametrs(newToggleParametrs)
    }

    updateStartPrice=(value)=>{
        this.setState({
            newStartPrice:value
        })
    }

    updateEndPrice=(value)=>{
        this.setState({
            newEndPrice:value
        })
    } 

    validationEndPrice=()=>{
        const {updateValueFilter,startPrice,endPrice}=this.props;
        let {newEndPrice}=this.state;
        newEndPrice=newEndPrice.replace(' ','')!==''?newEndPrice:'0';
        const value=parseInt(newEndPrice.replace(' ',''))>parseInt(startPrice.replace(' ','')) || startPrice==='0'?newEndPrice:null;
        console.log(value)
        if(value!==null){
            updateValueFilter({endPrice:value})
          }
        else{   
            alert('Конечная цена не может быть выше начальной');
            this.setState({
               newEndPrice:endPrice
            })
        }
    }

    validationStartPrice=()=>{
        const {updateValueFilter,endPrice,startPrice}=this.props;
        let {newStartPrice}=this.state;
        newStartPrice=newStartPrice.replace(' ','')!==''?newStartPrice:'0';
        let value=parseInt(newStartPrice.replace(' ',''))<parseInt(endPrice.replace(' ','')) || endPrice==='0'?newStartPrice:null;
        console.log(value);
        if(value!==null){
            updateValueFilter({startPrice:value})
        }
        else{
            alert('Начальная цена не может быть ниже конченой');
                this.setState({
                newStartPrice:startPrice
            })
        }
    }


    render(){
        const {parametr,expansion, expansionInput,expansionText,iconStyle,titleStyle,descriptionStyle,flexEnd,mainContainer}=styles;
        const {id,icon,title,startPrice,endPrice,toggleParametrs}=this.props;
        const {newStartPrice,newEndPrice}=this.state
        const open=toggleParametrs.indexOf(id)!==-1
        let description=''
        if(startPrice==='0' && endPrice==='0'){
            description='Любая';
        }
        else if(startPrice==='0' && endPrice!=='0'){
            description=`до ${endPrice}`
        }
        else if(startPrice!=='0' && endPrice==='0'){
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
                        <TextInputMask
                                type={'money'}
                                options={{
                                    precision: 0,
                                    delimiter: ' ',
                                    unit: '',
                                    suffixUnit: ''
                                  }}
                                // dont forget to set the "value" and "onChangeText" props
                                value={newStartPrice!=='0'?newStartPrice:''}
                                onChangeText={this.updateStartPrice}
                                onEndEditing={this.validationStartPrice}
                                placeholder='Любая'
                                style={expansionInput}
                                keyboardType="numeric"
                            />
                        <View style={flexEnd}>
                            <Text style={expansionText}>{'до'}</Text>
                            
                            <TextInputMask
                                type={'money'}
                                options={{
                                    precision: 0,
                                    delimiter: ' ',
                                    unit: '',
                                    suffixUnit: ''
                                }}
                                placeholder='Любая'
                                style={expansionInput}
                                value={newEndPrice!=='0'?newEndPrice:''}
                                onChangeText={this.updateEndPrice}
                                onEndEditing={this.validationEndPrice}
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