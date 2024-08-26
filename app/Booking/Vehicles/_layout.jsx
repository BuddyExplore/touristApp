import { Stack } from "expo-router";

export default function RootLayout() {

  return (
      <Stack screenOptions={{
        headerShadowVisible: false,
      }}>
        <Stack.Screen name="search" options={{
          title: "Book a vehicle",
          headerTitleAlign: 'center',
          headerStyle: {
            height: 100,
          },
          headerTitleStyle: {
            marginHorizontal: "auto",
            fontSize: 18,
            fontWeight: '600',
          },
        }}/>
      </Stack>
  );
}
