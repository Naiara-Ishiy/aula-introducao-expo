import { StyleSheet } from "react-native";
import {RFPercentage} from "react-native-responsive-fontsize";

const styles=StyleSheet.create(
    {  
        container:{
            backgroundColor:'white',
            flex:1,
            alignItems:'center',
            },

        titulo:{
            fontSize:RFPercentage(5),
            color: 'darkblue',
            fontWeight:'bold',
            borderWidth:2,
            borderColor:'darkBlue',
            margin: RFPercentage(5),
            width:'90%',
            height:80,
            textAlign:'center',
            textAlignVertical:'center',
            borderRadius:20},
        
        txtSaida:{
            margin: 6,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'darkblue',
            borderWidth: 2,
            borderRadius: 20,
            borderColor: 'darkblue',
            textAlign: 'center',
            textAlignVertical: 'center',
            width: '70%'
        },
        txtEntrada: {
            backgroundColor: 'darkblue',
            borderWidth: 4,
            textAlignVertical: 'center',
            fontSize: 22,
            borderColor: 'white',
            height: RFPercentage(6),
            color: 'white',
            width: '30%',
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
            textAlign: 'center'
        },
        button: {
            marginTop: 20,
            backgroundColor: "cyan",
            height: 40,
            justifyContent: 'center',
            borderRadius: 10
        },
        txtbutton: {
            color: 'white',
            fontSize: RFPercentage(2),
            margin: RFPercentage(2),
            fontWeight: 'bold'
        }
    }
);
export default styles;