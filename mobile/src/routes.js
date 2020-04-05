import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './index';
import cadastrar from './cad';
import login from './login';
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
                name="index" 
                component={Main}/>
            <Stack.Screen 
                name="cad" 
                component={cadastrar}/>
            <Stack.Screen 
                name="login" 
                component={login}/>
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