import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  ClerkLoaded,
} from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";

// import * as SecureStore from 'expo-secure-store';

// export default function RootLayout() {
//   useFonts({
//     'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
//     'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
//     'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf')
//   })
//   return (
//     <ClerkProvider tokenCache={tokenCache} publishableKey = {publishableKey}>
//       <ClerkLoaded>
//         <SignedIn>
//           <Stack screenOptions={{
//             headerShown:false
//           }}>
//             <Stack.Screen name="(tabs)" />
//           </Stack>
//         </SignedIn>
//         <SignedOut>
//           <Text>Sign out</Text>
//         </SignedOut>
//       </ClerkLoaded>
//     </ClerkProvider>
//   );
// }

export default function RootLayout() {
  useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="Booking/Tourguides" />
      <Stack.Screen name="Booking/Vehicles" />
      <Stack.Screen name="Booking/Hotels" />
      <Stack.Screen name="Booking/Items" />
      <Stack.Screen name="Booking/Activities" />
      <Stack.Screen name="MyBookings" />
      <Stack.Screen name="Blogs/articles" />
    </Stack>
  );
}
