import { useState } from "react";
import "./App.css";
import WithAuthentication from "./components/HOC/WithAuthentication";
import Article from "./components/Article";
import { Button } from "@mui/material";
import AuthContext from "./context/AuthContext";

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(true);

  return (
    <>
      <AuthContext.Provider value={{ isAuthenticate, setIsAuthenticate }}>
        <Button
          onClick={() => setIsAuthenticate(!isAuthenticate)}
          variant="contained"
          color="secondary"
        >
          Toggle Access
        </Button>
        <WithAuthentication component={<Article />} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
