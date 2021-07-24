import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screen/HomeScreen';
import FriendsScreen from './Screen/FriendsScreen';
import MentionScreen from './Screen/MentionScreen';
import SearchScreen from './Screen/SearchScreen';
import ProfileScreen from './Screen/ProfileScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
const BttomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
     <NavigationContainer>
      <Tab.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        style:{
          backgroundColor:'#1E2124',
          borderTopWidth:0,
          height:50
        },
        showLabel:false
      }}
      >
        <Tab.Screen
        options={{
          tabBarIcon:({focused})=>(
            <FontAwesome5 name="discord" size={24} color={focused?'white':'gray'} />
          )
        }}
        name="Home" component={HomeScreen} />
        <Tab.Screen 
         options={{
          tabBarIcon:({focused})=>(
            <MaterialIcons name="emoji-people" size={24} color={focused?'white':'gray'} />
          )
        }} name="Friend" component={FriendsScreen} />
        <Tab.Screen 
         options={{
          tabBarIcon:({focused})=>(
            <EvilIcons name="search" size={30} color={focused?'white':'gray'} />
          )
        }}
        name="Search" component={SearchScreen} />
        <Tab.Screen 
         options={{
          tabBarIcon:({focused})=>(
            <Text style={{fontSize:23,color:focused?'white':'gray'}}>@</Text>
          )
        }}
        name="Mention" component={MentionScreen} />
        <Tab.Screen 
         options={{
          tabBarIcon:({focused})=>(
            <FontAwesome5 name="discord" size={24} color={focused?'white':'gray'} />
          )
        }}
        name="Profile" component={ProfileScreen} />


      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BttomTab

const styles = StyleSheet.create({})
