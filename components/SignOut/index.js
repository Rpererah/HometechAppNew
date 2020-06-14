import React,{useState,useEffect} from 'react'
import { View,Text,Dimensions,Image,TouchableOpacity,StatusBar,Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useAutentic} from '../../contexts/Autenticacao';
import { createDrawerNavigator,DrawerItem} from '@react-navigation/drawer';
import MeusDispositivos from './MeusDispositivos'
import Sobre from './sobre'
import Home from './Home'
import Modal from 'react-native-modal';




function CustomDrawerContent(props,navigation) {

    function Deslogar(){
        
        AsyncStorage.clear().then(()=>{
            setAutentic(false);
        })
    }
      const [isModalVisible, setModalVisible] = useState(false);
      
      const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    

    const {setAutentic} =useAutentic();
    const [focus,setFocus]=useState(true)
    const [focus2,setFocus2]=useState(false)
    const [focus3,setFocus3]=useState(false)
    
    return (
        <>
      <View style={{backgroundColor:'#2e69b2',opacity:0.95,borderRadius:1}}>
      <View style={{flexDirection:'row',alignItems:'center',alignContent:'center',backgroundColor:'#a2c6f2',opacity:0.85,borderRadius:5}}>
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
        <TouchableOpacity style={{backgroundColor:'#d3cdcd',width:100,borderRadius:20,height:30,justifyContent:'center',marginBottom:50}} onPress={toggleModal}><Text style={{textAlign:'center'}}>Deslogar</Text></TouchableOpacity>
        </View>
        <Modal isVisible={isModalVisible}>
          <View style={{backgroundColor:'#FCA700',height:180,width:300,alignContent:'center',justifyContent:'center',alignItems:'center',marginLeft:'10%',borderRadius:10}}>
            <Text style={{textAlign:'center',color:'black',fontSize:17}}>Você tem certeza que deseja sair?</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{marginLeft:10,marginTop:10}}>
            <Button title="Sair" onPress={Deslogar} color={'red'} />

            </View>
            <View style={{marginLeft:10,marginTop:10}}>

            <Button title="Cancelar" color={'#2e69b2'} onPress={toggleModal}/>
            </View>
            </View>
          </View>
        </Modal>
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