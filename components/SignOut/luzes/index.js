import React,{useState} from 'react'
import { View,TouchableOpacity,Switch, Text, Dimensions } from 'react-native'
import MenuBar from './../menubar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Switchb from './switch'


function luzes({navigation}) {
    const altura=Dimensions.get('screen').height
 
    const AbraTeSesamo=()=>{
        navigation.openDrawer();
    }
    return (
        <>
        <View>
<MenuBar>
    <TouchableOpacity onPress={AbraTeSesamo}>
      <Ionicons name={'md-menu'} size={40} color={'white'}/>
    </TouchableOpacity>
</MenuBar>
        </View>
        <View style={{backgroundColor:'#C6C9D2',height:altura,alignContent:'center',}}>
            <View>
            <Text style={{fontSize:28,textAlign:'center',justifyContent:'center',alignItems:'center',alignContent:'center'}}>Suas Lampadas</Text>
            </View>
       <View style={{alignItems:'flex-start',flexDirection:'row'}}>

       <Switchb/>
       </View>
       <View style={{flexDirection:'row'}}>

<Switchb/>
</View>
        </View>
        </>
    )
}

export default luzes;
