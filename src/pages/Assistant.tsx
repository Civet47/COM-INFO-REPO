import React from 'react';
import { MessageSquare, Send, Sparkles, Trash2, Copy, Check } from 'lucide-react';
import { brainstormArguments } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { cn } from '../utils';

export function Assistant() {
  const [motion, setMotion] = React.useState('');
  const [format, setFormat] = React.useState('BP');
  const [result, setResult] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleBrainstorm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!motion.trim()) return;

    setLoading(true);
    try {
      const response = await brainstormArguments(motion, format);
      setResult(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3">
          Debate Assistant
          <Sparkles className="w-8 h-8 text-amber-500" />
        </h1>
        <p className="text-[#78716C]">Brainstorm arguments, info slides, and clashes for any motion.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Panel */}
        <div className="lg:col-span-1 space-y-6">
          <form onSubmit={handleBrainstorm} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#78716C]">Motion</label>
              <textarea
                value={motion}
                onChange={(e) => setMotion(e.target.value)}
                placeholder="Enter motion text here..."
                className="w-full h-32 p-4 bg-white border border-[#E7E5E4] rounded-2xl text-sm focus:ring-2 focus:ring-[#1C1917] transition-all resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#78716C]">Format</label>
              <div className="grid grid-cols-2 gap-2">
                {['BP', 'WSDC'].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFormat(f)}
                    className={cn(
                      "py-2 rounded-xl text-sm font-bold border transition-all",
                      format === f 
                        ? "bg-[#1C1917] text-white border-[#1C1917]" 
                        : "bg-white text-[#78716C] border-[#E7E5E4] hover:border-[#1C1917]"
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !motion.trim()}
              className="w-full py-4 bg-[#1C1917] text-white rounded-2xl font-bold hover:bg-[#44403C] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                'Analyzing...'
              ) : (
                <>
                  Brainstorm <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {result && (
            <button
              onClick={() => {
                setResult(null);
                setMotion('');
              }}
              className="w-full py-3 text-[#78716C] hover:text-red-600 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Trash2 className="w-4 h-4" /> Clear Session
            </button>
          )}
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-2 bg-white border border-[#E7E5E4] rounded-3xl p-8 min-h-[500px] relative shadow-sm">
          {result ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-4">
                <h3 className="font-bold text-lg">Analysis Result</h3>
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-[#F5F5F4] rounded-lg transition-colors flex items-center gap-2 text-xs font-medium text-[#78716C]"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div className="prose prose-sm prose-stone max-w-none">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#A8A29E]">
              <div className="w-16 h-16 bg-[#F5F5F4] rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 opacity-20" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-[#1C1917]">Ready to assist</p>
                <p className="text-sm">Enter a motion and select a format to <br /> start brainstorming arguments.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
