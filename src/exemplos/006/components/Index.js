import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 6 </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#004D40',
        padding: 8
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#00BFA5'
    },
});