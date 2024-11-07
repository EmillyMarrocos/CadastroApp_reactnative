import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const TeladeLogin = ({ navigation }) =>  {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        Alert.alert('Login realizado com sucesso!');
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: '' }} style={styles.icon} />
            <Text style={styles.title}>LOGIN</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu email"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                secureTextEntry
            />

            <View style={styles.buttonContainer}>
                <Button title="Entrar" onPress={handleLogin} />
                <Button title="Cadastrar" onPress={() => navigation.navigate('CADASTRO')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF'
    },

    icon: {
        width: 90,
        height: 90,
        marginBottom: 20
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },

    input: {
        width: '100%',
        height: 40,
        borderColor: '#DDD',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        marginTop: 5
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },

    buttonContainer: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default TeladeLogin;