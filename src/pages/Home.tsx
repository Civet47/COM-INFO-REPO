import { Search, TrendingUp, BookOpen, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOTIONS } from '../data/motions';

export function Home() {
  const recentMotions = MOTIONS.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
          CLASH OF MINDS <br />
          <span className="text-[#78716C]">RESOURCE HUB.</span>
        </h1>
        <p className="text-xl text-[#78716C] max-w-2xl">
          A centralized repository for BP and WSDC motions, format guides, and AI-powered case construction.
        </p>
      </section>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/motions" className="group p-8 bg-white border border-[#E7E5E4] rounded-2xl hover:border-[#1C1917] transition-all">
          <Search className="w-8 h-8 mb-4 text-[#A8A29E] group-hover:text-[#1C1917] transition-colors" />
          <h3 className="text-xl font-bold mb-2">Browse Motions</h3>
          <p className="text-sm text-[#78716C]">Search through 1000+ motions from international tournaments.</p>
        </Link>
        <Link to="/guides" className="group p-8 bg-white border border-[#E7E5E4] rounded-2xl hover:border-[#1C1917] transition-all">
          <BookOpen className="w-8 h-8 mb-4 text-[#A8A29E] group-hover:text-[#1C1917] transition-colors" />
          <h3 className="text-xl font-bold mb-2">Format Guides</h3>
          <p className="text-sm text-[#78716C]">Master BP and WSDC rules, speaker roles, and judging criteria.</p>
        </Link>
        <Link to="/assistant" className="group p-8 bg-white border border-[#E7E5E4] rounded-2xl hover:border-[#1C1917] transition-all">
          <MessageSquare className="w-8 h-8 mb-4 text-[#A8A29E] group-hover:text-[#1C1917] transition-colors" />
          <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
          <p className="text-sm text-[#78716C]">Brainstorm arguments and clashes with Gemini-powered AI.</p>
        </Link>
      </div>

      {/* Recent Motions Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Recent Motions
          </h2>
          <Link to="/motions" className="text-sm font-medium text-[#78716C] hover:text-[#1C1917]">View all</Link>
        </div>
        <div className="space-y-4">
          {recentMotions.map((motion) => (
            <div key={motion.id} className="p-6 bg-white border border-[#E7E5E4] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#F5F5F4] text-[10px] font-bold uppercase tracking-wider rounded">{motion.format}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8A29E]">{motion.category}</span>
                </div>
                <p className="font-medium leading-tight">{motion.text}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-bold text-[#78716C]">{motion.tournament}</p>
                <p className="text-[10px] text-[#A8A29E]">{motion.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
