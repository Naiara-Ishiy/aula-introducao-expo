import { StyleSheet } from "react-native";
//StyleSheet: API do React Native para definir estilos de forma otimizada
import {RFPercentage} from "react-native-responsive-fontsize";
//RFPercentage: Biblioteca react-native-responsive-fontsize usada para definir tamanhos de fonte de forma responsiva, baseada na porcentagem do tamanho da tela
const styles=StyleSheet.create(
    {  
        container:{
            backgroundColor:'#fff',
            padding:8,
            flex:1, 
            //Ocupa todo o espaço disponível na tela 
            alignItems:'center',
            borderRadius:20
            //Deixa as bordas arredondadas.
            },

        titulo:{
            fontSize:RFPercentage(5),
            color: 'deepskyblue',
            fontWeight:'bold',
            borderWidth:2,
            borderColor:'deepskyblue',
            marginTop:10,
            marginBottom:10,
            padding:8,
            width:'100%',
            heigth:80,
            textAlign:'center',
            textAlignVertical:'center',
            //somente no Android
        borderRadius:20},
        
        txt:{
            fontSize: RFPercentage(2.2)
            //Define um tamanho de fonte responsivo(2.2% da altura da tela)
            },
        botao: {
            backgroundColor: '#777',
            width: '60%',
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1),
            alignItems: 'center'},
        txtBotao: {
            color: '#4527A0',
            fontSize: RFPercentage(2)
        }
        }
    );
export default styles;