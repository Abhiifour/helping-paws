import React, { useState } from "react";
import "./Signup.scss";
import { Link, useNavigate } from "react-router-dom";
import dogesh from "../../assests/person-gardening.png";
import gif from "../../assests/beagle.gif";
import { signup } from "../../auth/supabase";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await signup({ name, email, password });
      if (res) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="signup container">
      <h1 className="heading">Be A Part.</h1>
      <div className="gif-box">
        <img src={gif} alt="" />
      </div>
      <div className="img-box">
        <img src={dogesh} alt="bgimg" />
      </div>
      <div className="signup-box ">
        <form className="center">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
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
          <button className="btn-primary" onClick={handleSignUp}>
            Signup
          </button>
          <p>
            Already Registered ? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
      </div>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}

export default Signup;
