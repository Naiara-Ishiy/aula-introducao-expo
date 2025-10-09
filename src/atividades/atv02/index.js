import {View, Text, Image} from 'react-native';
import styles from './styles';
import Mensagem02 from './mensagem';

function Atividade02(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 2</Text>

            <Mensagem02 titulo={'ERRO'}>Você não clicou correta</Mensagem02>
            <Mensagem02 titulo={'SUCESSO'}>Acesso permitido</Mensagem02>
            <Mensagem02 titulo={'AVISO'}> O tempo acabou!</Mensagem02>
        </View>
    );
}

export default Atividade02