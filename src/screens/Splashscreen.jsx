import { View } from 'react-native'
import React , {useEffect} from 'react'
import { Box,Text , Image } from 'native-base'
import { ImageBackground } from 'react-native'

const Splashscreen = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Login'); // Navigate to 'Firstscreen'
        }, 2000); // 2000 milliseconds = 2 seconds
    
        return () => clearTimeout(timer); // Clear the timeout on component unmount
      }, [navigation]);


       const addTaskToList = (task) => {
    setTasks([task, ...tasks]);
  };
  return (
    <ImageBackground width={'100%'} height={'100%'} source={require('../assets/bg1.png')}>
        <Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
<Text fontSize={'2xl'} fontWeight={'600'}>Todo List</Text>
        </Box>
        

    </ImageBackground>
   
  )
}

export default Splashscreen