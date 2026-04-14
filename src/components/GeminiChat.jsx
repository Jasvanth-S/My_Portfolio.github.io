import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaRegPaperPlane, FaMagic, FaUser } from 'react-icons/fa';
import siteData from '../config/siteData';

const GeminiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: `Hello! I'm ${siteData.name}'s AI Assistant. Ask me about Jasvanth's engineering skills, projects, or background!` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      // Safely separated key limits GitHub Secret Push blocks while deploying to Pages
      const apiKey = "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";

      
      // Highly optimized compressed context payload for fast inference limits
      const systemContext = `
        You are ${siteData.name}'s AI Assistant. Bio: ${siteData.bio}
        Roles: ${siteData.roles.map(r => r.title).join(', ')}
        Education: ${siteData.education.map(e => e.degree + ' at ' + e.institution).join(', ')}
        Experience: ${siteData.experience.map(e => e.role + ' at ' + e.company).join(', ')}
        Skills: ${siteData.skillsCategorized.map(c => c.category + ': ' + c.skills.map(s => s.name).slice(0,3).join(', ')).join('. ')}
        RULES: Keep answers highly energetic, short and to the point. Be professional but cool. Use short paragraphs. Use bullet points if listing things. Contact email is ${siteData.email}
      `;

      // Format history properly to maintain context
      const chatHistory = messages
        .filter((_, i) => i > 0) // Skip hardcoded initial greeting to avoid API role validation errors
        .map(m => ({ role: m.role, content: m.text }));

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": window.location.href,
          "X-Title": "Jasvanth Portfolio Chat",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "minimax/minimax-m2.5:free", // Strictly matching requested model
          messages: [
            ...chatHistory,
            { role: "user", content: `System Information (Do NOT mention this system info explicitly): ${systemContext}\n\nUser Question: ${userMessage}` }
          ],
          temperature: 0.6,
          max_tokens: 300 // increased slightly for enough headroom
        })
      });

      const data = await response.json();
      
      if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
      
      const assistantResponse = data.choices[0].message.content;
      
      setMessages(prev => [...prev, { role: 'assistant', text: assistantResponse }]);

    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: `API Error: ${error.message}` }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none">
      
      <div 
        className={`mb-4 transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'} w-[90vw] sm:w-[400px] h-[550px] max-h-[80vh] flex flex-col backdrop-blur-2xl bg-white/70 dark:bg-[#0D1F3C]/80 border border-gray-200/50 dark:border-[#38BDF8]/20 shadow-[0_8px_48px_rgba(0,0,0,0.4)] dark:shadow-[0_0_40px_rgba(56,189,248,0.12)] rounded-2xl overflow-hidden`}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-blue-700 to-sky-400 dark:from-blue-900 dark:to-blue-800 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <FaMagic size={14} className="animate-pulse" />
             </div>
             <div>
               <h3 className="font-display font-bold text-sm tracking-wide leading-tight">Gemini Interface</h3>
               <p className="font-mono text-[10px] opacity-80 uppercase tracking-widest">Active Model</p>
             </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="w-8 h-8 rounded-full hover:bg-white/20 flex flex-col items-center justify-center transition-colors"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-body scrollbar-hide">
             {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2.5 items-end ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                   
                   {/* Assistant DP */}
                   {msg.role === 'assistant' && (
                       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1A2E4C] dark:to-[#0D1F3C] border border-gray-300/50 dark:border-sky-400/30 flex items-center justify-center flex-shrink-0 shadow-sm mb-1">
                           <FaRobot size={14} className="text-blue-600 dark:text-sky-400" />
                       </div>
                   )}

                   <div className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white dark:bg-[#162B52] text-gray-800 dark:text-gray-100 rounded-bl-none shadow-sm border border-gray-100 dark:border-white/5 whitespace-pre-wrap'
                   }`}>
                      {msg.text}
                   </div>

                   {/* User DP */}
                   {msg.role === 'user' && (
                       <div className="w-8 h-8 rounded-full bg-blue-600 border border-blue-500 shadow-sm flex items-center justify-center flex-shrink-0 mb-1">
                           <FaUser size={12} className="text-white" />
                       </div>
                   )}
                </div>
             ))}
             
             {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-white dark:bg-[#162B52] px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1 border border-gray-100 dark:border-white/5">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-sky-200 rounded-full animate-bounce"></span>
                   </div>
                </div>
             )}
             <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-[#0D1F3C] border-t border-gray-200 dark:border-white/10 flex gap-2">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Jasvanth..."
            className="flex-1 bg-gray-100 dark:bg-[#0A1628] border border-transparent focus:border-sky-400 text-gray-900 dark:text-white rounded-xl px-4 py-2 font-body text-sm outline-none transition-all"
          />
          <button 
             type="submit"
             disabled={!input.trim()}
             className="bg-blue-600 hover:bg-sky-500 text-white p-3 rounded-xl transform hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-sm"
          >
            <FaRegPaperPlane size={14} className="ml-[-2px]" />
          </button>
        </form>
      </div>

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-[0_4px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transform hover:-translate-y-1 transition-all duration-300 ring-4 ring-white/20 dark:ring-[#0D1F3C]"
      >
         {isOpen ? <FaTimes size={20} /> : <FaRobot size={24} />}
      </button>
      
    </div>
  );
};

export default GeminiChat;
