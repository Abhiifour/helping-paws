import React, { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const configuration = new Configuration({
    apiKey: "sk-proj-RXWh0pyp2FDSvnTq8K4FT3BlbkFJYnp5u3cciS3R8z5PekaW",
  });

  const openai = new OpenAIApi(configuration);
  const handleSendMessage = async () => {
    const response = await openai.chat.create({
      messages: [
        ...messages,
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: input },
      ],
    });

    setMessages([
      ...messages,
      { role: "user", content: input },
      { role: "assistant", content: response.choices[0].message.content },
    ]);
    setInput("");
  };

  return (
    <div>
      <div className="chatbox">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatBot;
