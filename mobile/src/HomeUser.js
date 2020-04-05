import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity, Alert, TextInput, Image, View } from 'react-native';
import styles from './style';
import { Feather, FontAwesome } from '@expo/vector-icons';
import logo from '../assets/logo.png';
import cameraPage from './camera';

export default function HomeUser({ navigation, route }){

    function back(){
        navigation.navigate('index');
    }

    function photo()
    {
        navigation.navigate('cameraPage');
    }

    function send()
    {
        Alert.alert("Ops!" , "Em Produção :/")
    }

    return(
        <KeyboardAvoidingView 
        style={styles.container}>

            <Image source={logo} style={{ marginBottom: 130 }} />

            <Text style={styles.label}>Valor</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize='none'
            keyboardType='numeric'
            />

            <View style={styles.flx}>

            <TouchableOpacity 
            onPress={photo}
            style={styles.buttonLog}
            >
            <Feather name="camera" size={23, 23} />
                <Text style={styles.text}>Tirar foto</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={send}
            style={styles.buttonBack}
            >
            <FontAwesome name="send" size={23, 23} />
                <Text style={styles.text}>Enviar</Text>
            </TouchableOpacity>

            </View>

            <TouchableOpacity 
            onPress={back}
            style={styles.button}
            >
                <Text style={styles.textL}>Voltar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
