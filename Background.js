import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import Animated, {  interpolateColor, useAnimatedStyle } from 'react-native-reanimated'
import { data } from './Item'

const Background = ({item,index,width,translationX,height}) => {
 const style =useAnimatedStyle(()=>{
    return{
      flex:1,
      height:height,
      backgroundColor:interpolateColor(translationX.value,data.map((item,index)=>index*width),data.map((item)=>item.color))
    }
  })
  return (
    <Animated.View style={[style]}>
      <StatusBar/>
     <Image
     source={{uri:item.img}}
     style={{width:width,height:400,resizeMode:'cover',}}
     />
    </Animated.View>
  )
}

export default Background

const styles = StyleSheet.create({})
