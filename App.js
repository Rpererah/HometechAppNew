import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import React from 'react'
import Routes from './Routes/Routes'
import AutenticaProvider from './contexts/Autenticacao';

function App() {
  const defaultAppMessaging = messaging();
  return (
    <NavigationContainer>
          <AutenticaProvider>
            <Routes/>
          </AutenticaProvider>
    </NavigationContainer>
 )
}

export default App;