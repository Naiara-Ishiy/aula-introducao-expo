import { StyleSheet } from "react-native";
import {RFPercentage} from "react-native-responsive-fontsize";
const styles=StyleSheet.create(
    {  
        container:{
            backgroundColor:'#f00',
            padding:18,
            flex:3,
            alignItems:'center',
            borderRadius:20
            },

        titulo:{
            fontSize:RFPercentage(5),
            color: 'purple',
            fontWeight:'italic',
            borderWidth:2,
            borderColor:'deepskyblue',
            marginTop:15,
            marginBottom:20,
            padding:18,
            width:'100%',
            heigth:8,
            textAlign:'center',
            textAlignVertical:'center',
            borderRadius:20},
        
        txt:{
            fontSize: RFPercentage(2.8)
            }
        }
    );
export default styles;