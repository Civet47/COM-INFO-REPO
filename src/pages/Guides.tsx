import React from 'react';
import { BookOpen, Users, Clock, Scale, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { explainFormat } from '../services/groqService';
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
        <h1 className="text-4xl font-black uppercase tracking-tight text-brand-black">Format Guides</h1>
        <p className="text-brand-black/60 font-medium">Essential rules and strategies for competitive debating.</p>
      </header>

      {/* Tab Switcher */}
      <div className="flex flex-wrap p-1 bg-brand-black/5 rounded-2xl w-fit gap-1">
        {(['BP', 'WSDC', 'Policy', 'LD'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-xl text-sm font-black uppercase tracking-tight transition-all ${
              activeTab === tab 
                ? 'bg-brand-black text-white shadow-md' 
                : 'text-brand-black/40 hover:text-brand-black hover:bg-brand-black/10'
            }`}
          >
            {formatNames[tab]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Static Overview */}
        <div className="space-y-6">
          <div className="p-6 bg-white border border-brand-black/5 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
              <Info className="w-5 h-5 text-brand-gold" />
              Quick Overview
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-black/5 rounded-lg">
                  <Users className="w-4 h-4 text-brand-black/60" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tighter">Participants</p>
                  <p className="text-xs text-brand-black/60 font-medium">
                    {activeTab === 'BP' && '4 teams of 2 (8 debaters total)'}
                    {activeTab === 'WSDC' && '2 teams of 3-5 (3 speakers per round)'}
                    {activeTab === 'Policy' && '2 teams of 2 (4 debaters total)'}
                    {activeTab === 'LD' && '1 vs 1 (2 debaters total)'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-black/5 rounded-lg">
                  <Clock className="w-4 h-4 text-brand-black/60" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tighter">Speech Timing</p>
                  <p className="text-xs text-brand-black/60 font-medium">
                    {activeTab === 'BP' && '7 minutes per speech'}
                    {activeTab === 'WSDC' && '8 minutes for substantive, 4 for reply'}
                    {activeTab === 'Policy' && '8-9 min constructives, 5 min rebuttals'}
                    {activeTab === 'LD' && '6-3-7-3-4-6-3 (Variable)'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-black/5 rounded-lg">
                  <Scale className="w-4 h-4 text-brand-black/60" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tighter">Judging Focus</p>
                  <p className="text-xs text-brand-black/60 font-medium">
                    {activeTab === 'BP' && 'Comparative analysis and unique contribution'}
                    {activeTab === 'WSDC' && 'Style, Content, and Strategy (40/40/20)'}
                    {activeTab === 'Policy' && 'Evidence, technical execution, and impacts'}
                    {activeTab === 'LD' && 'Value and Criterion framework clash'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {activeTab === 'BP' && (
            <div className="space-y-4">
              <a 
                href="https://www.nwforensics.org/su-debate/WUDC%20Manual%20Oct%2017%202025.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-6 bg-brand-red text-white rounded-3xl font-black uppercase tracking-tight shadow-xl shadow-brand-red/10 hover:brightness-110 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-brand-gold" />
                  <div className="flex flex-col">
                    <span className="text-[10px] opacity-80 mb-0.5">Official WUDC Manual</span>
                    <span>BP Rulebook (Oct 2025)</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link 
                to="/guides/bp"
                className="flex items-center justify-between p-6 bg-brand-black text-white rounded-3xl font-black uppercase tracking-tight shadow-xl shadow-brand-black/10 hover:bg-brand-red transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-brand-gold" />
                  <span>Advanced Judging Guide</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}

          <button
            onClick={() => fetchAiExplanation(formatNames[activeTab])}
            disabled={loading}
            className="w-full py-5 bg-brand-black text-white rounded-3xl font-black uppercase tracking-tight hover:bg-brand-red transition-all shadow-lg shadow-brand-black/5 disabled:opacity-50"
          >
            {loading ? 'Consulting Experts...' : `Generate AI ${activeTab} Strategy`}
          </button>
        </div>

        {/* AI Content Area */}
        <div className="bg-white border border-brand-black/5 rounded-3xl p-8 min-h-[400px] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
          
          {aiExplanation ? (
            <div className="prose prose-sm prose-stone max-w-none relative z-10">
              <ReactMarkdown>{aiExplanation}</ReactMarkdown>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-brand-black/20 relative z-10">
              <div className="p-6 bg-brand-black/5 rounded-full">
                <BookOpen className="w-12 h-12" />
              </div>
              <div>
                <p className="text-lg font-black uppercase tracking-tight text-brand-black/40">Manual Analysis required</p>
                <p className="text-sm">Initiate the AI coach to generate <br /> proprietary tactical insights for this format.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
