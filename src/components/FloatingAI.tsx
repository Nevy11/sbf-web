import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Mic } from './Icon3D';
import styles from './FloatingAI.module.css';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export const FloatingAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'Hello! I am your SBF Companion. How can I help you blossom today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      if (!apiKey) throw new Error('API key not found');

      // Mock streaming / fetch from Groq API
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [
            { role: 'system', content: 'You are a compassionate, encouraging mental health and personal growth assistant for the Smart Blossoming Foundation.' },
            ...messages.map(m => ({ role: m.role === 'ai' ? 'assistant' : 'user', content: m.content })),
            { role: 'user', content: userMessage.content }
          ]
        })
      });

      const data: any = await response.json();
      if (data.choices && data.choices[0]) {
        setMessages(prev => [...prev, { role: 'ai', content: data.choices[0].message.content }]);
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: 'I am taking a mindful moment. Please try again later.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={styles.fabContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerTitle}>
              <Bot size={20} />
              <span>SBF Companion</span>
            </div>
            <button className={styles.closeButton} onClick={toggleOpen}>
              <X size={20} />
            </button>
          </div>
          
          <div className={styles.chatMessages}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`${styles.message} ${msg.role === 'ai' ? styles.ai : styles.user}`}>
                {msg.content}
              </div>
            ))}
            {isTyping && (
              <div className={styles.soundwaveContainer}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className={styles.chatInputArea}>
            <input 
              type="text" 
              className={styles.inputField} 
              placeholder="Ask for guidance..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className={styles.sendButton} onClick={handleSend} disabled={isTyping || !input.trim()}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      
      {!isOpen && (
        <button className={styles.fabButton} onClick={toggleOpen} aria-label="Open AI Companion">
          <Mic size={24} />
        </button>
      )}
    </div>
  );
};
