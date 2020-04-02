import * as React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './style';
import logo from '../assets/logo.png'

export default function cadastrar({ navigation }){

    function logon()
    {
        navigation.navigate('login');
    }

    function cad()
    {
        navigation.navigate('CadUser')
    }

    return(
        <View style={styles.container}>
            <Image source={logo} size={50, 50} style={{marginBottom: 25, marginTop: 30}} />
            
            <View style={styles.pd} />

            <TouchableOpacity 
            style={styles.button}
            onPress={logon}
            >
                <Text style={styles.textC}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.button}
            onPress={cad}
            >
                <Text style={styles.textC}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}