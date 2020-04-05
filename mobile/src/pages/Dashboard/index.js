import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const sampleData = [{
  id: 1,
  picture: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80',
  person: 'Dayane Trindade',
  value: 156,
}, {
  id: 2,
  picture: 'https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  person: 'Juan Trindade',
  value: 156,
}, {
  id: 3,
  picture: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  person: 'Juan Trindade',
  value: 156,
}]

export default function Dashboard() {
  const { navigate } = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.picture }}
        style={styles.itemPicture} />

      <View style={styles.aside}>
        <Text
          style={styles.title}
          numberOfLines={1}>Reembolso {item.id}</Text>
        <Text
          style={[styles.title, {color: '#2ecc9c'}]}
          numberOfLines={1}>R$ {item.value}</Text>

        <TouchableOpacity
          onPress={() => navigate('Solicitation')}>
          <Text
            style={styles.buttonText}
            numberOfLines={1}>Ver mais detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>Olá, (Usuário)!</Text>
      <Text style={styles.legend}>Solicitações pendentes</Text>

      <FlatList
        data={sampleData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}/>
    </View>
  );
}

