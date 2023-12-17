import {useAuth} from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {isLoggedIn, setIsLoggedIn} = useAuth();
  const navigate = useNavigate();
  const login = () => {
    setIsLoggedIn(true);
    navigate("/",{ replace:true });
  }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;
