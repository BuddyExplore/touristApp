// app/MostPopularBlogs.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const popularBlogs = [
  { id: '1', title: 'A lifetime experience visiting southern beach', image: require('../../../assets/images/Blogs/image1.png'), author: 'Williams', date: '4 days ago' },
  { id: '2', title: 'A lifetime experience visiting southern beach', image: require('../../../assets/images/Blogs/image1.png'), author: 'Williams', date: '4 days ago' },
  { id: '3', title: 'A lifetime experience visiting southern beach', image: require('../../../assets/images/Blogs/image1.png'), author: 'Williams', date: '4 days ago' },
  { id: '4', title: 'A lifetime experience visiting southern beach', image: require('../../../assets/images/Blogs/image1.png'), author: 'Williams', date: '4 days ago' },
  { id: '5', title: 'A lifetime experience visiting southern beach', image: require('../../../assets/images/Blogs/image1.png'), author: 'Williams', date: '4 days ago' },
  // Add more blog items as needed
];

export default function MostPopularBlogs() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      }}
      onPress={() => router.push('BlogDetails')} // Navigate to detailed blog screen
    >
      <Image source={item.image} style={{ width: 80, height: 80, borderRadius: 8 }} />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ fontSize: 14, color: '#888' }}>{item.author} - {item.date}</Text>
      </View>
      <AntDesign name="right" size={18} color="#888" />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Most Popular Blogs</Text>
      <FlatList
        data={popularBlogs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}


