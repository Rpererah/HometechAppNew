import React from 'react'
import { View, StatusBar } from 'react-native';

function MenuBar({children}) {



    return (
        <>
        <StatusBar
        backgroundColor='#002047'
        />
    <View style={{backgroundColor:'#2e69b2',height:50,justifyContent:'center',shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    
    elevation: 20,}}>
        <View style={{marginLeft:'2%'}}>
            {children}
        </View>
    </View>
    </>
    )
}

export default MenuBar;


