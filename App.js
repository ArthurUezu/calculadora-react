import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Display } from './components/Display';
import { Pad } from './components/Pad';

export default function App() {
  const [value, setValue] = useState('0');
  const [result, setResult] = useState('0')
  return (
    <View style={styles.container}>
      <Display value={value} result={result}></Display>
      <Pad setValue={setValue} value={value} setResult={setResult} result={result}></Pad>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6767',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
