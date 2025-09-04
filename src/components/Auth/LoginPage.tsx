import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import userIcon from "../../assets/User_box.svg";
import { useNavigate } from "react-router-dom";
import { loginUser, selectAuth } from "../../store/slices/authSlice";
import Login from "../../assets/Login.jpg";

const LoginPage = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const { loading, error } = useSelector(selectAuth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Credentials->", { username, password });
    dispatch(loginUser({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="login-page-div">
      <div className="login-page-card">
        <div>
          <img src={Login} />{" "}
        </div>
        <div className="login-page-content">
          <div className="login-page-header">
            <div className="header">Welcome Back</div>
            <div className="sub-text">
              Enter your email and password to access your account
            </div>
          </div>
          <div className="login-page-form">
            <div className="user-details">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter username"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="user-details">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="login-submit-btn"
              onClick={(e) => handleSubmit(e)}
              disabled={loading}
            >
              {" "}
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
