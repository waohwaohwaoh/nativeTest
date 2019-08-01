import React from 'react'
import {TouchableOpacity,Button, StyleSheet} from 'react-native'

const SearchButton=(
    onPress,
    title
)=>{
    return(
        <Button
            onPress={onPress}
            title={`Показать закупки ${title}`}
        />
    )
}

const styles=StyleSheet.create({
    
})