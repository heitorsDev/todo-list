import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Sidebar from '../../components/todo/Sidebar';
import TodoInput from '../../components/todo/TodoInput';
import TodoList from '../../components/todo/TodoList';

const API_URL = "https://69037016d0f10a340b244609.mockapi.io/todo/tarefas";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const handleAddTask = (newTask) => {
    getAllTasks();
  };

  const handleDeleteTask = (id) => {
    getAllTasks();
  };

  const handleUpdateTask = (updatedTask) => {
    getAllTasks();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row' }}>
      <Sidebar />
      <View style={{ flex: 1, padding: 12 }}>
        <TodoInput onAdd={handleAddTask} />
        <TodoList tasks={tasks} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} />
      </View>
    </View>
  );
}