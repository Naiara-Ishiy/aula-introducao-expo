import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';

import Exemplo01 from './src/exemplos/001';
import Exemplo02 from './src/exemplos/002';
import Exemplo03 from './src/exemplos/003';

import Atividade01 from './src/atividades/atv01';
import Atividade03 from './src/atividades/atv03';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade03 />
      <StatusBar style="auto"/>
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4527A0',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:35,
    paddignTop: Constants.statusBarHeight
  },
});