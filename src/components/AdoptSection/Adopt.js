import React from "react";
import "./Adopt.scss";
import { BsSuitHeartFill } from "react-icons/bs";
import heartImg from "../../assests/heart.png";
import { useNavigate, Link } from "react-router-dom";

function Adopt() {
  const navigate = useNavigate();
  return (
    <div className="Adopt">
      <div className="adopt-content container">
        <div className="adopt-details center">
          <div className="img-main center">
            <div className="img-container">
              <BsSuitHeartFill className="icon" />
            </div>
          </div>
          <div className="text center">
            <h1 className="title">#LovePaws</h1>
            <p className="main-content">
              Approximately 1478 dogs & cats die every day on road in India.
              India, like many other countries, faces challenges associated with
              stray dog populations. With an estimated population of over 30
              million stray dogs, India has one of the largest populations of
              free-roaming dogs in the world.
            </p>
          </div>
        </div>
        <BsSuitHeartFill className="icon-filled one" />
        <BsSuitHeartFill className="icon-filled two" />
        <BsSuitHeartFill className="icon-filled three" />
        <BsSuitHeartFill className="icon-filled four" />
        <BsSuitHeartFill className="icon-filled five" />
        <BsSuitHeartFill className="icon-filled six" />
        <BsSuitHeartFill className="icon-filled seven" />
        <BsSuitHeartFill className="icon-empty eight" />
        <BsSuitHeartFill className="icon-empty nine" />
        <div className="button-box center">
          <Link to="/Consult">
            <button>Consult a Vet</button>
          </Link>
        </div>
        <div className="message">Adopt,Don't Shop</div>
      </div>
    </div>
  );
}

export default Adopt;
