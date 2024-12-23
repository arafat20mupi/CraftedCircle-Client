// import { useState, useEffect, useRef } from 'react';
// import { AiFillRobot } from 'react-icons/ai';

// const CraftedAi = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const [language, setLanguage] = useState('en'); // Default language is English
//     const chatBoxRef = useRef(null);
//     const [isTextarea, setIsTextarea] = useState(false);

//     const appendMessage = (message, sender) => {
//         setMessages((prevMessages) => [...prevMessages, { message, sender }]);
//     };

//     const sendMessage = async () => {
//         if (!input.trim()) return;

//         // Append user message to the chat
//         appendMessage(input, 'user');
//         setInput('');

//         try {
//             const response = await fetch('https://ai-api-for-career-canvas.vercel.app/chat', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ message: input, language }),
//             });

//             if (!response.ok) {
//                 const errorText = await response.text();
//                 throw new Error('Network response was not ok: ' + errorText);
//             }

//             const data = await response.json();
//             // Append AI response to the chat
//             appendMessage(data.response, 'ai');
//         } catch (error) {
//             console.error('Error:', error);
//             appendMessage('Error communicating with the AI. Please try again.', 'ai');
//         }
//     };

//     useEffect(() => {
//         if (chatBoxRef.current) {
//             chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//         }
//     }, [messages]);

//     const renderMessage = (msg, sender) => {
//         return (
//             <div className={`chat ${sender === 'user' ? 'chat-end' : 'chat-start'}`}>
//                 <div className="chat-image avatar">
//                     <div className="w-10 rounded-full">
//                         {
//                             sender === 'user' ?
//                                 <img
//                                     alt="User Avatar"
//                                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                                 /> :
//                                 <img
//                                     alt="User Avatar"
//                                     src="data:image/jpeg;base64,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"
//                                 />
//                         }
//                     </div>
//                 </div>
//                 <div className="chat-header">
//                     {sender === 'user' ? 'You ' : 'AI '}
//                     <time className="text-xs opacity-50">{new Date().toLocaleTimeString()}</time>
//                 </div>
//                 <div className="chat-bubble">{msg}</div>
//             </div>
//         );
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === "Enter" && e.shiftKey) {
//             e.preventDefault();
//             setIsTextarea(true);
//         }
//     };

//     return (
//         <div className="w-full md:w-11/12 lg:w-11/12 mx-auto bg-white shadow-lg p-4 rounded-lg">
//             <h1 className="text-3xl font-bold text-green-800 text-center mb-4">CraftedCircle Chatbot</h1>

//             {/* Language Selection Dropdown */}
//             <div className="text-center mb-4">
//                 <label className="mr-2 font-bold">Language:</label>
//                 <select
//                     className="p-2 border border-gray-300 rounded"
//                     value={language}
//                     onChange={(e) => setLanguage(e.target.value)}
//                 >
//                     <option value="en">English</option>
//                     <option value="bn">Bangla</option>
//                     <option value="hi">Hindi</option>
//                 </select>
//             </div>

//             <div ref={chatBoxRef} className="md:h-96 h-40 overflow-y-auto p-4 bg-gray-100 rounded-lg mb-4">
//                 {messages.map((msg, index) => (
//                     renderMessage(msg.message, msg.sender)
//                 ))}
//             </div>

//             <div className="w-full flex flex-col">
//                 {isTextarea ? (
//                     <textarea
//                         placeholder="Type your message..."
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         className="flex-1 p-2 border border-gray-300 rounded w-full resize-none"
//                         rows={4}
//                         onKeyDown={handleKeyPress}
//                     />
//                 ) : (
//                     <input
//                         type="text"
//                         placeholder="Type your message..."
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         className="flex-1 p-2 border border-gray-300 rounded w-full"
//                         onKeyDown={handleKeyPress}
//                     />
//                 )}
//                 <button
//                     onClick={sendMessage}
//                     className="mt-2 p-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
//                 >
//                     Send
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CraftedAi;

import { useContext, useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import { AuthContext } from "../../../provider/AuthProvider";

const CraftedAi = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);
  const [isTextarea, setIsTextarea] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);

  const appendMessage = (message, sender) => {
    setMessages((prevMessages) => [...prevMessages, { message, sender }]);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Append user message to the chat
    appendMessage(input, "user");
    setInput("");

    try {
      const response = await fetch(
        "https://ai-api-for-career-canvas.vercel.app/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input,}),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error("Network response was not ok: " + errorText);
      }

      const data = await response.json();
      // Append AI response to the chat
      appendMessage(data.response, "ai");
    } catch (error) {
      console.error("Error:", error);
      appendMessage("Error communicating with the AI. Please try again.", "ai");
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const renderMessage = (msg, sender) => {
    return (
      <div className={`chat ${sender === "user" ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            {sender === "user" ? (
              <img
                title={user.displayName}
                alt="User Avatar"
                referrerPolicy="no-referrer"
                src={user.photoURL}
              />
            ) : (
              <img
                alt="User Avatar"
                src="data:image/jpeg;base64,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"
              />
            )}
          </div>
        </div>
        <div className="chat-header">
          {sender === "user" ? "You " : "AI "}
          <time className="text-xs opacity-50">
            {new Date().toLocaleTimeString()}
          </time>
        </div>
        <div className="chat-bubble bg-gray-100 text-black">{msg}</div>
      </div>
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      setIsTextarea(true);
    }
  };

  return (
    <div className="w-full md:w-11/12 lg:w-11/12 mx-auto bg-white shadow-lg p-4 rounded-lg">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-4">
        CraftedCircle Chatbot
      </h1>
      <div
        ref={chatBoxRef}
        className="md:h-96 h-40 overflow-y-auto p-4 bg-white rounded-lg mb-4"
      >
        {messages.map((msg, index) =>
          renderMessage(msg.message, msg.sender, index)
        )}
      </div>

      <div className="w-full flex gap-3 items-center">
        {isTextarea ? (
          <textarea
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input input-bordered input-info w-full"
            rows={4}
            onKeyDown={handleKeyPress}
          />
        ) : (
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input input-bordered input-info w-full"
            onKeyDown={handleKeyPress}
          />
        )}
        <button
          onClick={sendMessage}
          className="btn btn-info text-xl bg-transparent"
        >
          <BiSend />
        </button>
      </div>
    </div>
  );
};

export default CraftedAi;
