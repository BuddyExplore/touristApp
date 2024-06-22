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
        <Tabs.Screen name='explore' options={{
          tabBarLabel:"Explore",
          tabBarIcon:({color}) => <Ionicons name="compass-outline" size={24} color={color} />
        }}/>
        <Tabs.Screen name='book' options={{
          tabBarLabel:"Book",
          tabBarIcon:({color}) => <Ionicons name="calendar-clear-outline" size={24} color={color} />
        }}/>
        <Tabs.Screen name='shop' options={{
          tabBarLabel:"Shop",
          tabBarIcon:({color}) => <Ionicons name="bag-outline" size={24} color={color} />
        }}/>
        <Tabs.Screen name='blogs' options={{
          tabBarLabel:"Blogs",
          tabBarIcon:({color}) => <Ionicons name="newspaper-outline" size={24} color={color} />
        }}/>
        <Tabs.Screen name='profile' options={{
          tabBarLabel:"Profile",
          tabBarIcon:({color}) => <Ionicons name="people-circle-outline" size={24} color={color} />
        }}/>

    </Tabs>
  )
}

//just for commit