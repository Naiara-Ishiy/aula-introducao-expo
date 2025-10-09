import {View,Text, Image} from 'react-native';
import styles from './styles';

function Mensagem02({texto, imagem}){
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Image source={imagem} style={styles.imagem}></Image>
            </View>
            <View style={styles.containTxt}>
                <Text style={styles.titulo}>Atividade 2</Text>
                <Text style={styles.texto}>{texto}</Text>
                <Text style={styles.preco}>{preco}</Text>
            </View>
        </View>
    );
}
export default Mensagem02;