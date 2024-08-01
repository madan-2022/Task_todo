import React, { useState } from 'react';
import { Box, Text, Input, Button } from 'native-base';
import { View } from 'react-native';

const UpdateScreen = ({ route, navigation }) => {
  const { task, updateTask } = route.params;

  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleUpdate = () => {
    const updatedTask = { ...task, title: updatedTitle };
    updateTask(updatedTask);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Box width={'80%'} padding={'5'} bg={'white'} style={{ elevation: 10 }} borderRadius={'sm'}>
        <Text fontSize={'lg'} marginBottom={'2'}>Update Task</Text>
        <Input
          value={updatedTitle}
          onChangeText={setUpdatedTitle}
          placeholder="Update Task Title"
          marginBottom={'5'}
        />
        <Button onPress={handleUpdate}>Update</Button>
      </Box>
    </View>
  );
};

export default UpdateScreen;
