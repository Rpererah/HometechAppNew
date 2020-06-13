import React,{useState} from 'react'
import { View,TouchableOpacity,Switch, Text, Dimensions } from 'react-native'
import MenuBar from './../menubar'
import Switchb from './switch'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

function Despertador({navigation}){
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
<View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
<Text style={{fontSize:28}}>Em breve</Text>
</View>
        
        </View>
    )
}

function Portas({navigation}){
return(
    <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:40,textAlign:'center',justifyContent:'center',alignContent:'center',alignItems:'center'}}>Em breve</Text>
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
        <Tab.Screen name="Campainha" component={Mdispositivos} />
        <Tab.Screen name="Luzes" component={Portas} />
        <Tab.Screen name="Despertador" component={Despertador} />
      </Tab.Navigator>
        </>
    )
}

export default luzes;
