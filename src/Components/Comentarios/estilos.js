import React from 'react'
import { StyleSheet } from 'react-native'

const estilo = StyleSheet.create({
    textInput:{
        flex: 1, 
        backgroundColor: '#F1F1F1', 
        width: '100%', 
        height: 40, 
        padding: 5, 
        borderRadius: 10
    },
    viewInput:{
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageSend:{
        width: 30,
        height: 30,
        margin: 5,
    }
})
export default estilo;