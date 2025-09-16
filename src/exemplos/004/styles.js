import { StyleSheet } from "react-native";
import {RFPercentage} from "react-native-responsive-fontsize";

const styles=StyleSheet.create(
    {  
        container:{
            backgroundColor:'#fff',
            padding:8,
            flex:1,
            alignItems:'center',
            borderRadius:20
            },

        titulo:{
            fontSize:RFPercentage(5),
            color: '#880E4F',
            fontWeight:'bold',
            borderWidth:2,
            borderColor:'#BA68C8',
            marginTop:10,
            marginBottom:10,
            padding:8,
            width:'100%',
            height:80,
            textAlign:'center',
            textAlignVertical:'center',
            borderRadius:20},
        
        txt:{
            fontSize: RFPercentage(2.2)
            },
        input: {
            borderWidth: RFPercentage(0.5),
            borderColor: '#E91E63',
            width: '80%',
            borderRadius: RFPercentage(1.5),
            pading: RFPercentage(2),
            textAlign: 'center'
        }
        }
    );
export default styles;