import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const RightTab = () => {
  const height=useWindowDimensions().height
  const width=useWindowDimensions().width

  const styles = StyleSheet.create({
    container:{
      backgroundColor:'#2C2F33',
      height:height,
      zIndex:-100,
      width:width-70,
      marginLeft:'auto',
      marginRight:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
    }
  })
  
  return (
    <View style={[StyleSheet.absoluteFillObject]}>
    <View style={styles.container}>
    </View>
    </View>
  )
}

export default RightTab

