import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export const Botao = ({content, action, color, label, img}) => {
    let styleButton = [style.botao];
    if(color != null || color != undefined) 
        styleButton.push({backgroundColor:color});
    function executeAction(){
        action(content);
    }
  return (
    <View style={style.container}>
      <TouchableHighlight underlayColor="#17171C" onPress={executeAction}>
          <Text style={styleButton}>{label}</Text>
      </TouchableHighlight>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    margin: 10,
    width: (Dimensions.get('window').height/8)- 20,
    height: (Dimensions.get('window').height/8)- 20,
  },
  botao:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    textAlign: 'center',
    backgroundColor: "grey",
    borderRadius: 25,
    lineHeight: Dimensions.get('window').height/8-20,
    fontSize:30,
    color: "white"
  }
})
