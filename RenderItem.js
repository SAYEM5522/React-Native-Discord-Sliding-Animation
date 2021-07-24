import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import Animated, { interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated'

const RenderItem = ({index,item,translationY}) => {
  const ItemSize=90;
  
  const inputRange=[-1,0,ItemSize*index,ItemSize*(index+2)]
    const outputRange=[1,1,1,0]
  const style=useAnimatedStyle(()=>{
 
    return{
      transform:[
        {
          scale:interpolate(translationY.value,inputRange,outputRange)
        }
        
      ]
    }
  })
  return (
    <Animated.View style={[styles.container,style]}>
      <Avatar
      rounded
      source={{uri:item.img}}
      containerStyle={{marginRight:10}}
      size={40}
      />
     <View>
       <Text style={{fontSize:15,fontWeight:'900'}}>{item.title}</Text>
       <Text>{item.name}</Text>
     </View>
    </Animated.View>
  )
}

export default RenderItem

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    borderColor:'lightgray',
    borderWidth:1,
    backgroundColor:'whitesmoke',
    marginVertical:10,width:'95%',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:15,
    height:90,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.7,
    shadowRadius:10,
    elevation:5

  }
})
