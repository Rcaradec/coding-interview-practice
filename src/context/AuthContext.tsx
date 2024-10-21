import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContextType {
  isAuthenticate: boolean;
  setIsAuthenticate: Dispatch<SetStateAction<boolean>>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
