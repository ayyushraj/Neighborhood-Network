import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabRoot = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen name="index" options={{title:"Home" ,
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,}}/>
      <Tabs.Screen name="about" options={{title:"About Us",
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />,}}/>
      <Tabs.Screen name="profile" options={{title:"Profile",
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,}}/>
    </Tabs>
  );
};

export default TabRoot;
