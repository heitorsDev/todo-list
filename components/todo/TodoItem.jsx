import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function TodoItem({ label = 'Tarefa tal', done = false, id = 0, handleUpdateTask, handleDeleteTask }) {
  const [description, setDescription] = useState(label);
  const [complete, setComplete] = useState(done)
  const backgroundColor = complete ? '#cde8b8' : '#ffffff';
  const textColor = '#000';
  console.log(id)
  const API_URL = "https://69037016d0f10a340b244609.mockapi.io/todo/tarefas"
  const updateTodo = async (id, updatedFields) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    });

    const data = await response.json();
    console.log("Atualizado:", data);
    handleUpdateTask
  }

  const deleteTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    handleDeleteTask()
  }



useEffect(() => {
    if (!id) return;
    if (description === label) return;

    updateTodo(id, { description }).catch(console.error);


  }, [description, id, label]);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        gap: 12,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor,
          borderRadius: 4,
          paddingHorizontal: 10,
          paddingVertical: 6,
        }}
      >
        <TextInput
          style={{ color: textColor }}
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <TouchableOpacity onPress={() => {
        setComplete(!complete)
        updateTodo(id, { done: !complete }).catch(console.error);
      }} style={{ padding: 6 }}>
        <Text style={{ color: '#2dbf50', fontSize: 18 }}>✓</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{deleteTodo(id)}} style={{ padding: 6 }}>
        <Text style={{ color: '#e53935', fontSize: 18 }}>✗</Text>
      </TouchableOpacity>
    </View>
  );
}