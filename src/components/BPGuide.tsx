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
      icon: <Scale className="w-6 h-6 text-orange-500" />,
      content: (
        <div className="space-y-4">
          <p className="text-zinc-400">
            Based on the <span className="text-white italic">Ordinary Intelligent Voter (OIV)</span> concept, a BP judge is a neutral, fair-minded listener who assume no external expert knowledge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
              <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> What to Value
              </h4>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• Logical causal links</li>
                <li>• Plausible mechanisms</li>
                <li>• Comparative impact weighing</li>
                <li>• Engagement with all teams</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
              <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500" /> What to Avoid
              </h4>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• Personal political bias</li>
                <li>• Rewarding "flashy" style over depth</li>
                <li>• Filling in logical gaps for teams</li>
                <li>• Penalizing accents or delivery style</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. Structure & Speaker Roles",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      content: (
        <div className="space-y-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-zinc-400">
              <thead className="text-xs uppercase bg-zinc-900 text-zinc-500">
                <tr>
                  <th className="px-4 py-2">Half</th>
                  <th className="px-4 py-2">Government (Prop)</th>
                  <th className="px-4 py-2">Opposition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-white">Opening</td>
                  <td className="px-4 py-3">Prime Minister<br/>Deputy PM</td>
                  <td className="px-4 py-3">Leader of Opposition<br/>Deputy LO</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-white">Closing</td>
                  <td className="px-4 py-3">Member of Gov<br/>Gov Whip</td>
                  <td className="px-4 py-3">Member of Opp<br/>Opp Whip</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
            <h4 className="text-orange-500 font-medium mb-1">The Extension Rule</h4>
            <p className="text-sm text-zinc-300">
              Closing teams must provide "new material"—either new arguments, deeper analysis, or a different framing—while remaining consistent with their Opening half.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "3. Evaluating Arguments",
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      content: (
        <div className="space-y-4">
          <p className="text-zinc-400">A persuasive argument must pass three tests:</p>
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="flex-none w-24 font-bold text-orange-500">Plausibility</div>
              <div className="text-sm text-zinc-300">Does the claim make sense? Are the causal links explained or just asserted?</div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none w-24 font-bold text-orange-500">Relevance</div>
              <div className="text-sm text-zinc-300">Does this argument actually advance the team's burden under the specific motion?</div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none w-24 font-bold text-orange-500">Impact</div>
              <div className="text-sm text-zinc-300">If the argument is true, how much does it change the world? Who is affected and how much?</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "4. Deliberation & Ranking",
      icon: <BookOpen className="w-6 h-6 text-orange-500" />,
      content: (
        <div className="space-y-4">
          <p className="text-zinc-400">BP judging is comparative. You must rank teams 1st through 4th by comparing them in pairs:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2 bg-zinc-900 p-2 rounded"><ArrowRight className="w-3 h-3 text-orange-500" /> OG vs OO (Opening Clash)</li>
            <li className="flex items-center gap-2 bg-zinc-900 p-2 rounded"><ArrowRight className="w-3 h-3 text-orange-500" /> CG vs CO (Closing Clash)</li>
            <li className="flex items-center gap-2 bg-zinc-900 p-2 rounded"><ArrowRight className="w-3 h-3 text-orange-500" /> OG vs CG (Vertical Clash)</li>
            <li className="flex items-center gap-2 bg-zinc-900 p-2 rounded"><ArrowRight className="w-3 h-3 text-orange-500" /> OO vs CO (Vertical Clash)</li>
            <li className="flex items-center gap-2 bg-zinc-900 p-2 rounded"><ArrowRight className="w-3 h-3 text-orange-500" /> OG vs CO (Diagonal Clash)</li>
            <li className="flex items-center gap-2 bg-zinc-900 p-2 rounded"><ArrowRight className="w-3 h-3 text-orange-500" /> OO vs CG (Diagonal Clash)</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          British Parliamentary <span className="text-orange-500 italic">Guide</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed">
          Master the art of the 4-team debate. This guide adapts the core principles of the World Schools philosophy to the BP format.
        </p>
      </motion.div>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-zinc-900 rounded-xl">
                {section.icon}
              </div>
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            </div>
            <div className="pl-0 md:pl-16">
              {section.content}
            </div>
          </motion.section>
        ))}
      </div>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 pt-8 border-t border-zinc-800 text-center"
      >
        <p className="text-zinc-500 text-sm">
          Adapted from the "Philosophy of Judging" Manual. 
          <br />
          Focus on <span className="text-white">Logic</span>, <span className="text-white">Clarity</span>, and <span className="text-white">Engagement</span>.
        </p>
      </motion.footer>
    </div>
  );
};

export default BPGuide;
