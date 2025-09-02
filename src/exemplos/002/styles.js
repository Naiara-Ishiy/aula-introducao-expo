import { StyleSheet } from "react-native";
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fafafa',
        padding: 8,
        flex: 1,
        alignItems: 'center',
        borderRadius: 20
    }, 
    titulo:{
        fontSize: RFPercentage(3),
        COLOR: '#B388FF',
        boderWidth: 2,
        borderColor: '#90CAF9',
        marginTop: 10,
        marginBottom: 10,
        padding:8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20
    },
    imagem:{
        //height: RFPercentage(10),
        //width: RFPercentage(20),
        width: '80%',
        resizeMode: 'contain'
    }
});
export default styles