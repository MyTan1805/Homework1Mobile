import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'left', 
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#000000',
        headerShadowVisible: false, 
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          headerTitleAlign: 'left', 
        }} 
      />
      
      {/* SỬA LẠI ĐỂ HIỂN THỊ TIÊU ĐỀ */}
      <Stack.Screen 
        name="login" 
        options={{ 
          title: '',
          headerBackTitle: 'Login', 
        }} 
      />

      {/* SỬA LẠI ĐỂ HIỂN THỊ TIÊU ĐỀ */}
      <Stack.Screen 
        name="register" 
        options={{ 
          title: '',
          headerBackTitle: 'Register', 
        }} 
      />

      {/* Tương tự, màn hình Profile cũng cần được tuỳ chỉnh */}
      <Stack.Screen 
        name="profile" 
        options={{ 
          title: '', 
          headerBackTitle: 'Profile', 
        }} 
      />
    </Stack>
  );
}