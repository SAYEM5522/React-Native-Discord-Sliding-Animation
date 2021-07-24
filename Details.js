import React from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import {data} from "./Item"
import RenderItem from './RenderItem'
const Details = () => {
  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList);

  translationY=useSharedValue(0);
  const onscroll= useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
  });
  return (
    <View >
      <StatusBar/>
      <Image
      source={{uri:'https://github.com/wcandillon/can-it-be-done-in-react-native/blob/master/season4/src/Chanel/assets/chanel.jpg?raw=true'}}
      style={[StyleSheet.absoluteFillObject]}
      blurRadius={10}
      />
      <AnimatedFlatlist
      data={data}
      renderItem={({item,index})=>{
        return(
          <RenderItem index={index} item={item} translationY={translationY}/>
        )
      }}
      keyExtractor={(item)=>item.id}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={onscroll}
      
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})
