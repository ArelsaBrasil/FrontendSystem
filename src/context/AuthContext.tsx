import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/Api";
import { signInRequest, validateCurrentUser } from "../api/Auth";
type SignInData = {
  userName: string;
  password: string;
};
type User = {
  id: number;
  name: string;
  UserName: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  recoverUserInformation: () => Promise<Object>;
  setUser: Dispatch<SetStateAction<User | null>>;
};
type ChildreType = {
  children: JSX.Element;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ChildreType) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  async function signIn({ userName, password }: SignInData) {
    try {
      const { token, user } = await signInRequest({
        userName,
        password,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser(user);
      localStorage.setItem("current_user", JSON.stringify({ token, user }));
      navigate("/luzes/home");
    } catch (error) {
      alert(error);
    }
  }
  async function recoverUserInformation() {
    const currentUserDataStorage = JSON.parse(
      localStorage.getItem("current_user") || "{}"
    );
    try {
      const validCurrentUser = await validateCurrentUser(
        currentUserDataStorage.token
      );
      setUser(validCurrentUser);
      return validCurrentUser;
    } catch (error) {
      return navigate("/luzes");
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, setUser, signIn, recoverUserInformation }}
    >
      {children}
    </AuthContext.Provider>
  );
}
