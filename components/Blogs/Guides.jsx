import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const Guides = () => {
  const guides = [
    { id: 1, title: 'How to Climb the Rock Mihintale', image: 'https://example.com/image6.jpg' },
    { id: 2, title: 'How to Experience the Rata Pehera', image: 'https://example.com/image7.jpg' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Guides</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {guides.map((guide) => (
          <View key={guide.id} style={styles.card}>
            <Image source={{ uri: guide.image }} style={styles.image} />
            <Text style={styles.title}>{guide.title}</Text>
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

export default Guides;
