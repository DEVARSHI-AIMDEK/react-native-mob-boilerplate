import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { inject, Observer, observer, Provider } from 'mobx-react';
import todosStore from './store/todosStore';
import TodoScreen from './src/screens/TodoScreen';
import { NavigationContainer } from '@react-navigation/native';
import ViewTodoList from './src/screens/ViewTodoList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const store = {
  todosStore
}

const Stack = createNativeStackNavigator()

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      desc: '',
      todos: [],
    }
  }

  render() {
    return (
      <Provider {...store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name='home' options={{ headerShown: false }} component={TodoScreen} />
            <Stack.Screen name='listTodos' options={{ headerShown: false }} component={ViewTodoList} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

