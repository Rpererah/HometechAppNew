import React,{useState} from 'react'
import { View,TouchableOpacity,Switch, Text } from 'react-native'

function SwitchB() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <>
        <View>
            <View style={{flexDirection:'row'}}>
            <Text>OFF/ON</Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
            </View>
        </View>
      </>
    )
}

export default SwitchB;
