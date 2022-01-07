import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TopHeader = ({
    width='100%',
    height='60',
    backgroundColor="white"
}) => {
    return (
        <View style={{width:width, height:height,backgroundColor:backgroundColor}}>
<Text>Abhaya</Text>
        </View>
    )
}



const styles = StyleSheet.create({})
