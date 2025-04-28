import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import dogesh from "../../assests/person-gardening.png";
import gif from "../../assests/golden-retriever.gif";
import { GoogleSignIn, login } from "../../auth/supabase";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await login({ email, password });
      if (res) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await GoogleSignIn();
      if (res) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="Login container">
      <h1 className="heading">Join Us!</h1>
      <div className="gif-box">
        <img src={gif} alt="" />
      </div>
      <div className="img-box">
        <img src={dogesh} alt="bgimg" />
      </div>
      <div className="login-box ">
        <form className="center" onSubmit={handleSubmit}>
          <label htmlFor="email" className="email" id="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" id="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-primary" onClick={handleSubmit}>
            Login
          </button>


          <button className="btn-primary" onClick={handleGoogleLogin}>
            Login with Google
          </button>
          <p>
            Not Registered ? <Link to="/signup">Signup</Link>{" "}
          </p>
        </form>
      </div>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}

export default Login;
