import {StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#B39DDB',
        borderWidth: RFPercentage(0.6),
        width: '90%',
        padding: 8,
        alignItems: 'center',
        borderRadius: 20, 
        marginBottom: RFPercentage(1)
    },
    titulo:{
        fontSize: RFPercentage(3),
        color: '#121212',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: RFPercentage(1)
    },
    texto:{
        fontSize: RFPercentage(2),
        color: '#fafafa',
        textAlign: 'justify'
    },
    imagem:{
        height: RFPercentage(15),
        width: RFPercentage(12),
        resizeMode: 'strecht'
    },
    containImg: {
        width: '30%'
    },
    containTxt: {
        width: '70%'
    }
});
export default styles;