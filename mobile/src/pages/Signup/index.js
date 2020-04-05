import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import logo from '../../assets/img/logo.png';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { navigate } = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.label}>Nome de usuário</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}/>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCompleteType='email'
        style={styles.input}/>

      <Text style={styles.label}>Senha</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
        style={styles.input}/>

      <TouchableOpacity
        style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonAlt}
        onPress={() => navigate('Start')}>
        <Text style={styles.buttonTextAlt}>Retornar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
