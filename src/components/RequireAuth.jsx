import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const RequireAuth = ({ children }) => {
  const {isLoggedIn, setIsloggedIn} = useAuth();
  // const loggedIn = true;
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={"/login"}/>;
};

export default RequireAuth;
