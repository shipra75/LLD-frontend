const MessageList=({messages,currentUser })=> {
    return (
        <div className="chat-box">
            {messages.map ((msg, index) => {
                return(
                <div key={index}
                className={`message ${msg.sender===currentUser?"sent" : "received"}`}>
                    <div className="sender">{msg.sender}</div>
                    <div className="text">{msg.text}</div>
                    <div className="time">{msg.timeStamp }</div>
                    </div>
           ) })}
        </div>
    )
}
export default MessageList;