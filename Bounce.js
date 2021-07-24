import React from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { data } from './Item'

const Bounce = () => {
  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList);

const y=useSharedValue(0);
const onGestureEvent=useAnimatedGestureHandler({
  onStart: (_, ctx) => {
    ctx.startX = y.value;
  },
  onActive: (event, ctx) => {
    y.value = ctx.startX + event.translationY;
  },
  onEnd: (_) => {
    y.value = withSpring(0);
  },
})
const style=useAnimatedStyle(()=>{
  return{
    transform:[
      {
        translateY:y.value
      }
    ]
  }
})
  return (
    <PanGestureHandler
     onGestureEvent={onGestureEvent}

     >
    <Animated.View style={[style]}>
      <StatusBar/>
     <FlatList
     data={data}
     renderItem={({item,index})=>{
      return(
        <View >
          <Image
          source={{uri:item.img}}
          style={{width:"100%",height:400}}
          />
       </View>
      )
    }}
    keyExtractor={(Item)=>Item.id}
   showsVerticalScrollIndicator={false}
   
     />
    </Animated.View>
    </PanGestureHandler>
  )
}

export default Bounce

const styles = StyleSheet.create({})
