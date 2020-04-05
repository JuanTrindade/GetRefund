import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './pages/Start';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Solicitation from './pages/Solicitation';

const Stack = createStackNavigator();

export default function Routes(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{headerShown: false}}/>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}/>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}/>

      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerTitle: 'Início'}}/>
      <Stack.Screen
        name="Solicitation"
        component={Solicitation}
        options={{headerTitle: 'Solicitação'}}/>

    </Stack.Navigator>
  );
}
