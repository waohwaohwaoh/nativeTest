import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView,RefreshControl,FlatList } from 'react-native'
import {connect} from 'react-redux'
import {Purchase} from '../components'
import { LIGHTBLUE } from '../constant';

class PurchaseList extends Component {
    state = {
        refreshing: false,
    };
    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(()=>{this.setState({refreshing: false});},3000)
        console.log(this.state.refreshing)
        
      }
    render() {
        const {data:{list,total}}=this.props
        const {titleContainer,titleText,mainContainer}=style;
        return (
            <View >
                <View style={titleContainer}>
                    <Text style={titleText}>Найдено закупок <Text style={[{color:LIGHTBLUE}]}>{total}</Text> </Text>
                </View>
                <FlatList
                    data={list}
                    renderItem={({item})=>{
                        let {createDate,price,titleNumber,number,titleName,method}=item;
                            console.log(method);
                            const date=new Date(createDate).toLocaleDateString().split(',')[0];
                            return(
                                <Purchase
                                    date={date}
                                    key={number}
                                    number={titleNumber}
                                    text={titleName}
                                    title={method.name}
                                    price={price}
                                />
                            )
                    }

                    }
                    keyExtractor={(item,index)=>index.toString()}
                    style={mainContainer}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onRefresh}
                >
                </FlatList>
                {/* <ScrollView style={mainContainer}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    {
                        list.map(item=>{
                            let {createDate,price,titleNumber,number,titleName,method}=item;
                            console.log(method);
                            const date=new Date(createDate).toLocaleDateString().split(',')[0];
                            return(
                                <Purchase
                                    date={date}
                                    key={number}
                                    number={titleNumber}
                                    text={titleName}
                                    title={method.name}
                                    price={price}
                                />
                            )

                        })
                    }
                </ScrollView> */}
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
    mainContainer:{
        marginBottom:50
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
        paddingBottom:10
    },
    titleText:{
        fontSize:14
    }
})

export default connect (mapStateToProps,{}) (PurchaseList)
