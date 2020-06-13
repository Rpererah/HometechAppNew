import React from 'react'
import { View,TouchableOpacity, Dimensions } from 'react-native'
import MenuBar from '../../menubar';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Mdispositivos({navigation}){
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