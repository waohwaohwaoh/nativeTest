import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView,RefreshControl,FlatList } from 'react-native'
import {connect} from 'react-redux'
import {Purchase} from '../components'
import { LIGHTBLUE } from '../constant';
import {updateChangeFilter,toggleFavourites} from '../actions'

class PurchaseList extends Component {
    
    _onRefresh = () => {
        const {updateValueFilter,pageNumber}=this.props;
        console.log(pageNumber+1)
        updateValueFilter({
            pageNumber:pageNumber+1
        },true);
        console.log(this.props);
        
      }
    render() {
        const {data:{list,total,isFetching},favourites,toggleFavourites}=this.props
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
                            const date=new Date(createDate).toLocaleDateString().split(',')[0];
                            return(
                                <Purchase
                                    date={date}
                                    key={number}
                                    number={titleNumber}
                                    text={titleName}
                                    title={method.name}
                                    price={price}
                                    isFavourites={favourites.filter(item=>item.number===number).length!==0}
                                    toggleFavourites={toggleFavourites}
                                />
                            )
                    }

                    }
                    keyExtractor={(item,index)=>index.toString()}
                    style={mainContainer}
                    refreshControl={
                        <RefreshControl
                            refreshing={isFetching}
                            onRefresh={this._onRefresh}
                        />
                    }
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onRefresh}
                >
                </FlatList>
            </View>
        )
    }
}

const mapStateToProps=state=>{
    return{
      data:state.data,
      pageNumber:state.filterValue.pageNumber,
      favourites:state.favourites
    }
  }
const mapStateToDispatch=(dispatch)=>{
    return{
        updateValueFilter:(value,flag)=>dispatch(updateChangeFilter(value,flag)),
        toggleFavourites:(id,flag)=>dispatch(toggleFavourites(id,flag))
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

export default connect (mapStateToProps,mapStateToDispatch) (PurchaseList)
