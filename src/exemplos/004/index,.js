import {View,Text, TextInput} from 'react-native';
import styles from './styles'

function Exemplo04(){

const [texto,setTexto] = useState('');
const [txt2, setTxt2] = useState('Valor Inicial');

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>
        <TextInput
            placeholder="texto de fundo"
            keyboardType="visible-password"
            maxLength={7}
            style={styles.input}
            />
        <Text.style={styles.txt}>{txt2}</Text>
        <TextInput
            value={txt2}
            placeholder='digite sua mensagem'
            keyboardType='ascii-capable'
            maxLength={7}
            style={styles.input}
            />
        </View>
    ); 
}
export default Exemplo04;