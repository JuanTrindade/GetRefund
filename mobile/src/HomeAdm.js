import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import perfil from '../assets/perfil.jpg';
import styles from './style';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'


export default function HomeAdm({ navigation, route }) {

    const name = "Dayane Trindade";
    const [value, setValor] = useState(376);
    

   function refund()
   {
       Alert.alert("Aprovado!", "Reembolso aprovado com sucesso :D");
       setValor(value == 0);
       navigation.navigate('index');
   }

   function RefundCancel()
   {
     Alert.alert("Cancelado!" , "Valor cancelado");
     setValor(value == 0);
     navigation.navigate('index');
   }

   if (value <= 0) {
      navigation.navigate("index");
    }

  return (
    <View style={styles.container}>

    <Image source={perfil} style={styles.image} />

    <View style={styles.pd} />
     
  <Text style={styles.homeadmText}>Olá {route.params.nome}</Text>
  <Text style={styles.textC}>Valor á ser reembolsado: R${value}</Text>

  <View style={{marginBottom: 30}} />

      <TouchableOpacity 
      style={styles.button}
      onPress={refund}
      >
        <Feather name="check-circle" size={23, 23} />
          <Text style={styles.text}>Aprovar reembolso</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={RefundCancel}
      style={styles.button}
      >
        <MaterialIcons name="cancel" size={23, 23} />
          <Text style={styles.text}>Cancelar reembolso</Text>
      </TouchableOpacity>
    </View>
  );
}

