import React, { useState } from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import Middle from './Middle'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import BttomTab from './BttomTab'
import { Entypo } from '@expo/vector-icons';
import RightTab from './RightTab'
import { StatusBar } from 'react-native'
import { TextInput } from 'react-native'
const App = () => {

  const [open,setOpen]=useState(false);
  const width=useWindowDimensions().width
  const translateX=useSharedValue(0)
  const press=useSharedValue(false)

  const config={
    damping:20,
      mass:2,
      overshootClamping:false
  }
  const TranX=(value)=>{
  
    if(value<-10){
     setOpen(true)
    }
    else{
      setOpen(false)
    }
  }
  const onGestureEvent=useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
     
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      
      runOnJS(TranX)(translateX.value)
    },
    onEnd: (_) => {

      if(translateX.value>width/2){
        translateX.value=withSpring((width/2+width/3+15))
      }
      else {
        translateX.value = withSpring(0,config);
      }
    

    },
  })
  const style=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateX:translateX.value
      }]
    }
  })
  const [text,setText]=useState('')
  const onChangeText=(event)=>{
      setText(event)
  }
const inputRange=[0,100]
const outputRange=[0,50]
const bottom=useAnimatedStyle(()=>{
    return{
height:interpolate(translateX.value,inputRange,outputRange,Extrapolate.CLAMP)
}

  })
 
  return (
    <View style={{ flex: 1, backgroundColor: '#1E2124', }}>
    <View style={[{position:'absolute',left:0,zIndex:100,top:0},StyleSheet.absoluteFillObject]}>
       
    <PanGestureHandler onGestureEvent={onGestureEvent}>
    <Animated.View style={[styles.container,style]}>
      <StatusBar/>
      <View style={styles.header}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Feather name="menu" size={24} color="lightgray" />
      <Text  style={styles.text}> <Text style={{color:'gray',fontSize:22}}>@</Text> Discord</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'  }}>
      <Feather style={{marginRight:20}} name="phone-call" size={24} color="lightgray" />
      <Ionicons style={{marginRight:20}} name="videocam-outline" size={24} color="lightgray" />
      <SimpleLineIcons style={{marginRight:10}} name="people" size={24} color="lightgray" />
      </View>
      </View>
      <View style={styles.bottomStyle}>
        <View>
        <MaterialIcons name="image" style={{padding:9,backgroundColor:'#1E2124',borderRadius:20,marginHorizontal:8}} size={22} color="gray" />
        </View>
        <View>
        <Fontisto style={{padding:9,backgroundColor:'#1E2124',borderRadius:20,marginRight:10}}  name="shopping-package" size={22} color="gray" />
        </View>
        <View style={{flexDirection:'row',alignItems:'center',width:width-130,backgroundColor:'#1E2124',padding:20,borderRadius:20}}>
        <TextInput
        style={{flex:1,height:100}}
        onChangeText={onChangeText}
      
        placeholder="Message @Discord75"
        placeholderTextColor="gray"
      />

          <Entypo name="emoji-happy" size={24}  color="gray" />
        </View>
      </View>

    </Animated.View>
    </PanGestureHandler>
   
    <Animated.View style={[styles.footer,bottom]}>
      <BttomTab/>
    </Animated.View>
   
    </View>
    <View>
    <Middle/>
    </View>
  
   
  
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  footer:{
    height:50,
    backgroundColor:'#1E2124',
    position:'absolute',
    bottom:0,
    width:'100%',
    zIndex:999,
    shadowColor:'#000',
    shadowOffset:{
      height:10,
      width:0,
    },
    shadowOpacity:0.70,
    elevation:10,
  
  },
  container:{
  backgroundColor:'#2C2F33',
    flex:1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    shadowColor:'#000',
    shadowOffset:{
      height:10,
      width:0,
    },
    shadowOpacity:0.70,
    elevation:5,
    position:'relative'
},

header:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  padding:15,
  backgroundColor:'#23272A',
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
},
text:{
  marginLeft:20,
  fontSize:18,
  fontWeight:'bold',
  color:'lightgray'
},
bottomStyle:{
  position:'absolute',
  bottom:5,
  flexDirection:'row',
  height:50,
  backgroundColor:'#2C2F33',
  shadowColor:'#000',
    shadowOffset:{
      height:10,
      width:0,
    },
    shadowOpacity:0.70,
    elevation:0,
    width:'100%',
    padding:10
}
})
