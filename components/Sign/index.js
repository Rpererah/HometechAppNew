import React,{useState,useEffect} from 'react'
import { View,Text, TextInput, TouchableOpacity,Image, StatusBar } from 'react-native'
import ImageOverlay from "react-native-image-overlay";
import AsyncStorage from '@react-native-community/async-storage';


import auth from '@react-native-firebase/auth'
import estilo from './estilo';

import {useAutentic} from '../../contexts/Autenticacao';


 function Sign() {

    useEffect(() => {
        async function loadStoragedData(){
       const storaged = await AsyncStorage.getItem('@Auth');
       const conteudo=JSON.parse(storaged);
      
       if(conteudo==true){
        setAutentic(true);
           
       }
       else{
           console.log('fail')
       }
        }
        loadStoragedData();
     }, []);


    const {Autentic,setAutentic}=useAutentic();
    const [Usuario, setUsuario] = useState('.')
    const [Senha, setSenha] = useState('.')
    const [msgErro,setMsgErro]= useState(false)

    function Logar(){
        auth()
        .signInWithEmailAndPassword(Usuario,Senha)
        .then(async() => {
            setAutentic(true);
          console.log('Usuario Logado');
          const response=await AsyncStorage.setItem('@Auth',JSON.stringify(true));
        })
        .catch(error => {   
          console.log(error);
          setAutentic(false);
          setMsgErro(true)
        });


        // setCount(true);
        // console.log(Usuario);
        // console.log(Senha)
    }
    
    
    
    return (
        <View>
            <StatusBar
            backgroundColor='#0F0821'
            />
            <ImageOverlay 
            source={require("./../../assets/img/fundo.jpg")}
    overlayColor="black"
    overlayAlpha={0.60}
    height={'100%'}
    >

            <View style={{flex:1}}>
            <Image
            style={{height:120,width:180,marginTop:50}}
            source={require('./../../assets/img/ht2T.png')}
            />
            </View>
            <View style={{flex:1}}>
            <TextInput
            style={{backgroundColor:'white',marginBottom:40,borderRadius:20,width:300,height:50,opacity:0.65}}
            placeholder={'E-mail'}
            inlineImageLeft='user'
            onChangeText={text=>setUsuario(text)}
            />
            <TextInput
            style={{backgroundColor:'white',marginBottom:40,borderRadius:20,width:300,height:50,opacity:0.65}}
            placeholder={'Senha'}
            secureTextEntry={true}
            inlineImageLeft='pass'
            onChangeText={e=>setSenha(e)}
            />
            <TouchableOpacity
            style={{backgroundColor:'#FFC247',height:50,height:50,borderRadius:20,justifyContent:'center'}}
            onPress={Logar}
            >
                <Text style={{color:"black",textAlign:'center'}}>Logar</Text>
                </TouchableOpacity>
                
             
    
    
            {msgErro ?(<Text style={{color:'white',textAlign:'center',marginTop:'2%'}}>Usuario ou senha Incorretos</Text>):(<Text>Insira Usuario e senha</Text>)}
            </View>
            </ImageOverlay>
            
            

        </View>
    );
}

export default Sign;


