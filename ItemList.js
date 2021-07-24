import React from 'react'
import { FlatList, Image, StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import {data} from './Item.js';
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import Data from './Data.js';
const ItemList = () => {

  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList);
   const width=useWindowDimensions().width

  const translationX=useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });


  return (
     <AnimatedFlatlist
     data={data}
     renderItem={({item,index})=>{
       return(
         <View style={{width:width,height:480}}>
         <Data item={item} width={width} translationX={translationX} index={index}/>
        </View>
       )
     }}
     keyExtractor={(Item)=>Item.id}
     horizontal
     showsHorizontalScrollIndicator={false}
     snapToInterval={width}
     decelerationRate="fast"
     onScroll={scrollHandler}
     />
    
  )
}

export default ItemList

const styles = StyleSheet.create({})
