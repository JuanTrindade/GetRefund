import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Main from './index';
import cadastrar from './cad';
import login from './login';
import loginAdm from './logAdm';
import CadUser from './CadUser';
import HomeAdm from './HomeAdm';
import HomeUser from './HomeUser';
import cameraPage from './camera';

export default createAppContainer(
    createSwitchNavigator({
        Main,
        cadastrar,
        login,
        loginAdm,
        CadUser,
        HomeAdm,
        HomeUser,
        cameraPage

    })
);