import {View, Text} from 'react-native';
import styles from './styles';
import Mensagem02 from './mensagem';
import giratina from '../../../assets/giratina_ex.webp';
import lunala from '../../../assets/lunala_ex.webp';

function Atividade02(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 02</Text>

            <Mensagem02
                imagem={giratina}
                titulo={'Giratina EX'}
                texto={'Ele é tão violento que tenta se proteger da chuvqa se escondendo na grama'}>
            </Mensagem02>
            <Mensagem02
                imagem={giratina}
                titulo={'aaaaaa'}
                texto={'aaaa'}>
            </Mensagem02>
        </View>
    );
}
export default Atividade02