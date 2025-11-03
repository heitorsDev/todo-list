import React from 'react';
import { View, Image } from 'react-native';

export default function Sidebar() {
  return (
    <View
      style={{
        width: 72,
        backgroundColor: '#e6f7cc',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          elevation: 2,
        }}
      >
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 14,
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
