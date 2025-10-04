import {View, Text, Image} from 'react-native';
import styles from './styles';
import img from '../../../assets/giratina_ex.webp';
//import Mensagem from './mensagem';

function Atividade02(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 2</Text>
            <Image source={img} style={styles.imagem}/>

            
        </View>
    );
}
export default Atividade02
            //<Mensagem titulo={'ERRO'}>Você não clicou correta</Mensagem>
            //<Mensagem titulo={'SUCESSO'}>Acesso permitido</Mensagem>
            //<Mensagem titulo={'AVISO'}> O tempo acabou!</Mensagem>