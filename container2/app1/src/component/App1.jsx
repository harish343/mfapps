import io from "socket.io-client";
import { useState, useEffect } from "react";
import "./App1.css"; // Import CSS file for styling

const socket = io.connect("http://localhost:3005");
const userName = "user1";
const predefinedMessages = ["I am working", "I am Busy","Good night"];
function App2() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("send_message", { message, userName });
    setMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (payload) => {
      setMessageReceived([...messageReceived, payload]);
    });
  }, [messageReceived]); // Add messageReceived as a dependency to avoid multiple event listeners

  const handlePredefinedClick = (predefinedMessage) => {
    setMessage(predefinedMessage);

    socket.emit("send_message", { message: predefinedMessage, userName });
    setMessage("");

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat app</h1>
        <div className="message-container">
          {messageReceived.map((payload, index) => {
            const isCurrentUser = payload.userName === userName;
            return (
              <p
                key={index}
                className={`message ${isCurrentUser ? "current-user" : ""}`}
              >
                <span>{payload.message}</span>
              </p>
            );
          })}
        </div>
        <form onSubmit={sendChat}>
          <input
            type="text"
            name="chat"
            placeholder="send text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button type="submit">Send</button>
        </form>
        <div className="predefined-container">
          {predefinedMessages.map((msg, index) => (
            <button
              key={index}
              type="button"
              className="predefined-button"
              onClick={() => handlePredefinedClick(msg)}
            >
              {msg}
            </button>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App2;
