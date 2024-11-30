import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ExploreByTopics = () => {
  const topics = [
    { id: 1, title: 'Culture' },
    { id: 2, title: 'Nature' },
    { id: 3, title: 'Food' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Explore by Topics</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topics.map((topic) => (
          <View key={topic.id} style={styles.topicCard}>
            <Text style={styles.topicTitle}>{topic.title}</Text>
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
  topicCard: {
    marginRight: 10,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  topicTitle: {
    fontSize: 16,
  },
});

export default ExploreByTopics;
