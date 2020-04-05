import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/logo.png';
import styles from './style';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Main({ navigation }) {

  function handlepress(){
    navigation.navigate('cad');
  }
  
  function handlenavigate(){
    navigation.navigate('loginAdm')
  }

  return (
    <View style={styles.container}>

    <Image source={logo} size={50,50} style={{marginBottom: 25, marginTop: 30}} />

    <View style={styles.pd} /> 

      <TouchableOpacity 
      style={styles.button}
      onPress={handlenavigate}
      >
        <Feather name="user" size={23, 23} />
          <Text style={styles.text}>Sou Administrador</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.button}
      onPress={handlepress}
      >
        <MaterialCommunityIcons name="cash-refund" size={23, 23} />
          <Text style={styles.text}>Necessito de reembolso</Text>
      </TouchableOpacity>
    </View>
  );
}

