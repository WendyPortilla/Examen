import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Caja1Screen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxYellow}></View>
            <View style={styles.boxGreen}></View>
            <View style={styles.boxPink}></View>
        </View>
      )
    }
    const styles=StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#D0D3D4',
            justifyContent:'center',
            alignItems:'center',
            //width:300,
            //height:300
            
        },
        boxYellow:{
            flex:1,
            width:100,
            height:100,
            backgroundColor:'#F7DC6F',
            borderWidth:10,
            borderColor:'white',
            position:'absolute',
            //top:-0,
            //left:-0
            //bottom:10
            //position:'relative'
            //top:50,
            //left:50
        },
        boxGreen:{
            width:100,
            height:100,
            backgroundColor:'#A3E4D7',
            borderWidth:10,
            borderColor:'white',
            position:'absolute',
            top:0,
            bottom:0,
            left:0
        },
        boxPink:{
            width:100,
            height:100,
            backgroundColor:'#F08080',
            borderWidth:10,
            borderColor:'white',
            position:'absolute',
            bottom:0,
            right:0
            
        }
    
    
    
    })
    