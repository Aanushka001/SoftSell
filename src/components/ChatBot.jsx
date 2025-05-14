import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const dummyData = [
  { question: "What is Softsell?", answer: "Softsell is a platform to sell your software licenses." },
  { question: "How can I upload a license?", answer: "Click on the 'Upload License' button on the homepage." },
  { question: "How do I get paid?", answer: "Once your license is approved, payment will be processed within 24 hours." },
  { question: "Where is Softsell located?", answer: "Softsell is based in the USA, but we operate globally." },
  { question: "How do I contact customer support?", answer: "You can reach customer support via the 'Contact Us' page." },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleQuestion = (question, answer) => {
    setChatLog([...chatLog, { question, answer }]);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setChatLog([...chatLog, { question: userInput, answer: "This is a response from AI (placeholder)" }]);
      setUserInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        <MessageCircle size={28} />
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <h3>AI Assistant</h3>
          <div className="chat-content">
            {chatLog.map((chat, index) => (
              <div key={index} className="chat-message">
                <p><strong>Q:</strong> {chat.question}</p>
                <p><strong>A:</strong> {chat.answer}</p>
              </div>
            ))}
          </div>
          <div className="chat-options">
            {dummyData.map((item, index) => (
              <button
                key={index}
                onClick={() => handleQuestion(item.question, item.answer)}
                className="chat-option"
              >
                {item.question}
              </button>
            ))}
          </div>
          <div className="chat-input-form">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              className="chat-input"
              placeholder="Type your question..."
            />
            <button onClick={handleSendMessage} className="send-button">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
