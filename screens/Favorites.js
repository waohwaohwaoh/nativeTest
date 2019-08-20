import React, { Component } from 'react';
import { Text,View,FlatList,RefreshControl,Button,StyleSheet,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {Purchase} from '../components'
import { LIGHTBLUE, DARKBLUE, LIGHTGREY,BLUE,widthWindow, WHITE } from '../constant';
import {updateChangeFilter,toggleFavourites} from '../actions'

class Favorites extends Component {
  redirectSearch=()=>{
    this.props.navigator.push({
      screen: 'Screen1',
      title: 'Поиск закупок',
    });
  }
  
  render() {
    
    const {titleContainer,titleText,mainContainer,noResult,noResultText,noResultDescription,button,buttonText}=style;
    const {data:{list,total,isFetching},favourites,toggleFavourites}=this.props
    const flag=!favourites.length;
    return (
      <View >
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
    );
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
  noResult:{
    flexDirection:'column',
    justifyContent:"center",
    alignItems:'center',
    paddingHorizontal:45,
    paddingTop:90
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
    favourites:state.favourites
  }
}
const mapStateToDispatch=(dispatch)=>{
  return{
      updateValueFilter:(value,flag)=>dispatch(updateChangeFilter(value,flag)),
      toggleFavourites:(id,flag)=>dispatch(toggleFavourites(id,flag))
  }
}

export default connect (mapStateToProps,mapStateToDispatch) (Favorites)