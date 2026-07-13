import { createContext, useContext, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const queryClient = useQueryClient();

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved) : null;
    });

    const login = (token, user) => {

        queryClient.clear();

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        setToken(token);
        setUser(user);
    };

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        queryClient.clear();

        setToken(null);
        setUser(null);
    };

    const isAdmin = user?.role === "admin";
    const isAgent = user?.role === "agent";
    const isUser = user?.role === "user";

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                login,
                logout,
                isAuthenticated: !!token,

                isAdmin,
                isAgent,
                isUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);