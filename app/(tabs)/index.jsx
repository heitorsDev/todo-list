import React from 'react';
import { View } from 'react-native';
import Sidebar from '../../components/todo/Sidebar';
import TodoInput from '../../components/todo/TodoInput';
import TodoList from '../../components/todo/TodoList';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row' }}>
      <Sidebar />
      <View style={{ flex: 1, padding: 12 }}>
        <TodoInput />
        <TodoList />
      </View>
    </View>
  );
}
