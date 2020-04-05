import React, {useState} from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './style';
import logo from './assets/img/logo.png'
import * as MailComposer from 'expo-mail-composer';

export default function login({ navigation }){

    const[user, setUser] = useState("");
    const[pass, setPass] = useState("");

    function Back(){
        navigation.navigate('index');
    }

    function login()
    {
        Alert.alert('usuario: ' + user + " " +
        "senha: " + pass);
        navigation.navigate('HomeUser');
    }

    function SendEmail()
    {
        MailComposer.composeAsync({
            subject: "teste de mail composer",
            recipients: ['juantrindade123@gmail.com'],
            body: 'teste, ola isso é um teste keke'
        })
    }

    return(
        <KeyboardAvoidingView
        style={styles.container}
        beahvior="padding"
        >
            <Image source={logo} size={50, 50} style={{marginBottom: 80, marginTop: 30}} />

            <Text style={styles.label}>Usuario<Feather name="user" size={23, 23} /></Text>
            <TextInput
            value={user}
            onChangeText={setUser}
            style={styles.input}
            ></TextInput>

            <Text style={styles.label}>Senha <Feather name="lock" size={23, 23} /></Text>
            <TextInput
            value={pass}
            onChangeText={setPass}
            secureTextEntry={true}
            autoCapitalize="none"
            style={styles.input}
            ></TextInput>

        <View style={styles.flx}>
            <TouchableOpacity
            style={styles.buttonLog}
            onPress={login}
            >
                <Text style={styles.textL}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonBack}
            onPress={Back}
            >
                <Text style={styles.textL}>Voltar</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={SendEmail}
            >
                <Text style={{ fontSize: 17, color: '#000', marginTop: 30 }}>Teste mail composer</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}
