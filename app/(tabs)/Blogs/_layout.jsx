import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MostPopularBlogs from "./MostPopularBlogs";
import TopicsScreen from "./TopicsScreen";
import CultureBlogs from "./CultureBlogs";
// import ExploreTopics from "./ExploreTopics";

export default function BlogLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: true }}>
        {/* <Stack.Screen
          name="index"
          component={TopicsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MostPopularBlogs"
          component={MostPopularBlogs}
          options={{ title: "Most Popular Blogs" }}
        /> */}
        {/* <Stack.Screen
          name="ExploreTopics"
          component={ExploreTopics}
          options={{ title: "Explore by Topics" }}
        /> */}
        {/* <Stack.Screen
          name="PostedByYou"
          component={PostedByYou}
          options={{ title: "Posted by You" }}
        /> */}
        {/* <Stack.Screen
          name="Guides"
          component={Guides}
          options={{ title: "Guides" }}
        /> */}
        {/* <Stack.Screen
          name="RecentlyPosted"
          component={RecentlyPosted}
          options={{ title: "Recently Posted" }}
        /> */}
        {/* <Stack.Screen
          name="BlogDetail"
          component={BlogDetail}
          options={{ title: "Blog Detail" }}
        /> */}
        {/* <Stack.Screen
          name="CultureBlogs"
          component={CultureBlogs}
          options={{ title: "Culture (Blogs)" }}
        /> */}
      </Stack>
    </SafeAreaView>
  );
  // }

  // function MostPopularBlogs() {
  //   return <View><Text>Most Popular Blogs Screen</Text></View>;
  // }

  // function ExploreTopics() {
  //   return <View><Text>Explore Topics Screen</Text></View>;
  // }

  // function PostedByYou() {
  //   return <View><Text>Posted By You Screen</Text></View>;
  // }

  // function Guides() {
  //   return <View><Text>Guides Screen</Text></View>;
  // }

  // function RecentlyPosted() {
  //   return <View><Text>Recently Posted Screen</Text></View>;
  // }

  // function BlogDetail() {
  //   return <View><Text>Blog Detail Screen</Text></View>;
}
