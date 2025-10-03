import {View,Text} from 'react-native';
import styles from './styles';

function Mensagem ({titulo, children}){
    return(
        <View style={styles.container}>

            <View style={styles.imagem}>
                <Image source = {imagem} style = {styles.imagem}>
            </View>

            <View style={styles.paragrafo}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.texto}>{children}</Text>
            </View>
        </View>
    )
};
export default Mensagem;