import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"

export const useLogin = () => {
  const [error, setError] = useState()
  const [loading, setLoading] = useState()
  const { dispatch } = useAuthContext()

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError(null);

    const response = await axios.post("http://localhost:5001/login", {
      email,
      password,
      role : "TOURIST",
    });

    if (response.status !== 200) {
      setLoading(false);
      setError(response.data.message);
    }

    if (response.status === 200) {
      console.log(response);

      if (response.data.code === "00") {
        // Saving content in the local storage
        localStorage.setItem("token", response.data.content.jwtToken)
        localStorage.setItem("user", JSON.stringify(response.data.content.user))

        // Updating the auth context
        dispatch({ type: "LOGIN", payload: { user: response.data.content.user, token: response.data.content.jwtToken } })
        setLoading(false)
      }
    }
  }

  return {
    error,
    loading,
    handleLogin,
  }
}
