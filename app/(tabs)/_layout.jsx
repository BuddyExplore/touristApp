import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="book"
        options={{
          tabBarLabel: "Book",
          headerShown: true,
          headerShadowVisible: false,
          title: "Book",
          headerTitleAlign: "center",
          headerStyle: {
            height: 80,
          },
          headerTitleStyle: {
            marginHorizontal: "auto",
            fontSize: 24,
            fontWeight: 700,
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-clear-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Blogs"
        options={{
          tabBarLabel: "Blogs",
          tabBarIcon: ({ color }) => (
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../assets/images/Blogs/Vector.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

//just for commit
