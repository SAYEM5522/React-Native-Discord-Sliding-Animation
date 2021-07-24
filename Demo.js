import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { data } from './Item'

const Demo = () => {
  const translationY=useSharedValue(0);
  const onscroll=useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;

  });

const inputRange=[100,130]
const outputRange=[-100,0]
  const style=useAnimatedStyle(()=>{
    return{
transform:[{
  translateY:interpolate(translationY.value,inputRange,outputRange,Extrapolate.CLAMP)
}],
opacity:interpolate(translationY.value,inputRange,[0.3,1])

}

  })
  return (
    <View>
      <StatusBar/>
      <Animated.View style={[{flexDirection:'row',
      alignItems:'center',justifyContent:'space-between',
      position:'absolute',
      padding:10,backgroundColor:'whitesmoke',zIndex:1,width:'100%'},style]}>
       <Image
       source={{uri:'https://github.com/wcandillon/can-it-be-done-in-react-native/blob/master/season4/src/Chanel/assets/fezbot2000-vScxe3Ue5oE-unsplash.jpg?raw=true'}}
       style={{width:60,height:60,resizeMode:'cover',borderRadius:10}}
       />
       <Text>Sayem</Text>
     </Animated.View>
     <Animated.ScrollView
     onScroll={onscroll}
     scrollEventThrottle={16}
     showsVerticalScrollIndicator={false}
     >
      
       {data.map((data)=>{
         return(
           <Image
           key={data.id}
           source={{uri:data.img}}
           style={{width:'100%',height:300}}
           />
         )
       })}
     </Animated.ScrollView>
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({})
