import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import perfil from '../assets/perfil.jpg';
import styles from './style';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'


export default function HomeAdm({ navigation }) {

    const name = "Dayane Trindade";
    const [value, setValor] = useState(137.80);

   if (value <= 0 || !refund || !RefundCancel) {
       Alert.alert("Ops!" , "Nenhum reembolso pendente ;D");
       navigation.navigate("Main");
   }
    

   function refund()
   {
       Alert.alert("Aprovado!", "Reembolso aprovado com sucesso :D");
       setValor(value == 0);
       navigation.navigate('Main');
   }

   function RefundCancel()
   {
     Alert.alert("Cancelado!" , "Valor cancelado");
     setValor(value == 0);
     navigation.navigate('Main');
   }

  return (
    <View style={styles.container}>

    <Image source={perfil} style={{ marginTop: 30, width: 170, height: 170}} />

    <View style={styles.pd} />
     
  <Text style={styles.homeadmText}>Olá {name}</Text>
  <Text style={styles.textC}>Valor á ser reembolsado: R${value}</Text>

  <View style={{marginBottom: 50}} />

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

