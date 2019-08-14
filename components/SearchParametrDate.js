import React, { Component } from 'react'
import { View,TouchableOpacity,Image,Text,StyleSheet} from 'react-native'
import {arrowRight, widthWindow,LIGHTGREY,close} from '../constant';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { TextInputMask } from 'react-native-masked-text';

class SearchParametrDate extends Component {
    state={
        open:false,
        isStartDatePicker:false,
        isEndDatePicker:false
    }
    openParametr=()=>{
        this.setState({
            open:!this.state.open
        })
     }

    toggleStartDatePicker = () => {
        this.setState({ isStartDatePicker: !this.state.isStartDatePicker});
    };
    toggleEndDatePicker = () => {
        this.setState({ isEndDatePicker: !this.state.isEndDatePicker});
    };
      
    deleteValueDate=(dateType)=>{
        const {updateValueFilter}=this.props;
        updateValueFilter({
            [dateType]:null
        })
    }

    updateStartDate=(data)=>{
        const {updateValueFilter,endDate}=this.props;
        const startDate=data.toLocaleString().split(',')[0].replace(/[.]/g,'.');
        if(endDate!==null){
            if(new Date(startDate.split('.').reverse().join('-')).getTime()<=new Date(endDate.split('.').reverse().join('-')).getTime()){
                updateValueFilter({
                    startDate
                })
            }
            else{
                alert ('Дата начала меньше даты окончания')
            }
        }
        else{
            updateValueFilter({
                startDate
            })
        }
        this.toggleStartDatePicker();
    }

    updateEndDate=(data)=>{
        const {updateValueFilter,startDate}=this.props;
        const endDate=data.toLocaleString().split(',')[0].replace(/[.]/g,'.');
        if(startDate!==null){
            if(new Date(startDate.split('.').reverse().join('-')).getTime()<=new Date(endDate.split('.').reverse().join('-')).getTime()){
                updateValueFilter({
                    endDate
                })
            }
            else{
                alert ('Дата окончания меньше даты начала')
            }
        }
        else{
            updateValueFilter({
                endDate
            })
        }
        this.toggleEndDatePicker();
    } 


    render() {
        const {parametr,expansion, expansionInput,expansionText,iconStyle,titleStyle,descriptionStyle,flexEnd,mainContainer,closeButton,containerInput}=styles;
        const {icon,title,startDate,endDate}=this.props;
        const {open,isStartDatePicker,isEndDatePicker}=this.state;
        let description='';
        if(startDate===null && endDate===null){
            description='Любая';
        }
        else if(startDate===null && endDate!==null){
            description=`до ${endDate}`
        }
        else if(startDate!==null && endDate===null){
            description=`от ${startDate}`
        }
        else
            description=`от ${startDate} до ${endDate}`

        return (
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
                    <View style={containerInput}>
                        <Text
                            style={startDate!==null?[expansionInput,{color:'black'}]:expansionInput}
                            onPress={this.toggleStartDatePicker}
                        >{startDate!==null?startDate:'Любая'}</Text>
                        <TouchableOpacity style={closeButton} onPress={()=>{this.deleteValueDate('startDate')}}>
                            <Image source={close}></Image>
                        </TouchableOpacity> 
                    </View>
                    <DateTimePicker
                        isVisible={isStartDatePicker}
                        onConfirm={this.updateStartDate}
                        onCancel={this.toggleStartDatePicker}
                    />                            
                    <View style={flexEnd}>
                        <Text style={expansionText}>{'до'}</Text>
                        <View style={containerInput}>
                            <Text
                                style={endDate!==null?[expansionInput,{color:'black'}]:expansionInput}
                                onPress={this.toggleEndDatePicker}
                            >{endDate!==null?endDate:'Любая'}</Text>
                            <TouchableOpacity style={closeButton} onPress={()=>{this.deleteValueDate('endDate')}}>
                                <Image source={close}></Image>
                            </TouchableOpacity>
                        </View>
                        <DateTimePicker
                            isVisible={isEndDatePicker}
                            onConfirm={this.updateEndDate}
                            onCancel={this.toggleEndDatePicker}
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
    containerInput:{
        flexDirection:"row",
        alignItems:"center",
    },
    expansionInput:{
        borderBottomWidth:2,
        width:widthWindow/3-5,
        borderBottomColor:'#c7c7c7',
        color:'#a8a8a8',
        paddingBottom:2
    },
    expansionText:{
        marginRight:3
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
    },
    closeButton:{
        position:"absolute",
        right:0
    }
})


export {SearchParametrDate}