import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {RFValue} from 'react-native-responsive-fontsize'
const App = () => {
  return (
    <View>
      <Text>App</Text>

      <Icon name='arrow-up' size={RFValue(200)} />
    </View>
  )
}

export default App