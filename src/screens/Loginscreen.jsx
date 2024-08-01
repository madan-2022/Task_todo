import { View } from 'react-native'
import React from 'react'
import { Button , Box} from 'native-base'

const Loginscreen = ({navigation}) => {
  return (
   <Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

    <Button width={'50%'} onPress={()=>navigation.navigate('First')}>Login</Button>

   </Box>
  )
}

export default Loginscreen