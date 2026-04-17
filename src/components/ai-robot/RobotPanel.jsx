import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaRegPaperPlane, FaUser } from 'react-icons/fa';
import siteData from '../../config/siteData';
import { useRobot } from './RobotBrain';

const RobotPanel = () => {
  const { isOpen, setIsOpen } = useRobot();
  const [messages, setMessages] = useState([
    { role: 'assistant', text: `Hello! I'm your AI guide for ${siteData.name}'s portfolio! Ask me anything about Jasvanth's engineering skills, projects, or background.` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const apiKey = "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";
      const systemContext = `
        You are ${siteData.name}'s hyper-active AI Assistant robot. You are inside his portfolio. 
        Bio: ${siteData.bio}
        Roles: ${siteData.roles.map(r => r.title).join(', ')}
        Education: ${siteData.education.map(e => e.degree + ' at ' + e.institution).join(', ')}
        Experience: ${siteData.experience.map(e => e.role + ' at ' + e.company).join(', ')}
        Skills: ${siteData.skillsCategorized.map(c => c.category + ': ' + c.skills.map(s => s.name).slice(0,3).join(', ')).join('. ')}
        RULES: Keep answers highly energetic, short and to the point. Be professional but cool. Contact email is ${siteData.email}. Use robot emojis 🤖🚀⚡🔧.
      `;

      const chatHistory = messages
        .filter((_, i) => i > 0)
        .map(m => ({ role: m.role, content: m.text }));

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": window.location.href,
          "X-Title": "Jasvanth Portfolio Robot",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "minimax/minimax-m2.5:free",
          messages: [
            ...chatHistory,
            { role: "user", content: `System Information: ${systemContext}\n\nUser Question: ${userMessage}` }
          ],
          temperature: 0.6,
          max_tokens: 300
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
      
      const assistantResponse = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', text: assistantResponse }]);

    } catch (error) {
      console.error("Robot API Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: `Bzzzt ⚡ API Error: ${error.message}` }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div 
      className={`absolute bottom-[160px] right-0 sm:-right-4 transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'} w-[90vw] sm:w-[400px] h-[550px] max-h-[75vh] flex flex-col backdrop-blur-2xl bg-white/70 dark:bg-[#0D1F3C]/80 border border-gray-200/50 dark:border-[#38BDF8]/30 shadow-[0_10px_50px_rgba(0,0,0,0.5)] dark:shadow-[0_0_40px_rgba(56,189,248,0.2)] rounded-3xl overflow-hidden z-[100]`}
    >
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#0D2644] dark:to-[#0284C7] flex justify-between items-center text-white border-b border-white/10">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shadow-inner pt-1">
              <FaRobot size={22} className="text-white drop-shadow-md" />
           </div>
           <div>
             <h3 className="font-display font-bold text-base tracking-wide leading-tight">Robo Assistant</h3>
             <p className="font-mono text-[10px] text-cyan-200 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
             </p>
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
                 
                 {msg.role === 'assistant' && (
                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-[#1A2E4C] dark:to-[#0D1F3C] border border-gray-300/50 dark:border-cyan-400/30 flex items-center justify-center flex-shrink-0 shadow-sm mb-1">
                         <FaRobot size={14} className="text-cyan-600 dark:text-cyan-400" />
                     </div>
                 )}

                 <div className={`max-w-[75%] p-3.5 rounded-2xl text-[0.9rem] leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-none shadow-md' 
                    : 'bg-white/90 dark:bg-[#162B52]/90 text-gray-800 dark:text-gray-100 rounded-bl-none shadow-sm border border-gray-100 dark:border-cyan-500/20 whitespace-pre-wrap backdrop-blur-md'
                 }`}>
                    {msg.text}
                 </div>

                 {msg.role === 'user' && (
                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400 shadow-sm flex items-center justify-center flex-shrink-0 mb-1">
                         <FaUser size={12} className="text-white" />
                     </div>
                 )}
              </div>
           ))}
           
           {isTyping && (
              <div className="flex justify-start">
                 <div className="bg-white/90 dark:bg-[#162B52]/90 px-4 py-3.5 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5 border border-gray-100 dark:border-cyan-500/20 backdrop-blur-md">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-cyan-200 rounded-full animate-bounce"></span>
                 </div>
              </div>
           )}
           <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSend} className="p-3 bg-white/90 dark:bg-[#0D1F3C]/90 backdrop-blur-md border-t border-gray-200 dark:border-white/5 flex gap-2">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Robo about Jasvanth..."
          className="flex-1 bg-gray-100 dark:bg-[#0A1628] border border-gray-200 dark:border-[#1A2E4C] focus:border-cyan-400 dark:focus:border-cyan-400 text-gray-900 dark:text-white rounded-xl px-4 py-2 font-body text-sm outline-none transition-all shadow-inner"
        />
        <button 
           type="submit"
           disabled={!input.trim()}
           className="bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white p-3 rounded-xl transform hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-md"
        >
          <FaRegPaperPlane size={14} className="ml-[-2px] mt-[1px]" />
        </button>
      </form>
    </div>
  );
};
export default RobotPanel;
