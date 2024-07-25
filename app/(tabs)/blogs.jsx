import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import localImage from "../../assets/images/blogs/1.jpg";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const blogData = [
  {
    id: 1,
    title: "Blog Title 1",
    content:
      "This is a short description of the first blog content. It gives a glimpse of what the blog is about.",
    imageUrl: localImage,
  },
  {
    id: 2,
    title: "Blog Title 2",
    content:
      "This is a short description of the second blog content. It provides a preview of the blog topic.",
    imageUrl: localImage,
  },
  {
    id: 3,
    title: "Blog Title 3",
    content:
      "This is a short description of the third blog content. It summarizes the main points of the blog.",
    imageUrl: localImage,
  },
];

const BlogBox = ({ title, content, imageUrl }) => {
  return (
    <View style={styles.blogBox}>
      <View style={styles.row}>
        <Image source={imageUrl} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const Blogs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission needed", "Camera roll permission is required");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setNewBlog({ ...newBlog, image: { uri: result.uri } });
    }
  };

  const handleAddBlog = () => {
    blogData.push({ ...newBlog, id: blogData.length + 1 });
    setModalVisible(false);
    setNewBlog({ title: "", content: "", image: null });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 10,
            marginVertical: 10,
            marginTop: 15,
            borderRadius: 8,
            width: "80%",
          }}
        >
          <Ionicons name="search" size={24} color={Colors.SECOND} />
          <TextInput
            placeholder="Search blogs..."
            style={{
              fontFamily: "outfit",
              fontSize: 16,
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add-circle" size={48} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>

      {blogData.map((blog) => (
        <BlogBox
          key={blog.id}
          title={blog.title}
          content={blog.content}
          imageUrl={blog.imageUrl}
        />
      ))}

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Blog</Text>
            <TextInput
              placeholder="Title"
              style={styles.input}
              value={newBlog.title}
              onChangeText={(text) => setNewBlog({ ...newBlog, title: text })}
            />
            <TextInput
              placeholder="Content"
              style={[styles.input, { height: 100 }]}
              multiline
              value={newBlog.content}
              onChangeText={(text) => setNewBlog({ ...newBlog, content: text })}
            />
            {newBlog.image && (
              <Image source={newBlog.image} style={styles.imagePreview} />
            )}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: Colors.SECOND }]}
              onPress={handleImagePick}
            >
              <Text style={styles.buttonText}>Pick an image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: Colors.PRIMARY }]}
              onPress={handleAddBlog}
            >
              <Text style={styles.buttonText}>Add Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: Colors.THIRD }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  blogBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    flexShrink: 1,
  },
  content: {
    color: "#666",
    fontSize: 14,
    marginTop: 10,
  },
  iconContainer: {
    position: "absolute",
    right: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    width: "70%",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Blogs;
