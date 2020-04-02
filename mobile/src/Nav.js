import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Main from './index';

export default createAppContainer(
    createSwitchNavigator({
        Main,
    })
);