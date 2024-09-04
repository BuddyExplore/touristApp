import { Stack } from "expo-router";

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

        <Stack.Screen name="selectDestination" options={{
          title: "Book a vehicle",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginHorizontal: "auto",
            fontSize: 18,
            fontWeight: '600',
          },
        }}/>

        <Stack.Screen name="selectPassengers" options={{
          title: "Book a vehicle",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginHorizontal: "auto",
            fontSize: 18,
            fontWeight: '600',
          },
        }}/>
        
        <Stack.Screen name="summaryBooking" options={{
          title: "Book a vehicle",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginHorizontal: "auto",
            fontSize: 18,
            fontWeight: '600',
          },
        }}/>
      </Stack>
  );
}
