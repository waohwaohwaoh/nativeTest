import React, {Component} from 'react';
import {StyleSheet,View,TouchableOpacity,Image,Text} from 'react-native';
import {LawButton} from '../components';
import {widthWindow,WHITE,BLUE,LIGHTGREY,acceptImage, acceptImageActive} from '../constant';
import PropTypes from 'prop-types'

class LawButtonContainer extends Component{
    constructor(props){
      super(props);
    }
    static propTypes={
      laws:PropTypes.array.isRequired,
      checkedLaws: PropTypes.array.isRequired,
      updateCheckboxValue: PropTypes.func.isRequired
    }
    onPressCheckbox=(key)=>{
        const {checkedLaws,updateCheckboxValue}=this.props;
        const newCheckedLaws=checkedLaws.indexOf(key)!==-1?checkedLaws.filter(item=>item!==key):[...checkedLaws,key]
        updateCheckboxValue( {checkedLaws:newCheckedLaws});
    }

    render(){
      const {mainContainer,button,imageStyle,textStyle}=styles;
      const {laws,checkedLaws}=this.props;
      return(
        <View style={mainContainer}>
             {
                laws.map(item=>{
                
                const {key,label}=item;        
                return(
                    <TouchableOpacity style={[button,{backgroundColor:checkedLaws.indexOf(key)!==-1?BLUE:WHITE}]} onPress={()=>this.onPressCheckbox(key)} key={key}>
                      <View style={imageStyle}>
                        <Image
                          source={checkedLaws.indexOf(key)!==-1?acceptImage:acceptImageActive}>
                        </Image>
                      </View>
                      <Text style={[textStyle,{color:checkedLaws.indexOf(key)!==-1?WHITE:LIGHTGREY}]}>{label} </Text>
                    </TouchableOpacity>  
                     )
                })
             }
        </View>
      )
    }
}

const styles=StyleSheet.create({
    mainContainer:{
      flexDirection:'row',
      justifyContent:'flex-start',
      marginLeft: 15,
      width: widthWindow - 30,
      marginTop: 23,
      marginBottom:35
    },
    button:{
      paddingLeft: 15,
      marginRight:5,
      flexDirection:'row',
      paddingRight: 5,
      height: 24,
      borderRadius: 20
  },
  textStyle:{
      fontSize: 11,
      fontFamily:'IBM Plex Sans',
      paddingLeft: 9,
      paddingTop:5,
      color:'#fff'
  },
  imageStyle:{
      paddingTop: 9
  }
})

export {LawButtonContainer}