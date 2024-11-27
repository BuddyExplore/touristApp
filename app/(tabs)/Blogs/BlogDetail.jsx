import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const BlogDetail = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.image }} style={styles.headerImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <View style={styles.authorSection}>
          <Image
            source={{ uri: "https://example.com/author-image.jpg" }}
            style={styles.authorImage}
          />
          <View>
            <Text style={styles.authorName}>William Smith</Text>
            <Text style={styles.authorPosts}>17 posts</Text>
          </View>
        </View>
        <Text style={styles.articleContent}>{article.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  authorSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  authorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  authorPosts: {
    fontSize: 14,
    color: "gray",
  },
  articleContent: {
    fontSize: 16,
    marginVertical: 15,
  },
});

export default BlogDetail;
