import React from "react";

interface WithAuthenticationProps {
  component: React.ReactNode;
  isAuthenticate: boolean;
}
const WithAuthentication = ({
  component,
  isAuthenticate,
}: WithAuthenticationProps) => {
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
