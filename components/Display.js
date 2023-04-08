import React from 'react'
import { Dimensions,StyleSheet, Text, View } from 'react-native'

export const Display = ({value,result}) => {
  return (
    <View style={style.display}>
        <Text numberOfLines={1} style={style.result}>
          {result}
        </Text>
        <Text numberOfLines={1} style={style.value}>
          {value}
        </Text>
    </View>
  )
}

const style = StyleSheet.create({
    display:{
        flexGrow: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'column',
        margin:10
      },
      result:{
        width: Dimensions.get('window').width - 20,
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        textAlign:'right',
        marginBottom: 15,
        fontSize:35,
        color:'#6F6F72',
        marginLeft: 10,
        marginRight: 10
      },
      value:{
        width: Dimensions.get('window').width - 20,
        textAlign:'right',
        fontSize: 75,
        color:"white",
        marginLeft: 10,
        marginRight: 10
    }
})
