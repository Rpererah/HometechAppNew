import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import light from './light';
import Despertador from './despertador';
import Campainha from './campainha';


function MeusDispositivos({navigation}) {
    
    const Tab = createBottomTabNavigator();    
    return (
        <>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Despertador') {
              iconName = focused
                ? 'alarm'
                : 'alarm-plus';
            } else if (route.name === 'Luzes') {
              iconName = focused ? 'alarm-light' : 'alarm-light-outline' ;
            }
            else if (route.name === 'Campainha') {
                iconName = focused ? 'doorbell-video' : 'light-switch';
              }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FCA700',
          inactiveTintColor: '#FCA700',
          style:{backgroundColor:'#2e69b2'}
        }}
      >
        <Tab.Screen name="Campainha" component={Campainha} />
        <Tab.Screen name="Luzes" component={light} />
        <Tab.Screen name="Despertador" component={Despertador} />
      </Tab.Navigator>
        </>
    )
}

export default MeusDispositivos;
