import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const RecentlyPosted = () => {
  const recentPosts = [
    { id: 1, title: 'Religious Places That I Visited in Sri Lanka', image: 'https://example.com/image8.jpg' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recently Posted</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recentPosts.map((post) => (
          <View key={post.id} style={styles.card}>
            <Image source={{ uri: post.image }} style={styles.image} />
            <Text style={styles.title}>{post.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default RecentlyPosted;
