import React from 'react'
import { Dimensions,StyleSheet, Text, View } from 'react-native'

export const Display = ({value,result}) => {
  return (
    <View style={style.display}>
        <Text style={style.result}>
          {result}
        </Text>
        <Text style={style.value}>
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
      },
      result:{
        width: Dimensions.get('window').width,
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        textAlign:'right',
        marginBottom: 15,
        fontSize:35,
        opacity: .7
      },
      value:{
        width: Dimensions.get('window').width,
        textAlign:'right',
        fontSize: 75,
        color:"white"

    }
})
