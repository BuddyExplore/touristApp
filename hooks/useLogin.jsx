import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useRouter, useNavigation } from "expo-router";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const router = useRouter();

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5001/login", {
        email,
        password,
        role: "TOURIST",
      });

      if (response.status === 200 && response.data.code === "00") {
        console.log(response);

        // Save content in local storage
        localStorage.setItem("token", response.data.content.jwtToken);
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.content.user)
        );

        // Update the auth context
        dispatch({
          type: "LOGIN",
          payload: {
            user: response.data.content.user,
            token: response.data.content.jwtToken,
          },
        });
        // Redirect to Login page
        router.replace("/explore");

        return { ok: true };
      } else {
        setError(response.data.message);
        return { ok: false, message: response.data.message };
      }
    } catch (err) {
      setError(err.message);
      return { ok: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    handleLogin,
  };
};
