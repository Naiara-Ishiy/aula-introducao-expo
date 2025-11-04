import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        borderRadius: RFPercentage (2),
        padding: RFPercentage (1),
    },
    titulo: {
        fontSize: RFPercentage (3),
        color: ''
    }
});