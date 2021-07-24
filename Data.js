import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

const Data = ({item,width,translationX,index}) => {
  const inputRange=[(index-1)*width,index*width,(index+1)*width]
    const outputRange=[0.7,1,0.7]

  const stylez = useAnimatedStyle(() => {
  return {
    transform: [
      {
        scale:interpolate(translationX.value,inputRange,outputRange)
      },
    ],
    opacity:interpolate(translationX.value,inputRange,[0.3,1,0.3])
  };
});

  return (
    <View>
       <Animated.Image
        source={{uri:item.img}}
        style={[{width:width,height:480,resizeMode:'cover',borderRadius:20},stylez]}
        />
        
    </View>
  )
}

export default Data

const styles = StyleSheet.create({})
