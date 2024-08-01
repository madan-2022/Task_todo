import React, { useState } from 'react';
import { Box, Input, Stack, Text, Button, Switch } from 'native-base';

const generateUniqueId = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

const Addnewtask = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const { addTaskToList } = route.params;

  const addTask = () => {
    if (!title) {
      alert('Title is required');
      return;
    }

    const newTask = {
      id: generateUniqueId(),
      todo: title,
      completed,
      userId: 1
    };

    addTaskToList(newTask);
    navigation.goBack();
  };

  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
      <Box width="80%" maxW="370px">
        <Text color={'#000000'} fontSize={'2xl'} textAlign={'center'}>
          Add New Task
        </Text>
        <Stack space={4} marginTop={'5'}>
          <Input
            variant="underlined"
            placeholder="Enter title"
            fontSize={'lg'}
            placeholderTextColor={'black'}
            value={title}
            onChangeText={setTitle}
          />
          <Stack direction="row" alignItems="center">
            <Text fontSize={'lg'} color={'black'} marginRight={2}>
              Completed
            </Text>
            <Switch
              isChecked={completed}
              onToggle={() => setCompleted(!completed)}
            />
          </Stack>
          <Button onPress={addTask} colorScheme="blue">
            Add Task
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Addnewtask;
