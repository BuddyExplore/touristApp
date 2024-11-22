import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function AddNewBlog() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add new blog</Text>

      {/* Image Upload Section */}
      <TouchableOpacity style={styles.imageUpload}>
        <Image
        //   source={require("../../../assets/icons/image-upload.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.imageUploadText}>Click to add cover image</Text>
      </TouchableOpacity>

      {/* Title Input */}
      <TextInput
        style={styles.input}
        placeholder="Blog title"
      />

      {/* Blog Content Input */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Write your blog here..."
        multiline
      />

      {/* Select Topics */}
      <TextInput
        style={styles.input}
        placeholder="Select topics"
      />

      {/* Post Button */}
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageUpload: {
    height: 150,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  imageUploadText: {
    color: "#888",
    marginTop: 10,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  postButton: {
    backgroundColor: "#007bff",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  postButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
