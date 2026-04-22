import React from 'react';
import { MessageSquare, Send, Sparkles, Trash2, User, Bot } from 'lucide-react';
import { groqChat } from '../services/groqService';
import ReactMarkdown from 'react-markdown';
import { cn } from '../utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function Assistant() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message to UI
    const updatedMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      // Send full history to Groq (since it's stateless)
      const response = await groqChat(updatedMessages);
      setMessages(prev => [...prev, { role: 'assistant', content: response.text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const testAnthropic = async () => {
    setLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: "Testing Anthropic: What is the capital of France?" }]);
    try {
      const response = await fetch('/api/anthropic/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setMessages(prev => [...prev, { role: 'assistant', content: `**Anthropic Response:** ${data.text}` }]);
    } catch (error: any) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: `**Anthropic Error:** ${error.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col space-y-4">
      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            AI Debate Coach
            <Sparkles className="w-6 h-6 text-amber-500" />
          </h1>
          <p className="text-sm text-[#78716C]">Your multi-turn research and brainstorming assistant.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={testAnthropic}
            className="px-3 py-1.5 text-xs font-bold bg-zinc-100 text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2"
            title="Test Anthropic Implementation"
          >
            <Bot className="w-4 h-4" />
            Test Anthropic
          </button>
          <button
            onClick={clearChat}
            className="p-2 text-[#78716C] hover:text-red-600 transition-colors"
            title="Clear Conversation"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 bg-white border border-[#E7E5E4] rounded-3xl overflow-hidden flex flex-col shadow-sm">
        {/* Chat Thread */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
        >
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#A8A29E]">
              <div className="w-16 h-16 bg-[#F5F5F4] rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 opacity-20" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-[#1C1917]">Start a conversation</p>
                <p className="text-sm max-w-xs">Ask me to brainstorm arguments, explain a format, or research a motion.</p>
              </div>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex gap-4 max-w-[85%]",
                  msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  msg.role === 'user' ? "bg-[#1C1917]" : "bg-amber-100"
                )}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-amber-700" />}
                </div>
                <div className={cn(
                  "p-4 rounded-2xl text-sm leading-relaxed",
                  msg.role === 'user' 
                    ? "bg-[#1C1917] text-white rounded-tr-none" 
                    : "bg-[#F5F5F4] text-[#1C1917] rounded-tl-none border border-[#E7E5E4]"
                )}>
                  <div className="prose prose-sm prose-stone dark:prose-invert max-w-none">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))
          )}
          {loading && (
            <div className="flex gap-4 mr-auto">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center animate-pulse">
                <Bot className="w-4 h-4 text-amber-700" />
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F5F4] border border-[#E7E5E4] rounded-tl-none">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form 
          onSubmit={handleSend}
          className="p-4 border-t border-[#E7E5E4] bg-[#FAFAF9]"
        >
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your debate coach..."
              className="w-full pl-4 pr-12 py-4 bg-white border border-[#E7E5E4] rounded-2xl text-sm focus:ring-2 focus:ring-[#1C1917] transition-all outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="absolute right-2 p-2 bg-[#1C1917] text-white rounded-xl hover:bg-[#44403C] transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
