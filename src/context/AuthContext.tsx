import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { signInRequest } from "../services/auth";
type SignInData = {
  userName: string;
  password: string;
};
type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};
type ChildreType = {
  children: JSX.Element;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ChildreType) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem("current_user") || "{}");

    if (token) {
    }
  });

  // async function recoverUserInformation(token:string) {
  //   let config = {
  //     headers: { Authorization: `Bearer ${token}` }
  //   }
  //   await axios
  //     .get("http://localhost:3001/profile", config)
  //     .then(function (response) {
  //       setUser(response);

  //     })
  //     .catch(function (error) {
  //      console.log(error);;
  //     });
  // }

  async function signIn({ userName, password }: SignInData) {
    try {
      const { token, user } = await signInRequest({
        userName,
        password,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      setUser(user);
      localStorage.setItem("current_user", JSON.stringify({ token, user }));
      navigate("/luzes/home")
    } catch (error) {
      alert(error);
    }
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
