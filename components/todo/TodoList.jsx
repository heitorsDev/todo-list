import { View } from 'react-native';
import TodoItem from './TodoItem.jsx';

export default function TodoList({ tasks = [], onDelete, onUpdate }) {
  return (
    <View style={{ marginTop: 12 }}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          label={task.description}
          done={task.done}
          id={task.id}
          handleDeleteTask={onDelete}
          handleUpdateTask={onUpdate}
        />
      ))}
    </View>
  );
}