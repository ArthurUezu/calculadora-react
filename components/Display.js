import React from 'react'
import { Dimensions,StyleSheet, Text, View } from 'react-native'

export const Display = ({value}) => {
  return (
    <View style={style.display}>
        <Text>
            {value}
        </Text>
    </View>
  )
}

const style = StyleSheet.create({
    display:{
        minHeight: Dimensions.get('window').height/2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
})
