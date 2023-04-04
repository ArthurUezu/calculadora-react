import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Display } from './components/Display';
import { Pad } from './components/Pad';

export default function App() {
  const [value, setValue] = useState('0');
  return (
    <View style={styles.container}>
      <Display value={value}></Display>
      <Pad setValue={setValue} value={value}></Pad>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
