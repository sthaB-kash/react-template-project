import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import "./auth.css";
import { useLoginMutation } from "../../services/auth";
import { login } from "../../actions/user";
import App from "../../App";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    setShowPassword(e.target.checked);
  };

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  
  const [credentials, { data, error, isLoading }] = useLoginMutation();

  useEffect(() => {
    console.log(user);
    if (data) {
      dispatch(login(data));
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    credentials({email, password});
  }

  useEffect(() => {
    if (user.isLoggedIn) {
      window.location.href = "/";
    }
  }, [user.isLoggedIn]);

 return (
    user.isLoggedIn === true ? <App/> : (
      <form className="login-form auth" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type={showPassword ? "text" : "password"} name="password" />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="showPassword"
            value={showPassword}
            onChange={handleShowPassword}
          />{" "}
          Show Password
        </label>
      </div>
      <input type="submit" value="Login" />
      <div>
        <p>
          Don't have account yet? <a href="/register">Register Now</a>
        </p>
      </div>
    </form>
    )
  );
};

export default Login;
