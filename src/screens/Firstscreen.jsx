import React, { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Box, Text, Flex, FlatList, Checkbox, Button } from 'native-base';
import axios from 'axios';

const Firstscreen = ({ navigation }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/todos');
        setTaskList(response.data.todos);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    getData();
  }, []);

  const renderItem = ({ item }) => (
    <Box
      width={'90%'}
      marginX={'auto'}
      style={{ elevation: 10 }}
      bg={'#FFFFFF'}
      marginTop={'5'}
      padding={'5'}
      borderBottomColor="gray.200"
      borderRadius={'sm'}
    >
      <Text fontSize={'md'}>ID: {item.id}</Text>
      <Text fontSize={'md'}>User ID: {item.userId}</Text>
      <Text color={'black'} fontSize={'lg'} fontWeight={'600'}>
        {item.todo}
      </Text>
      <Flex
        width={'40%'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        marginTop={'1.5'}
      >
        <Checkbox isChecked={item.completed} />
        <Text fontSize={'md'} fontWeight={'500'} color={'#000000'}>
          Completed
        </Text>
      </Flex>
      <Flex
        flexDirection={'row'}
        marginTop={'3'}
        justifyContent={'space-between'}
      >
        <Button onPress={() => deleteTask(item.id)}>Delete</Button>
        {/* <Button onPress={() => navigation.navigate('UpdateScreen', { task: item, updateTask })}>Update</Button> */}
      </Flex>
    </Box>
  );

  const addTask = () => navigation.navigate('add', { addTaskToList });

  const deleteTask = (taskId) => {
    axios
      .delete(`https://dummyjson.com/todos/${taskId}`)
      .then(() => {
        setTaskList(taskList.filter((task) => task.id !== taskId));
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  const addTaskToList = (task) => {
    axios
      .post('https://dummyjson.com/todos/add', task)
      .then((response) => {
        setTaskList([response.data, ...taskList]);
      })
      .catch((error) => console.error('Error adding task:', error));
  };

  // const updateTask = (updatedTask) => {
  //   axios
  //     .put(`https://dummyjson.com/todos/${updatedTask.id}`, updatedTask)
  //     .then((response) => {
  //       setTaskList(
  //         taskList.map((task) =>
  //           task.id === updatedTask.id ? response.data : task
  //         )
  //       );
  //     })
  //     .catch((error) => console.error('Error updating task:', error));
  // };

  return (
    <ImageBackground
      width={'100%'}
      height={'100%'}
      source={require('../assets/bg1.png')}
    >
      <Box
        width={'100%'}
        height={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}
      >
        <Box flex={1} justifyContent="center" alignItems="center" width={'90%'}>
          <FlatList
            data={taskList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            width={'100%'}
          />
        </Box>

        <Box
          position={'absolute'}
          bottom={'10'}
          right={'5'}
          backgroundColor={'blue.900'}
          style={{ elevation: 10 }}
          padding={'5'}
          borderRadius={'md'}
        >
          <Text
            color={'white'}
            fontSize={'lg'}
            onPress={addTask}
            style={{ textAlign: 'center' }}
          >
            Add New Task
          </Text>
        </Box>
      </Box>
    </ImageBackground>
  );
};

export default Firstscreen;
