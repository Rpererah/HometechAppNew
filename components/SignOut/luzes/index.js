import React,{useState} from 'react'
import { View,TouchableOpacity,Switch, Text, Dimensions } from 'react-native'
import MenuBar from './../menubar'
import Switchb from './switch'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function Mdispositivos({navigation}){
    const altura=Dimensions.get('screen').height
    const AbraTeSesamo=()=>{
        navigation.openDrawer();
    }
    return(
<View>
<MenuBar>
    <TouchableOpacity onPress={AbraTeSesamo}>
      <Ionicons name={'md-menu'} size={40} color={'white'}/>
    </TouchableOpacity>
</MenuBar>
        
        </View>
    )
}

function Portas({navigation}){
return(
    <View>
        <Text>OI</Text>
    </View>
);
}

function luzes({navigation}) {
    
    const Tab = createBottomTabNavigator();
    
    return (
        <>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Campainha" component={Mdispositivos} />
        <Tab.Screen name="Luzes" component={Portas} />
        <Tab.Screen name="Despertados" component={Portas} />
      </Tab.Navigator>
        </>
    )
}

export default luzes;
