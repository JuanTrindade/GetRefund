import React, { useState } from 'react';
import { Platform, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/img/logo.png'
import styles from './styles';

export default function Signin(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
        <Image source={logo} style={styles.logo}/>

        <Text style={styles.label}>Usuário</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input} />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          style={styles.input} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Dashboard')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonAlt}
          onPress={() => navigate('Start')}>
          <Text style={styles.buttonTextAlt}>Retornar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
