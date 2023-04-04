import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Botao } from './Botao'

export const Pad = ({setValue, value}) => {
    function deleteNumber(){
        if(value.length > 0){
            setValue(value.substring(0, value.length - 1));
        }
    }
    function deleteAllNumber(){
        setValue('0');
    }
    function addNumber(number){
        setValue(value + number);
    }
    function addOperator(operator){
        if(value[value.length-1] == '-' || value[value.length-1] == '+' || value[value.length-1] == '*' || value[value.length-1] == '/'){
            return;
        }
        setValue(value + operator);
    }
    function addResult(){
        let result = eval(value);
        setValue(result);
    }
    return (
      <View style={style.container}>
          <Botao color={'red'} content={'<'} action={deleteNumber}></Botao>
          <Botao color={'blue'} content={'+'} action={addOperator}></Botao>
          <Botao color={'blue'} content={'-'} action={addOperator}></Botao>
          <Botao color={'red'} content={'D'} action={deleteAllNumber}></Botao>
          <Botao color={'white'} content={'0'} action={addNumber}></Botao>
          <Botao color={'white'} content={'1'} action={addNumber}></Botao>
          <Botao color={'white'} content={'2'} action={addNumber}></Botao>
          <Botao color={'blue'} content={'*'} action={addOperator}></Botao>
          <Botao color={'white'} content={'3'} action={addNumber}></Botao>
          <Botao color={'white'} content={'4'} action={addNumber}></Botao>
          <Botao color={'white'} content={'5'} action={addNumber}></Botao>
          <Botao color={'blue'} content={'/'} action={addOperator}></Botao>
          <Botao color={'white'} content={'6'} action={addNumber}></Botao>
          <Botao color={'white'} content={'7'} action={addNumber}></Botao>
          <Botao color={'white'} content={'8'} action={addNumber}></Botao>
          <Botao color={'red'} content={'='} action={addResult}></Botao>
          <Botao color={'white'} content={'9'} action={addNumber}></Botao>
      </View>
    )
}
const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        flexWrap:"wrap",
        width: Dimensions.get('window').width,
        flexGrow:1,
    }
  })
  