import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <div className="bg-light w-50 p-5 my-5 mx-auto text-center container shadow-lg rounded">
        <h3>Login before you continue</h3>
        <button className="btn btn-warning" onClick={handleGoogleLogin}>
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Login;
