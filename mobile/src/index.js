import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/logo.png';
import styles from './style';

export default function Main() {
  return (
    <View style={styles.container}>

    <Image source={logo} size={50,50} style={{marginBottom: 30}} />

      <TouchableOpacity 
      style={styles.button}>
          <Text style={styles.text}>Sou Administrador</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.button}>
          <Text style={styles.text}>Necessito de reembolso</Text>
      </TouchableOpacity>
    </View>
  );
}

