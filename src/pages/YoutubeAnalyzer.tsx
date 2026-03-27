import React from 'react';
import { Youtube, Search, Loader2, FileText, AlertCircle, Sparkles } from 'lucide-react';
import { YoutubeTranscript } from 'youtube-transcript';
import { analyzeDebateTranscript } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { cn } from '../utils';

export function YoutubeAnalyzer() {
  const [url, setUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<string>('');
  const [analysis, setAnalysis] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const extractVideoId = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    const videoId = extractVideoId(url);
    
    if (!videoId) {
      setError('Invalid YouTube URL. Please provide a valid link.');
      return;
    }

    setLoading(true);
    setError(null);
    setAnalysis(null);
    setStatus('Fetching transcript...');

    try {
      const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
      const fullText = transcriptData.map(t => t.text).join(' ');
      
      if (!fullText) {
        throw new Error('No transcript found for this video.');
      }

      setStatus('Analyzing debate with AI...');
      const result = await analyzeDebateTranscript(fullText);
      setAnalysis(result);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to process video. Some videos have transcripts disabled.');
    } finally {
      setLoading(false);
      setStatus('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3">
          YouTube Debate Analyzer
          <Youtube className="w-10 h-10 text-red-600" />
        </h1>
        <p className="text-[#78716C]">Paste a YouTube link to a debate round to transcribe and analyze it.</p>
      </header>

      <div className="bg-white border border-[#E7E5E4] rounded-3xl p-8 shadow-sm space-y-6">
        <form onSubmit={handleAnalyze} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A29E]" />
            <input
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full pl-12 pr-4 py-4 bg-[#F5F5F4] border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#1C1917] transition-all"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !url.trim()}
            className="px-8 py-4 bg-[#1C1917] text-white rounded-2xl font-bold hover:bg-[#44403C] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shrink-0"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {status}
              </>
            ) : (
              'Analyze Debate'
            )}
          </button>
        </form>

        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-700 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            {error}
          </div>
        )}

        {!analysis && !loading && !error && (
          <div className="py-12 text-center space-y-4 text-[#A8A29E]">
            <div className="w-20 h-20 bg-[#F5F5F4] rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-10 h-10 opacity-20" />
            </div>
            <div className="space-y-1">
              <p className="font-bold text-[#1C1917]">No video analyzed yet</p>
              <p className="text-sm max-w-xs mx-auto">
                We'll fetch the captions and use AI to break down the arguments, speaker roles, and clashes.
              </p>
            </div>
          </div>
        )}

        {analysis && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-4">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Debate Breakdown
              </h3>
            </div>
            <div className="prose prose-stone max-w-none">
              <ReactMarkdown>{analysis}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>

      {/* Info Card */}
      <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl flex gap-4">
        <Info className="w-6 h-6 text-blue-600 shrink-0" />
        <div className="space-y-1">
          <p className="text-sm font-bold text-blue-900">How it works</p>
          <p className="text-xs text-blue-800 leading-relaxed">
            This tool fetches the official or auto-generated captions from the YouTube video. 
            It then uses Gemini AI to identify the motion, summarize each speaker (Prime Minister, Leader of Opposition, etc.), 
            and evaluate the technical quality of the debate. Note: Videos without captions cannot be analyzed.
          </p>
        </div>
      </div>
    </div>
  );
}

function Info({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
