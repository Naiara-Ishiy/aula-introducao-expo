import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo01 from './src/exemplos/001';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo01>Open up App.js to start working on your app!</Exemplo01>
      <StatusBar styles="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:10,
  },
});
