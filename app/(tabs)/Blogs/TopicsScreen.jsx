import React from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const topics = [
  { id: '1', title: 'Culture', posts: 320, imageUrl: '../../../assets/images/Blogs/image1.png', screen: 'CultureBlogs' },
  { id: '2', title: 'Nature', posts: 221, imageUrl: '../../../assets/images/Blogs/image1.png', screen: 'NatureBlogs' },
  { id: '3', title: 'Food', posts: 198, imageUrl: '../../../assets/images/Blogs/image1.png', screen: 'FoodBlogs' },
  { id: '4', title: 'Historical', posts: 322, imageUrl: '../../../assets/images/Blogs/image1.png', screen: 'HistoricalBlogs' },
  { id: '5', title: 'Wild Life', posts: 170, imageUrl: '../../../assets/images/Blogs/image1.png', screen: 'WildLifeBlogs' },
  { id: '6', title: 'Religious', posts: 318, imageUrl: '../../../assets/images/Blogs/image1.png', screen: 'ReligiousBlogs' },
  { id: '7', title: 'Beach', posts: 118, imageUrl: '../../../assets/images/Blogs/image1.png', screen: 'BeachBlogs' },
  { id: '8', title: 'Entertainment', posts: 236, imageUrl: '../../../assets/images/Blogs/image1.png', screen: 'EntertainmentBlogs' },
  { id: '9', title: 'Games', posts: 176, imageUrl: '../../../assets/images/Blogs/image1.png', screen: 'GamesBlogs' },
  { id: '10', title: 'Festivals', posts: 258, imageUrl: '../../../assets/images/Blogs/image1.png', screen: 'FestivalsBlogs' },
];

const TopicsScreen = () => {
  const router = useRouter();

  const handleNavigate = (screen) => {
    router.push(screen);
  };

  const renderTopicCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleNavigate(item.screen)}>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <View style={styles.cardOverlay} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardPosts}>{item.posts} posts</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search for topics" style={styles.searchInput} />
      </View>
      <FlatList
        data={topics}
        renderItem={renderTopicCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  searchInput: { fontSize: 16, color: '#333', flex: 1 },
  listContent: { paddingBottom: 16 },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: { width: '100%', height: 120 },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  cardTitle: {
    position: 'absolute',
    bottom: 35,
    left: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardPosts: {
    position: 'absolute',
    bottom: 15,
    left: 10,
    color: '#fff',
    fontSize: 12,
  },
});

export default TopicsScreen;
