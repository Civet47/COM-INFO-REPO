import { Search, TrendingUp, BookOpen, MessageSquare, Hammer, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOTIONS } from '../data/motions';
import { Logo } from '../components/Logo';

export function Home() {
  const recentMotions = MOTIONS.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-8">
        <div className="shrink-0 flex justify-center">
          <Logo size="lg" className="flex-col text-center" />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-brand-black">
              CLASH OF MINDS <br />
              <span className="text-brand-red">RESOURCE HUB.</span>
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link to="/motions" className="px-8 py-3 bg-brand-black text-white rounded-full font-bold hover:bg-brand-red transition-colors shadow-lg shadow-brand-black/10">
              Start Research
            </Link>
            <Link to="/assistant" className="px-8 py-3 bg-white border-2 border-brand-black text-brand-black rounded-full font-bold hover:bg-brand-black hover:text-white transition-all">
              Talk to Coach
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/motions" className="group p-8 bg-white border border-brand-black/5 rounded-3xl hover:border-brand-gold transition-all relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full -mr-8 -mt-8 transition-all group-hover:scale-110" />
          <Search className="w-8 h-8 mb-4 text-brand-black/30 group-hover:text-brand-gold transition-colors relative z-10" />
          <h3 className="text-xl font-black mb-2 relative z-10 uppercase tracking-tight">Browse Motions</h3>
          <p className="text-sm text-brand-black/60 relative z-10">Search through 1000+ motions from elite international tournaments.</p>
        </Link>
        <Link to="/case-construction" className="group p-8 bg-white border border-brand-black/5 rounded-3xl hover:border-brand-red transition-all relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-full -mr-8 -mt-8 transition-all group-hover:scale-110" />
          <Hammer className="w-8 h-8 mb-4 text-brand-black/30 group-hover:text-brand-red transition-colors relative z-10" />
          <h3 className="text-xl font-black mb-2 relative z-10 uppercase tracking-tight">Case Construction</h3>
          <p className="text-sm text-brand-black/60 relative z-10">Access internal repositories for rebuttals, politics, and economics.</p>
        </Link>
        <Link to="/guides" className="group p-8 bg-white border border-brand-black/5 rounded-3xl hover:border-brand-blue transition-all relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full -mr-8 -mt-8 transition-all group-hover:scale-110" />
          <BookOpen className="w-8 h-8 mb-4 text-brand-black/30 group-hover:text-brand-blue transition-colors relative z-10" />
          <h3 className="text-xl font-black mb-2 relative z-10 uppercase tracking-tight">Format Guides</h3>
          <p className="text-sm text-brand-black/60 relative z-10">Master BP and WSDC rules, speaker roles, and high-level judging criteria.</p>
        </Link>
        <Link to="/assistant" className="group p-8 bg-white border border-brand-black/5 rounded-3xl hover:border-brand-red transition-all relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-full -mr-8 -mt-8 transition-all group-hover:scale-110" />
          <MessageSquare className="w-8 h-8 mb-4 text-brand-black/30 group-hover:text-brand-red transition-colors relative z-10" />
          <h3 className="text-xl font-black mb-2 relative z-10 uppercase tracking-tight">AI Assistant</h3>
          <p className="text-sm text-brand-black/60 relative z-10">Brainstorm strategic arguments and clashes with Llama-powered AI.</p>
        </Link>
      </div>

      {/* Recent Motions Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-brand-black/5 pb-4">
          <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-brand-red" />
            Recent Motions
          </h2>
          <Link to="/motions" className="text-sm font-bold text-brand-black/40 hover:text-brand-red transition-colors uppercase tracking-wider">View all</Link>
        </div>
        <div className="grid gap-4">
          {recentMotions.map((motion) => (
            <div key={motion.id} className="group p-6 bg-white border border-brand-black/5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-all">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                  <span className="px-2 py-0.5 bg-brand-gold text-brand-black rounded">{motion.format}</span>
                  <span className="text-brand-black/40">{motion.category}</span>
                </div>
                <p className="font-bold text-lg text-brand-black leading-tight group-hover:text-brand-red transition-colors">{motion.text}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-black text-brand-black/60 uppercase">{motion.tournament}</p>
                <p className="text-[10px] font-bold text-brand-black/30">{motion.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
