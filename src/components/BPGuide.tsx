import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Users, 
  Scale, 
  MessageSquare, 
  Zap, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

const BPGuide = () => {
  const sections = [
    {
      title: "1. The Philosophy of BP Judging",
      icon: <Scale className="w-6 h-6 text-brand-gold" />,
      content: (
        <div className="space-y-4">
          <p className="text-brand-black/60 font-medium">
            Based on the <span className="text-brand-black font-black italic">Ordinary Intelligent Voter (OIV)</span> concept, a BP judge is a neutral, fair-minded listener who assumes no external expert knowledge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-brand-black shadow-lg p-5 rounded-2xl border border-brand-black/5">
              <h4 className="text-white font-black uppercase tracking-tight mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" /> What to Value
              </h4>
              <ul className="text-xs text-white/70 space-y-2 font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full" /> Logical causal links</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full" /> Plausible mechanisms</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full" /> Comparative impact weighing</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full" /> Engagement with all teams</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-2xl border-2 border-brand-red/10">
              <h4 className="text-brand-red font-black uppercase tracking-tight mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-brand-red" /> What to Avoid
              </h4>
              <ul className="text-xs text-brand-black/60 space-y-2 font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-red rounded-full" /> Personal political bias</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-red rounded-full" /> Rewarding "flashy" style over depth</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-red rounded-full" /> Filling in logical gaps for teams</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-red rounded-full" /> Penalizing accents or delivery style</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. Structure & Speaker Roles",
      icon: <Users className="w-6 h-6 text-brand-gold" />,
      content: (
        <div className="space-y-6">
          <div className="relative overflow-hidden border border-brand-black/5 rounded-2xl shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] uppercase font-black tracking-widest bg-brand-black text-brand-gold/80">
                <tr>
                  <th className="px-6 py-4">Half</th>
                  <th className="px-6 py-4 border-l border-white/10">Government (Prop)</th>
                  <th className="px-6 py-4 border-l border-white/10">Opposition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-black/5 bg-white">
                <tr className="hover:bg-brand-black/5 transition-colors">
                  <td className="px-6 py-4 font-black uppercase tracking-tighter text-brand-black">Opening</td>
                  <td className="px-6 py-4 text-brand-black/70 font-medium border-l border-brand-black/5">Prime Minister<br/><span className="text-[10px]">Deputy PM</span></td>
                  <td className="px-6 py-4 text-brand-black/70 font-medium border-l border-brand-black/5">Leader of Opposition<br/><span className="text-[10px]">Deputy LO</span></td>
                </tr>
                <tr className="hover:bg-brand-black/5 transition-colors">
                  <td className="px-6 py-4 font-black uppercase tracking-tighter text-brand-black">Closing</td>
                  <td className="px-6 py-4 text-brand-black/70 font-medium border-l border-brand-black/5">Member of Gov<br/><span className="text-[10px]">Gov Whip</span></td>
                  <td className="px-6 py-4 text-brand-black/70 font-medium border-l border-brand-black/5">Member of Opp<br/><span className="text-[10px]">Opp Whip</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-brand-red p-6 rounded-3xl text-white shadow-xl shadow-brand-red/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
            <h4 className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-1">The Extension Rule</h4>
            <p className="text-sm font-bold leading-tight">
              Closing teams must provide "new material"—either new arguments, deeper analysis, or a different framing—while remaining consistent with their Opening half.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "3. Evaluating Arguments",
      icon: <Zap className="w-6 h-6 text-brand-gold" />,
      content: (
        <div className="space-y-6">
          <p className="text-brand-black/60 font-medium italic">A persuasive argument must pass three tests of tactical weight:</p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-white border border-brand-black/5 shadow-sm">
              <div className="flex-none w-24 font-black uppercase tracking-tighter text-brand-red text-xs">Plausibility</div>
              <div className="text-sm text-brand-black/70 font-medium">Does the claim make sense? Are the causal links explained or just asserted?</div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-white border border-brand-black/5 shadow-sm">
              <div className="flex-none w-24 font-black uppercase tracking-tighter text-brand-red text-xs">Relevance</div>
              <div className="text-sm text-brand-black/70 font-medium">Does this argument actually advance the team's burden under the specific motion?</div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-white border border-brand-black/5 shadow-sm">
              <div className="flex-none w-24 font-black uppercase tracking-tighter text-brand-red text-xs">Impact</div>
              <div className="text-sm text-brand-black/70 font-medium">If the argument is true, how much does it change the world? Who is affected and how much?</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "4. Deliberation & Ranking",
      icon: <BookOpen className="w-6 h-6 text-brand-gold" />,
      content: (
        <div className="space-y-4">
          <p className="text-brand-black/60 font-medium">BP judging is comparative. You must rank teams 1st through 4th by comparing them in six distinct pair-wise clashes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
             {[
               "OG vs OO (Opening Clash)", 
               "CG vs CO (Closing Clash)", 
               "OG vs CG (Vertical Clash)", 
               "OO vs CO (Vertical Clash)", 
               "OG vs CO (Diagonal Clash)", 
               "OO vs CG (Diagonal Clash)"
             ].map((clash, i) => (
               <div key={i} className="flex items-center gap-3 bg-brand-black p-3 rounded-xl shadow-lg border border-white/5">
                 <ArrowRight className="w-4 h-4 text-brand-gold" />
                 <span className="text-xs font-black uppercase tracking-tight text-white">{clash}</span>
               </div>
             ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-12 bg-brand-red" />
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">Official Briefing</span>
          <div className="h-0.5 w-12 bg-brand-red" />
        </div>
        <h1 className="text-6xl font-black text-brand-black tracking-tighter uppercase leading-none">
          Advanced <br />
          <span className="text-brand-red italic">BP Guide.</span>
        </h1>
        <p className="text-xl text-brand-black/60 font-medium max-w-2xl">
          Master the high-stakes art of the 4-team debate. This guide adapts the core principles of elite competitive philosophy to the BP format.
        </p>
      </motion.div>

      <div className="space-y-12">
        {sections.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-black rounded-2xl shadow-xl shadow-brand-black/10 group-hover:bg-brand-red transition-all duration-500">
                {section.icon}
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-brand-black">{section.title}</h2>
              <div className="h-px flex-1 bg-brand-black/5" />
            </div>
            <div className="pl-0 md:pl-20">
              {section.content}
            </div>
          </motion.section>
        ))}
      </div>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-24 pt-12 border-t border-brand-black/10 text-center"
      >
        <div className="p-8 bg-brand-black rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full -ml-32 -mt-32" />
          <p className="text-brand-gold text-[10px] font-black uppercase tracking-widest mb-3">Resource Hub Standard</p>
          <p className="text-xl font-black uppercase tracking-tight mb-4">
            Focus on Logic, Clarity, and Tactical Engagement.
          </p>
          <p className="text-white/40 text-sm font-medium">
            Proprietary briefing data derived from the official Rulebook.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default BPGuide;
