import { useState } from "react";
import "./App.css";
import WithAuthentication from "./components/HOC/WithAuthentication";
import Article from "./components/Article";
import { Button } from "@mui/material";

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(true);

  return (
    <>
      <Button
        onClick={() => setIsAuthenticate(!isAuthenticate)}
        variant="contained"
        color="secondary"
      >
        Toggle Access
      </Button>
      <WithAuthentication
        isAuthenticate={isAuthenticate}
        component={<Article />}
      />
    </>
  );
}

export default App;
