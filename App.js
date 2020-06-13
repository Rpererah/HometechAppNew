import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import { View, StatusBar } from 'react-native'


import Routes from './Routes/Routes'
import AutenticaProvider from './contexts/Autenticacao';

function App() {
  return (
    <NavigationContainer>
          <AutenticaProvider>
            <Routes/>
          </AutenticaProvider>
    </NavigationContainer>
 )
}

export default App;