import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BlogLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="MostPopularBlogs" options={{ title: "Most Popular Blogs" }} />
        <Stack.Screen name="ExploreTopics" options={{ title: "Explore by Topics" }} />
        <Stack.Screen name="PostedByYou" options={{ title: "Posted by You" }} />
        <Stack.Screen name="Guides" options={{ title: "Guides" }} />
        <Stack.Screen name="RecentlyPosted" options={{ title: "Recently Posted" }} />
        <Stack.Screen name="BlogDetail" options={{ title: "Blog Detail" }} />
      </Stack>
    </SafeAreaView>
  );
}

import { useNavigation } from "expo-router";

function ArticlesAndBlogsScreen() {
  const navigation = useNavigation();

  return (
    <View>
      {/* Other UI Elements */}
      <TouchableOpacity onPress={() => navigation.navigate("MostPopularBlogs")}>
        <Text>View All</Text>
      </TouchableOpacity>
      {/* Most Popular Blogs list */}
    </View>
  );
}
