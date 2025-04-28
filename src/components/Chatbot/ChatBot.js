import React, { useState } from "react";
import "./ChatBot.scss";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyA0JnxQVBHvPgsLvuBMBYYfEupjXHmsbyc"; 
// const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

function ChatBot() {
  const genAi = new GoogleGenerativeAI(API_KEY);
  const model = genAi.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const [messages, setMessages] = useState([
    { text: "👋 Hi there! I'm Vet Bot. How can I assist you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await model.generateContent(input);
      const botReply = res.response.text() || "⚡ Sorry, I didn't get that!";
      const botMessage = { text: botReply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage = { text: "❌ Error connecting to Vet", sender: "bot" };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.sender === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;
