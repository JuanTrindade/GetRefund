import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Solicitation() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80'}} />

      <View style={styles.content}>
        <Text style={styles.label}>Solicitante: Juan Trindade</Text>

        <Text style={styles.label}>Valor: R$ 156,97</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}>
          <Feather name="x" size={28} color="#cd1032"/>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}>
          <Feather name="check" size={28} color="#1abc9c"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
