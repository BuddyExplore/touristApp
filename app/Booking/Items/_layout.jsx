import { Stack } from "expo-router";
import { View } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function RootLayout() {

  return (
    <Stack screenOptions={{
      headerShadowVisible: false,
    }}>
      <Stack.Screen name="ShopHome" options={{
        title: "Shop & items",
        headerTitleAlign: 'center',
        headerTitleStyle: {
          marginHorizontal: "auto",
          fontSize: 18,
          fontWeight: '600',
        },
      }}/>
      <Stack.Screen name="ExploreShops" options={{
        title: "Explore Shops",
        headerTitleAlign: 'center',
        headerTitleStyle: {
          marginHorizontal: "auto",
          fontSize: 18,
          fontWeight: '600',
        },
      }}/>
      <Stack.Screen name="ExploreItems" options={{
        title: "Explore Items",
        headerTitleAlign: 'center',
        headerTitleStyle: {
          marginHorizontal: "auto",
          fontSize: 18,
          fontWeight: '600',
        },
      }}/>

      <Stack.Screen name="ShopInfo" options={{
        headerShown: false
      }}/>
      
      <Stack.Screen name="ItemInfo" options={{
        headerShown: false
      }}/> 

      <Stack.Screen name="PaymentMethod" options={{
          headerTitle: () => (
            <View style={{height: 10, width: '70%', borderRadius: 80, backgroundColor: '#D9D9D9'}}>
              <View style={{height: '100%', width: '33%', borderRadius: 80, backgroundColor: Colors.PRIMARY}}></View>
            </View>
          ),
          headerTitleAlign: 'center',
      }}/> 

      <Stack.Screen name="CardDetails" options={{
          headerTitle: () => (
            <View style={{height: 10, width: '70%', borderRadius: 80, backgroundColor: '#D9D9D9'}}>
              <View style={{height: '100%', width: '66%', borderRadius: 80, backgroundColor: Colors.PRIMARY}}></View>
            </View>
          ),
          headerTitleAlign: 'center',
      }}/> 

      <Stack.Screen name="PurchaseSummary" options={{
          headerTitle: () => (
            <View style={{height: 10, width: '70%', borderRadius: 80, backgroundColor: Colors.PRIMARY}}></View>
          ),
          headerTitleAlign: 'center',
      }}/> 
    </Stack>
  );
}
