import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import styles from './styles';

import logo from '../../assets/img/logo.png';

export default function Start() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Signin')}>
        <Text style={styles.buttonText}>Acessar minha conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Signup')}>
        <Text style={styles.buttonText}>Quero me cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
