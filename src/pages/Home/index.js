import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardMessage from '../../../components/CardMessage';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const [eventos, setEventos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {

        const subs = navigation.addListener('focus', () =>
        {
            api.get('List').then(({ data }) => {
                setEventos(data)
            });
        })

    }, [])

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Search')}
            >
                <Text style={styles.buttonText}>Cadastrar novo evento</Text>
            </TouchableOpacity>

            {eventos.map(item => {
                return <Text key={item.Codigo} style={styles.text}>{item.NomeEvento}</Text>
            })}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
    },

    text: {
        fontSize: 25,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#00FF7F',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})