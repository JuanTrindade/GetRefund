import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import {Entypo, AntDesign} from '@expo/vector-icons';
import logo from './assets/img/logo.png';

export default function cameraPage({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camref = useRef(null);
  const [capturedphoto, setCapturedphoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acesso Negado a Câmera</Text>;
  }
  async function TakePic()
  {
    if (camref) {
        const data = await camref.current.takePictureAsync();
        setCapturedphoto(data.uri);
        setOpen(true)
        console.log(data);
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
      style={{ flex: 1 }}
      type={type}
      ref={camref}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={TakePic}
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
              alignContent: 'center',
            }}
            >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}><Entypo name="camera" size={23,23} /></Text>
          </TouchableOpacity>
        </View>
      </Camera>

    {capturedphoto &&

      <Modal
      animationType='slide'
      transparent={false}
      visible={open}
      >
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 20 }}>

        <TouchableOpacity
        style={{margin: 10, marginTop: 50}}
        onPress={() => setOpen(false)}
        onPress={back}
        >
            <AntDesign name='checkcircle' size={50} color='#000' />
        </TouchableOpacity>
        <TouchableOpacity
        style={{margin: 10, marginTop: 50}}
        onPress={() => setOpen(false)}
        >
            <AntDesign name='closecircle' size={50} color='#000' />
        </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
        <Image
        style={{ width: '100%', height: 300, borderRadius: 20, marginBottom: 145 }}
        source={{ uri: capturedphoto }}
        />
        </View>
      </Modal>
    }
    </View>
  )
  function back()
  {
      navigation.navigate('HomeUser');

  }
}
