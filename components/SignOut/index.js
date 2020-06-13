import React,{useState,useEffect} from 'react'
import { View,Button,Text,Dimensions,Image,TouchableOpacity,StatusBar,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import {useAutentic} from '../../contexts/Autenticacao';
import { createDrawerNavigator,DrawerItem} from '@react-navigation/drawer';

import luzes from './luzes'
import Sobre from './sobre'
import MenuBar from './menubar';




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



function Home({navigation}){
    
    const AbraTeSesamo=()=>{
        navigation.openDrawer();
    }   

    return (
    <ScrollView>
        <StatusBar
        backgroundColor='#0F0821'
        />
        <MenuBar>
    <TouchableOpacity onPress={AbraTeSesamo}>
      <Ionicons name={'md-menu'} size={40} color={'white'}/>
    </TouchableOpacity>
</MenuBar>
<ScrollView>
 
  <Card>
    <CardImage 
      source={{uri: 'https://kokar.com/wp-content/uploads/2019/06/Casa-automatizada-Realize-o-sonho-do-seu-cliente-com-a-automa%C3%A7%C3%A3o-residencial-1170x700.jpg'}} 
      
    />
    <CardTitle
      subtitle="Rafael Araújo"
    />
    <CardContent text="Quanto custa automatizar tudo hoje em dia?" />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => {}}
        title="Compartilhar"
        color="#FEB557"
      />
      <CardButton
        onPress={() => {}}
        title="Ir ao Blog"
        color="#FEB557"
      />
    </CardAction>
  </Card>


  <Card>
    <CardImage 
      source={{uri: 'https://www.b2home.com.br/wp-content/uploads/2018/01/O-que-automatizar-na-minha-casa.jpg'}} 
      
    />
    <CardTitle
      subtitle="Pedro "
    />
    <CardContent text="Especialista falam sobre o futuro da automação" />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => {}}
        title="Compartilhar"
        color="#FEB557"
      />
      <CardButton
        onPress={() => {}}
        title="Ir ao Blog"
        color="#FEB557"
      />
    </CardAction>
  </Card>

  <Card>
    <CardImage 
      source={{uri: 'https://www.2quartos.com/wp-content/uploads/2016/03/casa-conectada.jpg'}} 
      
    />
    <CardTitle
      subtitle="Julio Cesar"
    />
    <CardContent text="Novidades em nosso Portal" />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => {}}
        title="Compartilhar"
        color="#FEB557"
      />
      <CardButton
        onPress={() => {}}
        title="Ir ao Blog"
        color="#FEB557"
      />
    </CardAction>
  </Card>
  
 
</ScrollView>
    
    </ScrollView>
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
        <Drawer.Screen  name='Iluminação' component={luzes}/>
        <Drawer.Screen name="Sobre" component={Sobre}/>
        
      </Drawer.Navigator>
      </>
        );
    }
    
    export default SignOut;
    
    
    