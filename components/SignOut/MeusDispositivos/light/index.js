import React from 'react'
import { View,TouchableOpacity,Switch, Text, Dimensions, Button } from 'react-native'
import MenuBar from '../../menubar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';
export default function Portas({navigation}){

    function Ler(){
        database()
  .ref('/hometech2020new/Lampada1')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
  });

    }
    return(
        <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:40,textAlign:'center',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Button
                title="Ligar/Desligar"
                onPress={Ler}
                />
                </Text>
        </View>
    );
    }