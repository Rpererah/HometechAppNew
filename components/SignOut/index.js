import React,{useState,useEffect} from 'react'
import { View,Button,Text,Dimensions,Image,TouchableOpacity,StatusBar,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import {useAutentic} from '../../contexts/Autenticacao';
import { createDrawerNavigator,DrawerItem} from '@react-navigation/drawer';

import MeusDispositivos from './MeusDispositivos'
import Sobre from './sobre'
import Home from './Home'



function CustomDrawerContent(props,navigation) {

    function Deslogar(){
        
        AsyncStorage.clear().then(()=>{
            setAutentic(false);
        })
    }
    const {Autentic,setAutentic} =useAutentic();
    const altura=Dimensions.get('screen').height
    const [focus,setFocus]=useState(true)
    const [focus2,setFocus2]=useState(false)
    const [focus3,setFocus3]=useState(false)
    
    return (
        <>
      <View style={{backgroundColor:'#2e69b2'}}>
      <View style={{flexDirection:'row',alignItems:'center',alignContent:'center',backgroundColor:'#a2c6f2'}}>
        <Image source={require('./../../assets/img/LHT3.png')}
        style={{height:75,width:60,}}
        />
        <Text style={{fontSize:28,fontFamily:'notoserif'}} >   Home Tech</Text>
        </View>
        <DrawerItem
        label="  Home"
        icon={({ focused, color, size }) =><Ionicons name={'md-home'} size={size} color={color} focused={focused}/>}
        onPress={()=>props.navigation.navigate('Home')+setFocus(true)+setFocus2(false)+setFocus3(false)}
        activeTintColor='#FCA700'
        inactiveTintColor='white'
        focused={focus}
      />
      <DrawerItem
        label="Meus Dispositivos"
        icon={({ focused, color, size }) =><MaterialCommunityIcons name={'mixcloud'} size={28} color={color} focused={focused}/>}
        onPress={()=>props.navigation.navigate('Iluminação')+setFocus2(true)+setFocus(false)+setFocus3(false)}
        activeTintColor='#FCA700'
        inactiveTintColor='white'
        focused={focus2}
      />  
      <DrawerItem
        label="   Sobre"
        icon={({ focused, color, size }) =><Ionicons name={'ios-information-circle'} size={size} color={color} focused={focused}/>}
        onPress={()=>props.navigation.navigate('Sobre')+setFocus3(true)+setFocus(false)+setFocus2(false)}
        activeTintColor='#FCA700'
        inactiveTintColor='white'
        focused={focus3}
      /> 
        <View style={{alignItems:'center',marginTop:'180%'}}>
        <TouchableOpacity style={{backgroundColor:'#d3cdcd',width:100,borderRadius:20,height:30,justifyContent:'center',marginBottom:50}} onPress={Deslogar}><Text style={{textAlign:'center'}}>Deslogar</Text></TouchableOpacity>
        </View>
        </View>
  </>
    );
  }





function SignOut() {
    
    const Drawer = createDrawerNavigator();
    
     
       

    return (
        <>
        <StatusBar
        backgroundColor='#0F0821'
        />
        <Drawer.Navigator drawerContent={(props) =><CustomDrawerContent {...props} />} initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen  name='Iluminação' component={MeusDispositivos}/>
        <Drawer.Screen name="Sobre" component={Sobre}/>
        
      </Drawer.Navigator>
      </>
        );
    }
    
    export default SignOut;
    
    
    