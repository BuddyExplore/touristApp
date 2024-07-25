import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
        case "SIGNUP":
            return { user: action.payload.user, token: action.payload.token };
        case "LOGOUT":
            return { user: null, token: null };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        token: null
    });

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const user = await AsyncStorage.getItem("user");
                const token = await AsyncStorage.getItem("token");
                if (user && token) {
                    dispatch({ type: "LOGIN", payload: { user: JSON.parse(user), token: token } });
                }
            } catch (error) {
                console.error("Failed to load user data:", error);
            }
        };

        loadUserData();
    }, []);

    const signup = async (first_name, last_name, mobile_no, email, password) => {
        try {
            const response = await axios.post("http://localhost:5001/signup", {
                first_name,
                last_name,
                mobile_no,
                email,
                password,
                role : "TOURIST",
            });

            if (response.status === 200 && response.data.code === "00") {
                await AsyncStorage.setItem("user", JSON.stringify(response.data.content.user));
                await AsyncStorage.setItem("token", response.data.content.jwtToken);
                dispatch({ type: "SIGNUP", payload: { user: response.data.content.user, token: response.data.content.jwtToken } });
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            console.error("Signup failed:", error.message);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ ...state, dispatch, signup }}>
            {children}
        </AuthContext.Provider>
    );
};
