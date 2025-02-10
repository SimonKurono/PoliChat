import React, { useState } from 'react';
import '../styles/ChatWindow.css';
import { speakText } from '../utils/speak';
import { startListening } from '../utils/speechToText';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content }),
      });
      const data = await response.json();
      const botMessage = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, botMessage]);

      // Speak out the bot's response
      speakText(data.response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Define handleVoiceInput at the component level
  const handleVoiceInput = () => {
    startListening((transcript) => {
      setInput(transcript);
    });
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        {loading && <div className="loading">Bot is thinking...</div>}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Type or speak your incorrect political statement..."
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
        {/* Voice input button */}
        <button onClick={handleVoiceInput}>🎤</button>
      </div>
    </div>
  );
}

export default ChatWindow;
