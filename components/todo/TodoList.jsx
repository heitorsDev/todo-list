import React from 'react';
import { View } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList() {
  return (
    <View style={{ marginTop: 12 }}>
      <TodoItem label="Tarefa tal" variant="default" />
      <TodoItem label="Tarefa tal" variant="danger" />
      <TodoItem label="Tarefa tal" variant="disabled" />
      <TodoItem label="Tarefa tal" variant="disabled" />
      <TodoItem label="Tarefa tal" variant="disabled" />
    </View>
  );
}
