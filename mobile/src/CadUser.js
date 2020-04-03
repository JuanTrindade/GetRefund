import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import styles from './style';
import logo from '../assets/logo.png';

export default function CadUser({ navigation }){

    const [usern, setUsern] = useState("");
    const [passn, setPassn] = useState("");
    const [email, setEmail] = useState("");

    function backHome()
    {
        navigation.navigate('Main')
    }

    function UserCad()
    {
        Alert.alert("usuario: " + usern + " " + "E-mail: " + email + " " + "Senha: " + passn );
    }

    return(
        <KeyboardAvoidingView 
        style={styles.container}
        >

            <Image source={logo} style={{marginBottom: 70, marginTop: 30}} />

            <Text style={styles.label}>Nome de usuario</Text>
            <TextInput
            value={usern}
            onChangeText={setUsern} 
            style={styles.input}
            ></TextInput>

            <Text style={styles.label}>E-mail</Text>
            <TextInput
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCompleteType='email' 
            style={styles.input}
            ></TextInput>

            <Text style={styles.label}>Senha</Text>
            <TextInput
            value={passn}
            onChangeText={setPassn} 
            secureTextEntry={true}
            autoCapitalize="none" 
            style={styles.input}
            ></TextInput>

        <View style={styles.flx}>
            <TouchableOpacity 
            style={styles.buttonLog}
            onPress={UserCad}
            >
                <Text style={styles.text}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonBack}
            onPress={backHome}
            >
                <Text style={styles.text}>Voltar</Text>
            </TouchableOpacity>
        </View>

        </KeyboardAvoidingView>
    );
}
