import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#F18F35',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabelStyle: { fontFamily: 'PoppinsBold', fontSize: 10 },
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color="#F18F35" size={24} />
          ),
        }}
      />
    </Tabs>
  );
}