import React from 'react'
import { View, StatusBar } from 'react-native'
import {useAutentic} from '../contexts/Autenticacao';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Sign from '../components/Sign'
import SignOut from '../components/SignOut'

function Routes() {
    const Stack = createStackNavigator();
    const {Autentic,setAutentic}=useAutentic();
    return (
        <>
            <Stack.Navigator headerMode="none" >
            
                {Autentic ? (
                    <Stack.Screen name="Tela de login"  component={SignOut} />
                ):(
                    <Stack.Screen name="Tela Inicial" component={Sign} />
                )}
                </Stack.Navigator>
                </>
    )
}

export default Routes
