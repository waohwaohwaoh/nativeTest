import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {LawButton} from '../components';
import {widthWindow} from '../constant';
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
        updateCheckboxValue( newCheckedLaws);
    }

    render(){
      const {container}=styles;
      const {laws,checkedLaws}=this.props;
      return(
        <View style={container}>
             {
                laws.map(item=>{
                
                const {key,label}=item;        
                return(
                    <LawButton
                       nameLaw={label}
                       key={key}
                       onPressCheckbox={()=>this.onPressCheckbox(key)}
                       checked={checkedLaws.indexOf(key)!==-1}
                     />
                     )
                })
             }
        </View>
      )
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginLeft: 15,
        width: widthWindow - 30,
        marginTop: 23
    }
})

export {LawButtonContainer}