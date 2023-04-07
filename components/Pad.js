import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Botao } from './Botao'

export const Pad = ({setValue, value, setResult, result}) => {
    function deleteNumber(){
        if(value.length > 0){
            setValue(value.substring(0, value.length - 1));
        }
    }
    function deleteAllNumber(){
        setValue('0');
        setResult('0')
    }
    function addNumber(number){
        if(value == '0'){
            setValue(number);
        }
        else{
            setValue(value+number)
        }
    }
    function addOperator(operator){
        if(!(result[result.length-1] == '-' || result[result.length-1] == '+' || result[result.length-1] == '*' || result[result.length-1] == '/') &&(result.includes('-')||result.includes('+')||result.includes('*')||result.includes('/'))){
            setResult(value+operator);
            setValue('0');
            return;
        } else
        if(value != 0 && (result[result.length-1] == '-' || result[result.length-1] == '+' || result[result.length-1] == '*' || result[result.length-1] == '/')){
            setResult(value+operator);
            const resultValue = addResult()
            setResult(resultValue + operator)
            setValue('0')
            return;
        } else
        if(result[result.length-1] == '-' || result[result.length-1] == '+' || result[result.length-1] == '*' || result[result.length-1] == '/'){
            return;
        }
        if(result == '0'){
            setResult(value+operator);
            setValue('0');
        }
        else{
            addResult();
            setResult(result+operator);
        }
    }
    function addResult(){
        if(result[result.length-1] == '-' || result[result.length-1] == '+' || result[result.length-1] == '*' || result[result.length-1] == '/'){
            const newResult = eval(result+value);
            setValue(newResult);
            setResult(result+value);
            return newResult;
        }
    }
    return (
      <View style={style.container}>
          <Botao color={'red'} label={'C'} content={'C'} action={deleteAllNumber}></Botao>
          <Botao color={'white'} label={'+/-'} content={'+/-'} action={addNumber}></Botao>
          <Botao color={'white'} label={'%'} content={'%'} action={addNumber}></Botao>
          <Botao color={'blue'} label={'/'} content={'/'} action={addOperator}></Botao>
          <Botao color={'white'} label={'7'} content={'7'} action={addNumber}></Botao>
          <Botao color={'white'} label={'8'} content={'8'} action={addNumber}></Botao>
          <Botao color={'white'} label={'9'} content={'9'} action={addNumber}></Botao>
          <Botao color={'blue'} label={'X'} content={'*'} action={addOperator}></Botao>
          <Botao color={'white'} label={'4'} content={'4'} action={addNumber}></Botao>
          <Botao color={'white'} label={'5'} content={'5'} action={addNumber}></Botao>
          <Botao color={'white'} label={'6'} content={'6'} action={addNumber}></Botao>
          <Botao color={'blue'} label={'-'} content={'-'} action={addOperator}></Botao>
          <Botao color={'white'} label={'1'} content={'1'} action={addNumber}></Botao>
          <Botao color={'white'} label={'2'} content={'2'} action={addNumber}></Botao>
          <Botao color={'white'} label={'3'} content={'3'} action={addNumber}></Botao>
          <Botao color={'blue'} label={'+'} content={'+'} action={addOperator}></Botao>
          <Botao color={'white'} label={'.'} content={'.'} action={addNumber}></Botao>
          <Botao color={'white'} label={'0'} content={'0'} action={addNumber}></Botao>
          <Botao color={'red'} label={'<'} content={'<'} action={deleteNumber}></Botao>
          <Botao color={'red'} label={'='} content={'='} action={addResult}></Botao>
      </View>
    )
}
const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        flexWrap:"wrap",
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').height/8)*5,
        flexGrow:0,
    }
  })
  