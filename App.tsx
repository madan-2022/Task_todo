import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import Navigator from './src/navigation/navigator'

const App = () => {
  return (
    <NativeBaseProvider>
    <Navigator/>
    </NativeBaseProvider>
  )
}

export default App