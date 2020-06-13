import React,{useState,useEffect} from 'react'
import { View,Button,Text,Dimensions,Image,TouchableOpacity,StatusBar,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MenuBar from '../menubar';
export default function Home({navigation}){
    
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