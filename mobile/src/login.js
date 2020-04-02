import React, {useState} from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './style';
import logo from '../assets/logo.png'


export default function login({ navigation }){

    const[user, setUser] = useState("");
    const[pass, setPass] = useState("");

    function Back(){
        navigation.navigate('Main');
    }

    function login()
    {
        Alert.alert('usuario: ' + user + " " + 
        "senha: " + pass);
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
            
        </KeyboardAvoidingView>
    );
}