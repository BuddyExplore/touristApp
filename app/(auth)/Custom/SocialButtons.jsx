import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
//import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { Ionicons } from '@expo/vector-icons';

WebBrowser.maybeCompleteAuthSession();

const SocialButtons = () => {
  //useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [startOAuthFlow]);

  const onLoginFacebook = () => {
    console.warn("onLoginFacebook");
  };

  const onLoginGoogle = () => {
    console.warn("onLoginApple");
  };

  return (

    /*<View style={styles.container}>
      <Ionicons name="logo-facebook" size={40} color="#3b5998" onPress={onLoginFacebook} style={styles.icon} />
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/></svg>
      <Ionicons name="logo-apple" size={40} color="black" onPress={onLoginApple} style={styles.icon} />
    </View>*/


    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>

      <TouchableOpacity
        onPress={onLoginFacebook} style={styles.iconBorder}>
        <Ionicons name="logo-facebook" size={40} color="#3b5998" style={styles.icon} resizemode='contain' />
        <Text>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onLoginGoogle} style={styles.iconBorder}>

        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" style={styles.icon} resizemode='contain'>
          <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" />
          <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" />
          <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" />
          <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" />
        </svg>

        <Text>Google</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  iconBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 52,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginRight: 4,
  },
  icon: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
});

export default SocialButtons;
