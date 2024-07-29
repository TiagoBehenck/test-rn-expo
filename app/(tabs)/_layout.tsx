import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#F18F35',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabelStyle: { fontFamily: 'PoppinsBold', fontSize: 10 },
          tabBarIcon: ({ focused  }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color="#F18F35" size={24} />
          ),
        }}
      />
    </Tabs>
  );
}