import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {LawButton} from '../components';
import {widthWindow} from '../constant';


class LawButtonContainer extends Component{
    constructor(props){
      super(props);
      this.state={
        tempCheckValues:[]
      }      
    }
    onPressCheckbox=(id,value)=>{
        let tempCheckBoxChecked=this.state.tempCheckValues;
        tempCheckBoxChecked[id]=!value;
        this.setState({
           tempCheckValues:tempCheckBoxChecked
        })
        this.props.updateCheckboxValue(tempCheckBoxChecked)
    }
    componentDidMount(){
      const {checkBoxArray}=this.props;
      let tempValue=[];
      checkBoxArray.map(item=>{
        return tempValue.push(false)
      })

      this.setState({
        tempCheckValues:tempValue
      })
      this.props.updateCheckboxValue(tempValue)
    }

    render(){
      const {container}=styles;
      const {checkBoxArray}=this.props;
      const {tempCheckValues}=this.state;
      return(
        <View style={container}>
             {
                checkBoxArray.map(item=>{
                
                const {id,nameLaw}=item;        
                return(
                    <LawButton
                       nameLaw={nameLaw}
                       key={id}
                       onPressCheckbox={()=>this.onPressCheckbox(id,tempCheckValues[id])}
                       checked={tempCheckValues[id]}
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