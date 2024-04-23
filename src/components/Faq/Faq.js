import React from "react";
import "./Faq.scss";
import dogImg from "../../assests/dog-head.png";
import dogImg2  from "../../assests/pawprint.png";
import dogImg3 from "../../assests/adopt.png";
import { useNavigate } from "react-router-dom";
function Faq() {
  const navigate = useNavigate()
  return (
    <div className="Faq container">
      <h2 className="title">Planning to Adopt a Pet?</h2>

      <div className="main-box center">
        <div className="box center">
        <div className="img-box">
            <img src={dogImg2} alt="" />
        </div>
          <h3 className="box-title">Checklist for New Adopters</h3>
          <div className="box-subtitle">
            Help make the transition, as smooth as possible.
          </div>
          <button className="btn-secondary" onClick={()=>navigate('/Adopt')}>LEARN MORE</button>
        </div>
        <div className="box center">
        <div className="img-box">
            <img src={dogImg} alt="" />
        </div>
          <h3 className="box-title">Set up alerts</h3>
          <div className="box-subtitle">
          Want help searching? Sign up for Free or Premium New Pet Alerts, and we'll email you new matches.
          </div>
          <button className="btn-secondary" onClick={()=>navigate('/signup')}>LEARN MORE</button>
        </div>
        <div className="box center">
        <div className="img-box">
            <img src={dogImg3} alt="" />
        </div>
          <h3 className="box-title">Pet Adoption FAQs</h3>
          <div className="box-subtitle">
          Get answers to questions you haven't thought of.
          </div>
          <button className="btn-secondary" onClick={()=> navigate('/Rescue')}>LEARN MORE</button>
        </div>

      </div>
    </div>
  );
}

export default Faq;
