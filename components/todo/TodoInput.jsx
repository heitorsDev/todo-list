import React from 'react';
import { View, Text } from 'react-native';

export default function TodoInput() {
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
      <Text style={{ flex: 1, fontSize: 16, color: '#2e2e2e' }}>
        Adicione sua tarefa
      </Text>
      <Text style={{ fontSize: 22, color: '#9acd32' }}>+</Text>
    </View>
  );
}
