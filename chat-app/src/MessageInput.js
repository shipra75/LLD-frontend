import React, { useState } from "react";
const MessageInput=({sendMessage})=> {
    const [text, setText]= useState(" ")
    const handleSend =()=> {
        if(text.trim()!=="")
        {
            sendMessage(text)
            setText("")
        }
    }
    return (
        <div className="input-container">
            <input type="text"
            placeholder="Type your message"
                value={text}
                onChange ={(e)=> setText(e.target.value)}
                onKeyDown={(e)=> e.key==="Enter"&& handleSend()}>

            </input>
            <button onClick={handleSend}> send</button>
        </div>
    )
}
export default MessageInput;