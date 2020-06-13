import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import MenuBar from './../menubar'
import Ionicons from 'react-native-vector-icons/Ionicons'


function Sobre({navigation}) {
    const AbraTeSesamo=()=>{
        navigation.openDrawer();
    }
    return (
        <>
        <MenuBar>
<TouchableOpacity onPress={AbraTeSesamo}>
<Ionicons name={'md-menu'} size={40} color={'white'}/>
</TouchableOpacity>
        </MenuBar>
        <View style={{margin:10}}>
            <Text style={{textAlign:'justify',fontSize:18}}>
O projeto Home Tech vem com o objetivo inicial de criar um controle que foque na automação oferecendo um aplicativo que entregue para o usuário uma experiência completa. O trabalho foi feito em Javascript e PHP. O projeto visa auxiliar pessoas com e sem deficiências,
fazendo com que elas tenham uma interação mais simples na sua casa, de maneira com que:
            </Text>
              
            <View>
            <Text style={{textAlign:'justify',fontSize:18}} >{`            \u2022 Lâmpadas
            \u2022 Fechadura
            \u2022 Alarmes
            \u2022 e muito mais pelo seu celular
`}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Ionicons name={'md-globe'} size={40} color={'black'} />
                <Text style={{marginLeft: 10, fontSize: 16}}>
                Versão atual: 0.0.2
                </Text>
            </View>
        </View>
        </>
    )
}

export default Sobre;
