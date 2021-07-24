import React from 'react'
import { FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import Background from './Background'
import { data } from './Item'

const BackgroundColor = () => {
  const width =useWindowDimensions().width
  const height =useWindowDimensions().height

  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList);
  const  translationX=useSharedValue(0);
 const onscroll=useAnimatedScrollHandler((event) => {
  translationX.value = event.contentOffset.x;
});
  return (
    <View>
     <AnimatedFlatlist
     data={data}
     renderItem={({item,index})=>{
      return(
        <Background item={item} index={index} width={width} height={height} translationX={translationX}/>
      )
     }}
     horizontal
     showsHorizontalScrollIndicator={false}
     scrollEventThrottle={16}
     keyExtractor={(item)=>item.id}
     snapToInterval={200}
     snapToInterval={width}
     onScroll={onscroll}
     decelerationRate="fast"
     
/>
    </View>
  )
}

export default BackgroundColor

const styles = StyleSheet.create({})
