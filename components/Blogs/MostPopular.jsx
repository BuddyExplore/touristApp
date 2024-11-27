import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MostPopular = () => {
  const navigation = useNavigation();
  
  const popularArticles = [
    { 
      id: 1, 
      title: 'A Lifetime Experience Visiting Southern Beach', 
      image: 'https://example.com/image1.jpg' 
    },
    { id: 2, title: 'Places You Must Visit in Sri Lanka', image: 'https://example.com/image2.jpg' },
    { id: 3, title: 'What is Leading to the New World of Exploration?', image: 'https://example.com/image3.jpg' },
  ];

  const handleViewAll = () => {
    navigation.navigate('MostPopularBlogs');
  };

  const handlePress = (article) => {
    navigation.navigate('BlogDetail', { article });
  };

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Most Popular</Text>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {popularArticles.map((article) => (
          <TouchableOpacity key={article.id} onPress={() => handlePress(article)} style={styles.card}>
            <Image source={{ uri: article.image }} style={styles.image} />
            <Text style={styles.title}>{article.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  viewAll: {
    fontSize: 16,
    color: '#007BFF',
  },
  card: {
    marginRight: 10,
    width: 150,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  title: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default MostPopular;

