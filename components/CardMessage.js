import React from "react";
import { StyleSheet, Text, View } from "react-native-web";

export default function CardMensagem({nomeEvento}) {

    return (
        <View style={styles.cardMensagem}>
            <Text style={styles.mensagem}>{nomeEvento}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardMensagem:
    {
        borderRadius: 10,
        borderWidth: 1,
        padding: 4,
        margin: 2,
        borderColor: 'gray',
        width: 320,
        height: 80,
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'gray'
    },
    tituloMensagem:
    {
        fontSize: 16,
        textAlign:'center'
    },
    mensagem:
    {
        fontSize: 12,
        fontWeight:'normal',
        textAlign:'center'
    },



});