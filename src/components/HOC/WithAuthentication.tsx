import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

interface WithAuthenticationProps {
  component: React.ReactNode;
}
const WithAuthentication = ({ component }: WithAuthenticationProps) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <h1>Context not provided</h1>;
  }

  const { isAuthenticate } = authContext;
  return (
    <>
      {!isAuthenticate ? (
        <h1>Vous n'êtes pas autorisé à voir cet article</h1>
      ) : (
        component
      )}
    </>
  );
};

export default WithAuthentication;
