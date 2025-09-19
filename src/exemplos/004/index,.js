import { useState } from 'react';
import {View,Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles'

export default function Exemplo04(){

const [texto,setTexto] = useState('');
const [txt2, setTxt2] = useState('Valor Inicial');
const [mensagem, setMensagem] = useState('');

function handleExibeMensagem(){
    setMensagem(txt2);
    setTxt2('');
}

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>
        <TextInput
            onChangeText={setTexto}
            placeholder="digite sua mensagem"
            keyboardType="ascii-capable"
            maxLength={7}
            style={styles.input}
            />

        <Text style={styles.txt}>{mensagem}</Text>
        <TextInput
            value={txt2}
            onChangeText={SetTxt2}
            placeholder='digite sua mensagem'
            keyboardType='ascii-capable'
            style={styles.input}
            />

        <TouchableOpacity
            style={styles.botao}
            onPress={() => handleExibeMensagem()}
        >
        <Text style={styles.txtbotao}>Exibir mensagem</Text>
        </TouchableOpacity>
        </View>
    ); 
}