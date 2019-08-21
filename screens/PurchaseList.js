import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView,RefreshControl,FlatList } from 'react-native'
import {connect} from 'react-redux'
import {Purchase,Notification} from '../components'
import { LIGHTBLUE, widthWindow,heightWindow } from '../constant';
import {updateChangeFilter,toggleFavourites,updateNotification} from '../actions'

class PurchaseList extends Component {
    
    _onRefresh = () => {
        const {updateValueFilter,pageNumber}=this.props;
        updateValueFilter({
            pageNumber:pageNumber+1
        },true);
        console.log(this.props);
      }
    _toggleFavourites=(number,flag)=>{
        const {toggleFavourites,updateNotification}=this.props;
        flag?updateNotification(true,'Закупка удалена из избранного'):updateNotification(true,'Закупка добавлена в избранное');
        setTimeout(()=>{updateNotification(false)},3000)
        toggleFavourites(number,flag)
    }  
    render() {
        const {data:{list,total,isFetching},favourites,notification}=this.props
        const {titleContainer,titleText,mainContainer}=style;
        return (
            <View style={mainContainer}>
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
                                    toggleFavourites={this._toggleFavourites}
                                />
                            )
                    }

                    }
                    keyExtractor={(item,index)=>index.toString()}
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
                <Notification
                        isVisible={notification.visible}
                         title={notification.title}
                /> 
                
            </View>
        )
    }
}

const mapStateToProps=state=>{
    return{
      data:state.data,
      pageNumber:state.filterValue.pageNumber,
      favourites:state.favourites,
      notification:state.notification
    }
  }
const mapStateToDispatch=(dispatch)=>{
    return{
        updateValueFilter:(value,flag)=>dispatch(updateChangeFilter(value,flag)),
        toggleFavourites:(id,flag)=>dispatch(toggleFavourites(id,flag)),
        updateNotification:(value,title)=>dispatch(updateNotification(value,title))
    }
}

const style=StyleSheet.create({
    mainContainer:{
        flex: 1
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
