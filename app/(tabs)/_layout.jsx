import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
         tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name='home' options={{
          tabBarLabel:"Home",
          tabBarIcon:({color}) => <Ionicons name="home" size={24} color={color} />
        }}/>
        <Tabs.Screen name='explore' options={{
          tabBarLabel:"Explore",
          tabBarIcon:({color}) => <Ionicons name="search" size={24} color={color} />
        }}/>
        <Tabs.Screen name='booking' options={{
          tabBarLabel:"Booking",
          tabBarIcon:({color}) => <Ionicons name="car" size={24} color={color} />
        }}/>
        <Tabs.Screen name='dashboard' options={{
          tabBarLabel:"Dashboard",
          tabBarIcon:({color}) => <Ionicons name="bar-chart" size={24} color={color} />
        }}/>
        <Tabs.Screen name='profile' options={{
          tabBarLabel:"Profile",
          tabBarIcon:({color}) => <Ionicons name="people-circle" size={24} color={color} />
        }}/>

    </Tabs>
  )
}