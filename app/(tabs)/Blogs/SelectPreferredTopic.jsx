import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

export default function SelectPreferredTopic() {
  const [search, setSearch] = useState("");

  const topics = [
    { id: "1", name: "Culture", posts: "28 posts", image: require("../../../assets/images/Blogs/image4.png") },
    { id: "2", name: "Nature", posts: "21 posts", image: require("../../../assets/images/Blogs/image5.png") },
    { id: "3", name: "Food", posts: "19 posts", image: require("../../../assets/images/Blogs/image6.png") },
    { id: "4", name: "Historical", posts: "22 posts", image: require("../../../assets/images/Blogs/imageE.jpeg") },
    { id: "5", name: "Wild Life", posts: "19 posts", image: require("../../../assets/images/Blogs/imageF.jpeg") },
    { id: "6", name: "Religious", posts: "17 posts", image: require("../../../assets/images/Blogs/imageG.jpeg") },
    { id: "7", name: "Beach", posts: "17 posts", image: require("../../../assets/images/Blogs/image1.png") },
    { id: "8", name: "Entertainment", posts: "15 posts", image: require("../../../assets/images/Blogs/image15.png") },
    { id: "9", name: "Games", posts: "15 posts", image: require("../../../assets/images/Blogs/image16.png") },
    { id: "10", name: "Festivals", posts: "13 posts", image: require("../../../assets/images/Blogs/image17.png") },
  ];

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select preferred Topic</Text>
      <TextInput
        style={styles.searchBox}
        placeholder="Search for topics"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredTopics}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.topicCard}>
            <Image source={item.image} style={styles.topicImage} />
            <Text style={styles.topicName}>{item.name}</Text>
            <Text style={styles.topicPosts}>{item.posts}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  searchBox: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  topicCard: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    width: "48%",
    marginBottom: 15,
    padding: 10,
    alignItems: "center",
  },
  topicImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  topicName: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  topicPosts: {
    color: "#888",
    textAlign: "center",
  },
});
