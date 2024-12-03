import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "./Custom/CustomInput";
import CustomButton from "./Custom/CustomButton";
import { useRouter } from "expo-router";
import axios from 'axios';
import {Urls} from "../../constants/Urls"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const router = useRouter();
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email, password) => {
    console.log(password)
    try {

      const response = await axios.post(`${Urls.SPRING}/login`, {
        
          email,
          password
      
      });


      if (response.status === 200 && response.data.code === "00") {
        console.log("Login response:", response.data.content.user);

        // Save content in AsyncStorage
        await AsyncStorage.setItem("token", response.data.content.jwtToken);
        await AsyncStorage.setItem(
          "user",
          JSON.stringify(response.data.content.user)
        );


        // Return the user's role
        return { ok: true, role: response.data.content.user.role };
      } else {
        return { ok: false, message: response.data.message };
      }
    } catch (err) {
      return { ok: false, message: err.message };
    }
  };

  const onLoginPressed = async (e) => {
     e.preventDefault();
    // // router.replace("../dashboard");
    const result = await handleLogin(email, password);

    if (result.ok) {
        router.push('/explore');     
     } else {
       console.error(result.message);
     }
  };

  const [isPasswordShown, setIsPasswordShown] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Image
            // tintColor={"black"}
            source={require("../../assets/images/logo.png")}
            style={{
              width: 120,
              height: 110,
            }}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 24,
              //fontWeight: "bold",
              color: "black",
              marginVertical: 20,
            }}
          >
            Let's sign you In!
          </Text>

         

          <View style={{ marginBottom: 12 }}>
            <Text style={styles.inputTextTop}>Email Address</Text>

            <CustomInput
              placeholder="Enter your email address"
              placeholderTextColor="black"
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
              setValue={setEmail}
            />
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={styles.inputTextTop}>Password</Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="black"
                secureTextEntry={isPasswordShown}
                style={{
                  width: "100%",
                  borderWidth: 0,
                }}
                setValue={setPassword}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {isPasswordShown == true ? (
                  <Ionicons name="eye" size={24} color="black" />
                ) : (
                  <Ionicons name="eye-off" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <TouchableOpacity
              onPress={() => router.replace("/ForgotPassword")}
              style={{
                fontSize: 16,
                color: "black",
              }}
            >
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            title="Log in"
            filled
            style={{
              backgroundColor: "#0A89FF",
              borderColor: "#0A89FF",
              marginTop: 18,
              marginBottom: 4,
            }}
            onPress={onLoginPressed} //hereeeeeeeeeeee
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 12,
            }}
          >

          </View>


          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <Text>Dont have an account?</Text>
            <TouchableOpacity
              onPress={() => router.replace("/Signup")}
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              <Text>Create one</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputTextTop: {
    fontSize: 16,
    //fontWeight: 400,
    marginVertical: 8,
  },
  link: {
    color: Colors.PRIMARY,
  },
});

export default Login;
