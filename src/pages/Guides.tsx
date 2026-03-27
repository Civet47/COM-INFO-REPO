import React from 'react';
import { BookOpen, Users, Clock, Scale, Info } from 'lucide-react';
import { explainFormat } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

export function Guides() {
  const [activeTab, setActiveTab] = React.useState<'BP' | 'WSDC' | 'Policy' | 'LD'>('BP');
  const [aiExplanation, setAiExplanation] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const fetchAiExplanation = async (format: string) => {
    setLoading(true);
    try {
      const result = await explainFormat(format);
      setAiExplanation(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    setAiExplanation(null);
  }, [activeTab]);

  const formatNames = {
    BP: 'British Parliamentary',
    WSDC: 'World Schools',
    Policy: 'Policy (CX)',
    LD: 'Lincoln Douglas'
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Format Guides</h1>
        <p className="text-[#78716C]">Essential rules and strategies for competitive debating.</p>
      </header>

      {/* Tab Switcher */}
      <div className="flex flex-wrap p-1 bg-[#E7E5E4] rounded-xl w-fit gap-1">
        {(['BP', 'WSDC', 'Policy', 'LD'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab ? 'bg-white shadow-sm' : 'text-[#78716C] hover:text-[#1C1917]'}`}
          >
            {formatNames[tab]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Static Overview */}
        <div className="space-y-6">
          <div className="p-6 bg-white border border-[#E7E5E4] rounded-2xl space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Info className="w-5 h-5 text-[#A8A29E]" />
              Quick Overview
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 mt-1 text-[#A8A29E]" />
                <div>
                  <p className="text-sm font-bold">Participants</p>
                  <p className="text-xs text-[#78716C]">
                    {activeTab === 'BP' && '4 teams of 2 (8 debaters total)'}
                    {activeTab === 'WSDC' && '2 teams of 3-5 (3 speakers per round)'}
                    {activeTab === 'Policy' && '2 teams of 2 (4 debaters total)'}
                    {activeTab === 'LD' && '1 vs 1 (2 debaters total)'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-[#A8A29E]" />
                <div>
                  <p className="text-sm font-bold">Speech Timing</p>
                  <p className="text-xs text-[#78716C]">
                    {activeTab === 'BP' && '7 minutes per speech'}
                    {activeTab === 'WSDC' && '8 minutes for substantive, 4 for reply'}
                    {activeTab === 'Policy' && '8-9 min constructives, 5 min rebuttals'}
                    {activeTab === 'LD' && '6-3-7-3-4-6-3 (Variable)'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Scale className="w-4 h-4 mt-1 text-[#A8A29E]" />
                <div>
                  <p className="text-sm font-bold">Judging Focus</p>
                  <p className="text-xs text-[#78716C]">
                    {activeTab === 'BP' && 'Comparative analysis and unique contribution'}
                    {activeTab === 'WSDC' && 'Style, Content, and Strategy (40/40/20)'}
                    {activeTab === 'Policy' && 'Evidence, technical execution, and impacts'}
                    {activeTab === 'LD' && 'Value and Criterion framework clash'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => fetchAiExplanation(formatNames[activeTab])}
            disabled={loading}
            className="w-full py-4 bg-[#1C1917] text-white rounded-2xl font-bold hover:bg-[#44403C] transition-colors disabled:opacity-50"
          >
            {loading ? 'Generating...' : `Generate Detailed ${activeTab} Guide`}
          </button>
        </div>

        {/* AI Content Area */}
        <div className="bg-white border border-[#E7E5E4] rounded-2xl p-8 min-h-[400px]">
          {aiExplanation ? (
            <div className="prose prose-sm prose-stone max-w-none">
              <ReactMarkdown>{aiExplanation}</ReactMarkdown>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#A8A29E]">
              <BookOpen className="w-12 h-12 opacity-20" />
              <p className="text-sm">Click the button to generate a detailed <br /> AI-powered guide for this format.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
