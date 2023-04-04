import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native'

export const Botao = ({content, action, color}) => {
    let styleButton = [style.botao];
    if(color != null || color != undefined) 
        styleButton.push({backgroundColor:color});
    function executeAction(){
        action(content);
    }
  return (
    <TouchableHighlight onPress={executeAction}>
        <Text style={styleButton}>{content}</Text>
    </TouchableHighlight>
  )
}
const style = StyleSheet.create({
  botao:{
    width: Dimensions.get('window').width/4,
    height: Dimensions.get('window').width/4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    textAlign: 'center',
    lineHeight: Dimensions.get('window').width/4
  }
})
