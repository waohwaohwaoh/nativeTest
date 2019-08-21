import React, { Component } from 'react';
import { Text,View,FlatList,RefreshControl,Button,StyleSheet,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {Purchase,Notification} from '../components'
import { LIGHTBLUE, DARKBLUE, LIGHTGREY,BLUE,widthWindow, WHITE, heightWindow } from '../constant';
import {updateChangeFilter,toggleFavourites,updateNotification} from '../actions'

class Favorites extends Component {
  redirectSearch=()=>{
    this.props.navigator.push({
      screen: 'Screen1',
      title: 'Поиск закупок',
    });
  }
  _toggleFavourites=(number,flag)=>{
    const {toggleFavourites,updateNotification}=this.props;
    flag?updateNotification(true,'Закупка удалена из избранного'):updateNotification(true,'Закупка добавлена в избранное');
    setTimeout(()=>{updateNotification(false)},3000)
    toggleFavourites(number,flag)
    console.log(heightWindow)
}  
  
  render() {
    
    const {mainContainer,noResult,noResultText,noResultDescription,button,buttonText,relative}=style;
    const {data:{list,total,isFetching},favourites,toggleFavourites,notification}=this.props
    const flag=!favourites.length;
    return (
      <View style={relative} >
          <View>
          {!flag?
              <FlatList
                    data={favourites}
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
                </FlatList>:
                <View style={noResult}>
                    <Text style={noResultText}>
                      {'У вас нет сохраненных закупок'}
                    </Text>
                    <Text style={noResultDescription}>
                      {'Чтобы сохранить закупки в Избранное, нужно нажать на звездочку в карточке закупки. После этого мы будем информировать вас о всех важных событиях, связанных с ней.'}
                    </Text>
                    <TouchableOpacity style={button} onPress={this.redirectSearch} >
                          <Text style={buttonText}>{'К поиску закупок'}</Text>
                    </TouchableOpacity>
                </View>}
          </View>
          <Notification
            isVisible={notification.visible}
            title={notification.title}
          />
            </View>
    );
  }
}

const style=StyleSheet.create({
  relative:{
    flex: 1
  },
  noResult:{
    flexDirection:'column',
    justifyContent:"center",
    alignItems:'center',
    paddingHorizontal:45,
    marginTop:90
  },
  noResultText:{
    fontSize:22,
    color:DARKBLUE,
    textAlign:'center',
    fontWeight:'600'
  },
  noResultDescription:{
    fontSize:20,
    color:LIGHTGREY,
    lineHeight:20,
    paddingTop:20,
    textAlign:"center"
  },
  titleText:{
      fontSize:22,
      lineHeight:30
  },
  button:{
    marginTop:100,
    width:widthWindow*(7/9),
    height: 50,
    backgroundColor:BLUE,
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    fontSize:15,
    color:WHITE
  }
})

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

export default connect (mapStateToProps,mapStateToDispatch) (Favorites)