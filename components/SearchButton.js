import React, {Component} from 'react'
import {TouchableOpacity,Button, StyleSheet,View,Text,ActivityIndicator} from 'react-native'
import {widthWindow,BLUE,WHITE,url} from '../constant'

class SearchButton extends Component{
    constructor(props){
        super(props)
    }
    
    updateLoading=()=>{
        let load=this.props.isLoading;
        this.props.updateLoading(!load)
    }

    updateData= async () => {
        this.updateLoading(this.props.isLoading);
        const respone=await fetch(url);
        const data =await respone.json();
        this.props.updateData(data);
        this.updateLoading(this.props.isLoading)
        console.log(typeof(data));
    }
    
    
    render(){
        const {container,button,text}=styles;
        const{isLoading,title}=this.props;
        return(
        <View style={container}>
           <TouchableOpacity
               onPress={this.updateData}
               style={button}
            >
                {
                    isLoading?
                    <ActivityIndicator
                        size="large"
                        color={WHITE}
                    >

                    </ActivityIndicator>
                    :<Text style={text}>
                        {title}
                    </Text>    
                }
                
            </TouchableOpacity>
        </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:40
    },
    button:{
        width:widthWindow*(7/9),
        height: 50,
        backgroundColor:BLUE,
        borderRadius:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:'IBM Plex Sans',
        fontSize:15,
        color:WHITE
    }
})

export {SearchButton}