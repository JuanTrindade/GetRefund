import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './pages/Start';
import Signin from './pages/Signin';

import loginAdm from './logAdm';
import CadUser from './CadUser';
import HomeAdm from './HomeAdm';
import HomeUser from './HomeUser';
import cameraPage from './camera';

const Stack = createStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator headerMode='none'>
      <Stack.Screen
        name="Start"
        component={Start}/>
      <Stack.Screen
        name="Signin"
        component={Signin}/>
      <Stack.Screen
        name="loginAdm"
        component={loginAdm}/>
      <Stack.Screen
        name="CadUser"
        component={CadUser}/>
      <Stack.Screen
        name="HomeAdm"
        component={HomeAdm}/>
      <Stack.Screen
        name="HomeUser"
        component={HomeUser}/>
      <Stack.Screen
        name="cameraPage"
        component={cameraPage}/>
    </Stack.Navigator>
  );
}
