import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splashscreen from '../screens/Splashscreen'
import Firstscreen from '../screens/Firstscreen'
import Addnewtask from '../screens/Addnewtask'
import Updatetask from '../screens/Updatetask'
import Loginscreen from '../screens/Loginscreen'

const Stack = createStackNavigator()

const Initialnavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='splash' component={Splashscreen}></Stack.Screen>
        <Stack.Screen name='Login' component={Loginscreen}></Stack.Screen>
        <Stack.Screen name='First' component={Firstscreen}></Stack.Screen>
        <Stack.Screen name='add' component={Addnewtask}></Stack.Screen>
        <Stack.Screen name='UpdateScreen' component={Updatetask}></Stack.Screen>
       
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Initialnavigator