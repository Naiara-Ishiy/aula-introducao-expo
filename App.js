import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Atividade01 from './src/atividades/atv01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade01/>
      <StatusBar styles="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:35,
    paddignTop: Constants.statusBarHeight
  },
});