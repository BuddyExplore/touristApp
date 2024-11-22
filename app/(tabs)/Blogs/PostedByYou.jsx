import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const posts = [
  {
    id: "1",
    title: "Religious Places that I visited in Sri Lanka",
    image: "https://via.placeholder.com/150",
    views: 221,
    upvotes: 307,
  },
  {
    id: "2",
    title: "Unforgettable trip to Sigiriya",
    image: "https://via.placeholder.com/150",
    views: 187,
    upvotes: 202,
  },
  {
    id: "3",
    title: "A mind-blowing place to visit in Anuradhapura",
    image: "https://via.placeholder.com/150",
    views: 187,
    upvotes: 307,
  },
];

const PostedByYou = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>3</Text>
          <Text>Total Posts</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>507</Text>
          <Text>Total Upvotes</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Image source={{ uri: item.image }} style={styles.postImage} />
            <View>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text>{item.views} Views</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statBox: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postItem: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },
  postImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PostedByYou;
