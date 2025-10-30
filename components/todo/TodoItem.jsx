import React from 'react';
import { View, Text } from 'react-native';
export default function TodoItem({ label = 'Tarefa tal', variant = 'default' }) {
  const bgByVariant = {
    default: '#cde8b8',
    danger: '#e05a5a',
    disabled: '#d9d9d9',
  };

  const textColor = variant === 'danger' ? '#fff' : '#000';

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
          backgroundColor: bgByVariant[variant] || bgByVariant.default,
          borderRadius: 4,
          paddingHorizontal: 10,
          paddingVertical: 6,
        }}
      >
        <Text style={{ color: textColor }}>{label}</Text>
      </View>

      <Text style={{ color: '#2dbf50', fontSize: 18 }}>✓</Text>
      <Text style={{ color: '#e53935', fontSize: 18 }}>✗</Text>
    </View>
  );
}
