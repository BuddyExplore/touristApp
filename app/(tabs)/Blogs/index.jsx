import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { usePathname, useRouter } from "expo-router";

export default function Articles() {
  const router = useRouter();

  const handleNavigate = (screen, params) => {
    router.push({
      pathname: screen,
      params,
    });
  };

  const path = usePathname();

  return (
    <ScrollView style={{ padding: 20 }}>
      {/* Most Popular Section */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Most Popular</Text>
          <TouchableOpacity
            onPress={() => handleNavigate(path + "/MostPopularBlogs")}
          >
            <Text style={{ color: "blue" }}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          {[...Array(3)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                handleNavigate("BlogDetail", { blog: `Blog ${index}` })
              }
              style={{ marginRight: 15 }}
            >
              <Image
                source={require("../../../assets/images/Blogs/image1.png")}
                style={{ width: 150, height: 100, borderRadius: 10 }}
              />
              <Text>A lifetime experience visiting southern beach</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Explore by Topics Section */}
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Explore by Topics
          </Text>
          <TouchableOpacity
            onPress={() => handleNavigate(path + "/SelectPreferredTopic")}
          >
            <Text style={{ color: "blue" }}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          {[...Array(3)].map((_, index) => (
            <View key={index} style={{ marginRight: 15 }}>
              <Image
                source={require("../../../assets/images/Blogs/image4.png")}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <TouchableOpacity
                onPress={() => handleNavigate(path + "/CultureBlogs")}
              >
                <Text style={{ textAlign: "center" }}>Culture</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Posted by You Section */}
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Posted by You
          </Text>
          <TouchableOpacity
            onPress={() => handleNavigate(path + "/PostedByYou")}
          >
            <Text style={{ color: "blue" }}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          {[...Array(3)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                handleNavigate("BlogDetail", { blog: `Posted Blog ${index}` })
              }
              style={{ marginRight: 15 }}
            >
              <Image
                source={require("../../../assets/images/Blogs/image8.png")}
                style={{ width: 150, height: 100, borderRadius: 10 }}
              />
              <Text>Unforgettable trip to Sigiriya</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Guides Section */}
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Guides</Text>
          <TouchableOpacity onPress={() => handleNavigate(path + "/Guides")}>
            <Text style={{ color: "blue" }}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          {[...Array(3)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                handleNavigate("BlogDetail", { blog: `Guide ${index}` })
              }
              style={{ marginRight: 15 }}
            >
              <Image
                source={require("../../../assets/images/Blogs/image11.png")}
                style={{ width: 150, height: 100, borderRadius: 10 }}
              />
              <Text>How to climb the rock Mihintale</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Recently Posted Section */}
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Recently Posted
          </Text>
          <TouchableOpacity
            onPress={() => handleNavigate(path + "/SelectPreferredTopic")}
          >
            <Text style={{ color: "blue" }}>View All</Text>
          </TouchableOpacity>
        </View>
        {[...Array(3)].map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              handleNavigate("BlogDetail", { blog: `Recent Blog ${index}` })
            }
            style={{ flexDirection: "row", marginTop: 10 }}
          >
            <Image
              source={require("../../../assets/images/Blogs/image13.png")}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
            <View style={{ marginLeft: 10, justifyContent: "center" }}>
              <Text>Religious Places that I visited in Sri Lanka</Text>
              <Text>2 days ago</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}