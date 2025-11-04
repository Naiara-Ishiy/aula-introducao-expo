import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';

import Exemplo01 from './src/exemplos/001';
import Exemplo02 from './src/exemplos/002';
import Exemplo03 from './src/exemplos/003';
import Exemplo04 from './src/exemplos/004';
import Exemplo05 from './src/exemplos/005';
import Exemplo06 from './src/exemplos/006';
import Exemplo08 from './src/exemplos/008';

import Atividade01 from './src/atividades/atv01';
import Atividade02 from './src/atividades/atv02';
import Atividade03 from './src/atividades/atv03';
import Atividade04 from './src/atividades/atv04';
import Atividade05 from './src/atividades/atv05';
import Atividade06 from './src/atividades/atv06';
import Atividade07 from './src/atividades/atv07';
//import Atividade08 from './src/atividades/atv08';

export default function App() {
  return (
    <View style={styles.container}>
        <Exemplo08/>
      <StatusBar style="auto"/>
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    paddignTop: Constants.statusBarHeight,
    backgroundColor: '#B71C1C',
  },
});