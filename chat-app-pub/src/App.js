import React, { useState, useEffect, useRef, useCallback  } from 'react';
import debounce from 'lodash.debounce';
import { PubSub } from './PubSub';

const pubsub = new PubSub();

const ChatUser = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typingUser, setTypingUser] = useState(null);
  const typingTimeout = useRef(null);

  useEffect(() => {
    const unsubscribeMessage = pubsub.subscribe('message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    const unsubscribeTyping = pubsub.subscribe('typing', (typingUser) => {
      if (typingUser !== user) {
        setTypingUser(typingUser);

        clearTimeout(typingTimeout.current);
        typingTimeout.current = setTimeout(() => {
          setTypingUser(null);
        }, 1000); // clear after 1 second of no typing
      }
    });
    
    return () => {
      unsubscribeMessage();
      unsubscribeTyping();
    };
  }, [user]);
  const debouncedTyping = useCallback(
    debounce(() => pubsub.publish('typing', user), 300),
    [user]
  );
  const sendMessage = () => {
    if (input.trim()) {
      pubsub.publish('message', { user, text: input });
      setInput('');
    }
  };

  const handleTyping = (e) => {
    setInput(e.target.value);
    debouncedTyping()
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h3>{user}</h3>
      <div style={{ minHeight: '100px', border: '1px solid #ddd', padding: '5px', marginBottom: '5px' }}>
        {messages.map((msg, idx) => (
          <div key={idx}><strong>{msg.user}:</strong> {msg.text}</div>
        ))}
        {typingUser && <div style={{ fontStyle: 'italic' }}>{typingUser} is typing...</div>}
      </div>
      <input 
        value={input}
        onChange={handleTyping}
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
