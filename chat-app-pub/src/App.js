import React, { useState, useEffect } from 'react';
import { PubSub } from './PubSub';

const pubsub = new PubSub();

const ChatUser = ({ user }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const unsubscribe = pubsub.subscribe('message', (message) => {
            setMessages(prev => [...prev, message]);
        });
        return () => unsubscribe();
    }, []);

    const sendMessage = () => {
        if (input.trim()) {
            const messageObj = { user, text: input };
            pubsub.publish('message', messageObj);
            setInput('');
        }
    };

    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h3>{user}</h3>
            <div style={{ minHeight: '100px', border: '1px solid #ddd', padding: '5px' }}>
                {messages.map((msg, idx) => (
                    <div key={idx}><strong>{msg.user}:</strong> {msg.text}</div>
                ))}
            </div>
            <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default function ChatApp() {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <ChatUser user="Alice" />
            <ChatUser user="Bob" />
        </div>
    );
}
