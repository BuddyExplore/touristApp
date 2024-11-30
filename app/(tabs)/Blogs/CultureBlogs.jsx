import React from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function CultureBlogs() {
  const router = useRouter();

  const blogs = [
    { id: '1', title: 'A lifetime experience visiting southern beach', author: 'Wasri', timeAgo: '4 days ago', image: require('../../../assets/images/Blogs/image1.png') },
    { id: '2', title: 'A lifetime experience visiting southern beach', author: 'Wasri', timeAgo: '4 days ago', image: require('../../../assets/images/Blogs/image1.png') },
    { id: '3', title: 'A lifetime experience visiting southern beach', author: 'Wasri', timeAgo: '4 days ago', image: require('../../../assets/images/Blogs/image1.png') },
    // Add more blog items as needed
  ];

  const renderBlogItem = ({ item }) => (
    <TouchableOpacity onPress={() => router.push({ pathname: 'BlogDetail', params: { blog: item.id } })} style={{ flexDirection: 'row', paddingVertical: 10, alignItems: 'center' }}>
      <Image source={item.image} style={{ width: 60, height: 60, borderRadius: 10 }} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
          <Text style={{ color: '#666' }}>{item.author}</Text>
          <Text style={{ color: '#666', marginLeft: 8 }}>{item.timeAgo}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 18, color: '#666' }}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 20 }}>Culture (Blogs)</Text>

      <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, padding: 10, marginBottom: 20 }}>
        <TextInput
          placeholder="Search for articles or blogs"
          style={{ fontSize: 16 }}
        />
      </View>

      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id}
        renderItem={renderBlogItem}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#e0e0e0' }} />}
      />
    </View>
  );
}
