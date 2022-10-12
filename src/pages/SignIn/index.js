import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import * as animatable from 'react-native-animatable'
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </animatable.View>

            <animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu email"
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Inicio')}>
                    <Text style={styles.textButton}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.textRegister}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E90FF',
    },
    containerHeader: {
        marginTop: '24%',
        marginBottom: '8%',
        paddingStart: '5%',

    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'

    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'

    },
    title:{
        fontSize: 20,
        marginTop: 28,
        color: '#1E90FF'
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor:'#1E90FF',
        width: '100%',
        borderRadius: 8,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        color: '#ffff',
        fontSize: 18,
        fontWeight:'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
    },
    textRegister:{
        color:'#1E90FF'
    }


})