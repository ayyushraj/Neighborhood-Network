import React from 'react'
import { Stack } from 'expo-router';
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="about"></Stack.Screen>
      <Stack.Screen name="index"></Stack.Screen>
      
    </Stack>
  );
};

export default RootLayout;