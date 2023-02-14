import axios from "axios";
import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const AUTH_TOKEN = localStorage.getItem("auth_token");

export const Login = () => {
  
  return (
    <div className="Login">
      <h1>Adelphi</h1>
      <a
        className="LoginBtn"
        href="https://localhost:5287/Auth/Login?ReturnUrl=http://localhost:3000/accounts"
      >
        Login
      </a>
    </div>
  );
};
