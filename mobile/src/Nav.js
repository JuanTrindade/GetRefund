import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Main from './index';
import cadastrar from './cad';
import login from './login';
import loginAdm from './logAdm';
import CadUser from './CadUser';

export default createAppContainer(
    createSwitchNavigator({
        Main,
        cadastrar,
        login,
        loginAdm,
        CadUser
    })
);