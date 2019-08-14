import React, {Component} from 'react';
import {View,TouchableOpacity,Image,Text,StyleSheet} from 'react-native';
import {arrowRight, widthWindow,close} from '../constant';
import { TextInputMask } from 'react-native-masked-text';

class SearchParametr extends Component{
    constructor(props){
        super(props)
        this.state={
            newStartPrice:'0',
            newEndPrice:'0',
            open:false
        }

    }
    openParametr=()=>{
       this.setState({
           open:!this.state.open
       })
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
        if(value!==null){
            updateValueFilter({endPrice:value})
          }
        else{   
            alert('Начальная цена не может быть выше конечной');
            this.setState({
               newEndPrice:endPrice
            })
        }
    }

    deleteValuePrice=(typePrice)=>{
        const {updateValueFilter}=this.props;
        updateValueFilter({
            [typePrice]:'0'
        })
        this.setState({
            ['new'+typePrice[0].toUpperCase()+typePrice.slice(1)]:'0'
        })
    }

    validationStartPrice=()=>{
        const {updateValueFilter,endPrice,startPrice}=this.props;
        let {newStartPrice}=this.state;
        newStartPrice=newStartPrice.replace(' ','')!==''?newStartPrice:'0';
        const value=parseInt(newStartPrice.replace(' ',''))<parseInt(endPrice.replace(' ','')) || endPrice==='0'?newStartPrice:null;
        if(value!==null){
            updateValueFilter({startPrice:value})
        }
        else{
            alert('Конечная цена не может быть ниже начальной');
                this.setState({
                newStartPrice:startPrice
            })
        }
    }


    render(){
        const {parametr,expansion, expansionInput,expansionText,iconStyle,titleStyle,descriptionStyle,flexEnd,containerInput,closeButton}=styles;
        const {icon,title,startPrice,endPrice}=this.props;
        const {newStartPrice,newEndPrice,open}=this.state
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
            <View>
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
                        <View style={containerInput}>
                            <TextInputMask
                                    type={'money'}
                                    options={{
                                        precision: 0,
                                        delimiter: ' ',
                                        unit: '',
                                        suffixUnit: ''
                                    }}
                                    value={newStartPrice!=='0'?newStartPrice:''}
                                    onChangeText={this.updateStartPrice}
                                    onEndEditing={this.validationStartPrice}
                                    placeholder='Любая'
                                    style={expansionInput}
                                    keyboardType="numeric"
                            />
                            <TouchableOpacity style={closeButton} onPress={()=>{this.deleteValuePrice('startPrice')}}>
                                <Image source={close}></Image>
                            </TouchableOpacity> 
                        </View>
                        
                        <View style={flexEnd}>
                            <Text style={expansionText}>{'до'}</Text>
                            <View style={containerInput}>
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
                                <TouchableOpacity style={closeButton} onPress={()=>{this.deleteValuePrice('endPrice')}}>
                                    <Image source={close}></Image>
                                </TouchableOpacity> 
                            </View>
                            
                        </View>
                    </View>
                }
            </View>    
        )
    }
}

const styles=StyleSheet.create({

    expansion:{
        height:40,
        flexDirection:"row",
        alignItems:"center",
    },
    containerInput:{
        flexDirection:"row",
        alignItems:"center",
    },
    closeButton:{
        position:"absolute",
        right:5
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