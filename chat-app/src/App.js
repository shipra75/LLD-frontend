import logo from './logo.svg';
import React, { useEffect, useRef, useState } from "react";
import './App.css';
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function App() {
 const [messages, setMessages]= useState([])
 const [currentUser, setCurrentUser] = useState("UserA")
 const ws =useRef(null);
 useEffect(()=> {
  ws.current = new WebSocket("ws://localhost:8080")
  ws.current.onmessage =(event)=> {
    const msg = JSON.parse(event.data)
    setMessages((prev)=> [...prev, msg])
  }
  return () => {
    ws.current.close();
  };
}, []);

  const sendMessage =(text) => {
    const newMessage = {
      text,
      sender: currentUser,
      timestamp: new Date().toLocaleTimeString(),
    }
    setMessages([...messages, newMessage])
  }
  const switchUser =()=> {
    setCurrentUser(currentUser ==="UserA"? "UserB": "UserA")
  }
  return (
    <><div className="App">
      <h1> React Chat App</h1>
      <div classNme="user-switch"></div>
      <button onClick={switchUser}>
        switch to {currentUser === "UserA" ? "User B" : "User A"}
      </button>
      <span> current: {currentUser}</span>
    </div><MessageList messages={messages} currentUser={currentUser}/>
    <MessageInput sendMessage={sendMessage}></MessageInput></>
  );
}

export default App;
