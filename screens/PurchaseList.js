import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView } from 'react-native'
import {connect} from 'react-redux'
import {Purchase} from '../components'

class PurchaseList extends Component {
    render() {
        const {data}=this.props
        const {titleContainer,titleText}=style;
        return (
            <View>
                <View style={titleContainer}>
                    <Text style={titleText}>Найдено закупок <Text>{data.total}</Text> </Text>
                </View>
                <ScrollView>
                    <Purchase></Purchase>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps=state=>{
    return{
      data:state.data
    }
  }

const style=StyleSheet.create({
    titleContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
    },
    titleText:{
        fontSize:14
    }
})

export default connect (mapStateToProps,null) (PurchaseList)
