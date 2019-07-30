import React from 'react';
import {StyleSheet,View} from 'react-native';
import {LawButton} from '../components';
import {widthWindow} from '../constant';

const LawButtonContainer=({
    checkboxArray,
    tempCheckValues,
    checkValues,
    onPressCheckbox
})=>{
    const {container}=styles;
    return(
        <View style={container}>
          {
            checkboxArray.map(item=>{
              
              const {id,nameLaw}=item;
              tempCheckValues[id] = false;

              return(
                <LawButton
                  nameLaw={nameLaw}
                  key={id}
                  onPressCheckbox={()=>onPressCheckbox(id,checkValues[id])}
                  checked={checkValues[id]}
                />
              )
            })
          }
        </View>
    )
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