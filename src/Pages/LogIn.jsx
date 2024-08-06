import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { loginSuccess } from "../Redux/AuthReducer/action";
import "../App.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      const { token } = response.data;

      dispatch(loginSuccess(token));
      sessionStorage.setItem("token", token);

      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="inputEmail">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="inputPass">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
