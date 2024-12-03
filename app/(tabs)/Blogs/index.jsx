import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native";
import { usePathname, useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install this library
import AddNewBlog from "./AddNewBlog";

export default function Articles() {
  const router = useRouter();

  const handleNavigate = (screen, params) => {
    router.push({
      pathname: screen,
      params,
    });
  };

  const path = usePathname();

  return (
    <ScrollView style={{ padding: 20 }}>

    <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", marginBottom: 20, }}>Articles & Blogs</Text>

    <View style={styles.searchbar}>
      <Icon name="search" size={20} color="#A9A9A9" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for articles or blogs"
        placeholderTextColor="#A9A9A9"
      />
    </View>

      {/* Most Popular Section */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Most Popular</Text>
          <TouchableOpacity
            onPress={() => handleNavigate(path + "/MostPopularBlogs")}
          >
            <Text style={{ color: "#0A89FF" }}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          {[...Array(3)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                // handleNavigate("BlogDetail", { blog: `Blog ${index}` })
                router.push("./Blogs/BlogDetail")
              }
              style={{ marginRight: 15 }}
            >
              <Image
                source={require("../../../assets/images/Blogs/image1.png")}
                style={{ width: 150, height: 100, borderRadius: 10 }}
              />
              <Text>A lifetime experience visiting..</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Explore by Topics Section */}
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Explore by Topics
          </Text>
          <TouchableOpacity
            onPress={() => handleNavigate(path + "/SelectPreferredTopic")}
          >
            <Text style={{ color: "#0A89FF" }}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          {[...Array(3)].map((_, index) => (
            <View key={index} style={{ marginRight: 15 }}>
              <Image
                source={require("../../../assets/images/Blogs/image4.png")}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <TouchableOpacity
                onPress={() => handleNavigate(path + "/CultureBlogs")}
              >
                <Text style={{ textAlign: "center" }}>Culture</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Posted by You Section */}
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Posted by You
          </Text>
          <TouchableOpacity
            onPress={() => handleNavigate(path + "/PostedByYou")}
          >
            <Text style={{ color: "#0A89FF" }}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          {[...Array(3)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                handleNavigate("BlogDetail", { blog: `Posted Blog ${index}` })
              }
              style={{ marginRight: 15 }}
            >
              <Image
                source={require("../../../assets/images/Blogs/image8.png")}
                style={{ width: 150, height: 100, borderRadius: 10 }}
              />
              <Text>Unforgettable trip to Sigiriya</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Guides Section */}
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Guides</Text>
          <TouchableOpacity onPress={() => handleNavigate(path + "/Guides")}>
            <Text style={{ color: "#0A89FF" }}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          {[...Array(3)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                handleNavigate("BlogDetail", { blog: `Guide ${index}` })
              }
              style={{ marginRight: 15 }}
            >
              <Image
                source={require("../../../assets/images/Blogs/image11.png")}
                style={{ width: 150, height: 100, borderRadius: 10 }}
              />
              <Text>How to climb the rock Mihintale</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Recently Posted Section */}
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Recently Posted
          </Text>
          <TouchableOpacity
            onPress={() => handleNavigate(path + "/SelectPreferredTopic")}
          >
            <Text style={{ color: "#0A89FF" }}>View All</Text>
          </TouchableOpacity>
        </View>
        {[...Array(3)].map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              handleNavigate("BlogDetail", { blog: `Recent Blog ${index}` })
            }
            style={{ flexDirection: "row", marginTop: 10 }}
          >
            <Image
              source={require("../../../assets/images/Blogs/image13.png")}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
            <View style={{ marginLeft: 10, justifyContent: "center" }}>
              <Text>Religious Places that I visited in Sri Lanka</Text>
              <Text>2 days ago</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
