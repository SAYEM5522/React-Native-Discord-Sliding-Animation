import React from 'react'
import { Image, useWindowDimensions } from 'react-native'
import { StatusBar } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import MiddleFeed from './MiddleFeed';
import { FlatList } from 'react-native';
const Middle = () => {
  const height=useWindowDimensions().height
  const width=useWindowDimensions().width
  const MiddleWidth=(width/2+width/6+10)
  const styles = StyleSheet.create({
  container:{
    height:height,
    width:MiddleWidth,
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor:'#2C2F33',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:15
  },
  input: {
   flex:1,
   padding:5
  },
  search:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#1E2124',
    justifyContent:'space-between',
    borderRadius:5,
    width:MiddleWidth-30,
    alignSelf:'center'
  }
  
  })
  
  

  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.header}>
        <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Direct Message </Text>
        <Entypo name="message" size={24} color="white" />
      </View>
      <View style={styles.search}>
      <TextInput
        style={styles.input}
        placeholder="Find or start a conversation "
        placeholderTextColor={'gray'}
        
       
      />
        <EvilIcons name="search" size={24} color="gray" />

      </View>
     <MiddleFeed/>
     <MiddleFeed/> 
     <MiddleFeed/> 
     <MiddleFeed/>
    </View>
  )
}

export default Middle

