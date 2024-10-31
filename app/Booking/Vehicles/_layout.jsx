import { Stack } from "expo-router";
import { View } from 'react-native';
import { Colors } from '../../../constants/Colors';

export default function RootLayout() {

  return (
      <Stack screenOptions={{
        headerShadowVisible: false,
      }}>
        <Stack.Screen name="search" options={{
          title: "Book a vehicle",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginHorizontal: "auto",
            fontSize: 18,
            fontWeight: '600',
          },
        }}/>
        <Stack.Screen name="searchResults" options={{
          title: "Book a vehicle",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginHorizontal: "auto",
            fontSize: 18,
            fontWeight: '600',
          },
        }}/>

        <Stack.Screen name="vehicleInformation" options={{
          headerShown: false
        }}/>
        
        <Stack.Screen name="bookingSummary" options={{
          headerTitle: () => (
            <View style={{height: 10, width: '70%', borderRadius: 80, backgroundColor: Colors.PRIMARY}}></View>
          ),
          headerTitleAlign: 'center',
        }}/> 

      </Stack>
  );
}
