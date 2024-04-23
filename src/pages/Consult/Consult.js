import React from "react";
import Chat from "../../components/Chatbot/ChatBot";
import "./Consult.scss";

function Consult() {
  return (
    <div className="main">
    <div className="consult">
      <div className="title">
        Consult
      </div>
    </div>
      <div className="chatbox">
        <Chat />
      </div>
    </div>
  );
}

export default Consult;
