import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function TodoInput({ onAdd }) {
  const [description, setDescription] = useState("");
  const API_URL = "https://69037016d0f10a340b244609.mockapi.io/todo/tarefas";
  const createTask = async () => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        done: false
      }),
    });

    const data = await response.json();
    if (onAdd) onAdd(data);
  };

  return (
    <View
      style={{
        backgroundColor: '#e6f7cc',
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder='Descreva sua tarefa'
        style={{ flex: 1, fontSize: 16, color: '#2e2e2e' }}
      />
      <TouchableOpacity
        onPress={() => {
          if (description != ''){
          createTask();
          setDescription('');
        }
        }}
        style={{ paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 22, color: '#9acd32' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}