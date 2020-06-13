import React from 'react'
import {useAutentic} from '../contexts/Autenticacao';
import { createStackNavigator } from '@react-navigation/stack';
import Sign from '../components/Sign'
import SignOut from '../components/SignOut'

function Routes() {
    const Stack = createStackNavigator();
    const {Autentic}=useAutentic();
    return (
                <Stack.Navigator headerMode="none" >
            
                {Autentic ? (
                    <Stack.Screen name="Tela Inicial"  component={SignOut} />
                ):(
                    <Stack.Screen name="Tela de login" component={Sign} />
                )}
                </Stack.Navigator>
                
    )
}

export default Routes
