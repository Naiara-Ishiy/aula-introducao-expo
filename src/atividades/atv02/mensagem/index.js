import {View,Text, Image} from 'react-native';
import styles from './styles';

function Mensagem02({titulo, texto, imagem}){
    return(
        <View style={styles.container}>
            <View style={styles.containImg}>
                <Image source={imagem} style={styles.imagem}></Image>
            </View>
            <View style={styles.containTxt}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.texto}>{texto}</Text>
            </View>
        </View>
    );
}
export default Mensagem02;