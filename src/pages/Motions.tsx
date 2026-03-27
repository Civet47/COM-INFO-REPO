import React from 'react';
import { Search, Filter, ChevronRight } from 'lucide-react';
import { MOTIONS, Motion } from '../data/motions';
import { cn } from '../utils';
import ReactMarkdown from 'react-markdown';

export function Motions() {
  const [search, setSearch] = React.useState('');
  const [selectedFormat, setSelectedFormat] = React.useState<string>('All');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [sortBy, setSortBy] = React.useState<'year' | 'tournament' | 'text'>('year');
  const [activeTab, setActiveTab] = React.useState<'Local' | 'Global'>('Local');
  const [globalResults, setGlobalResults] = React.useState<string | null>(null);
  const [loadingGlobal, setLoadingGlobal] = React.useState(false);

  const categories = ['All', ...new Set(MOTIONS.map(m => m.category))];
  const formats = ['All', 'BP', 'WSDC'];

  const handleGlobalSearch = async () => {
    if (!search.trim()) return;
    setLoadingGlobal(true);
    try {
      const { searchExternalMotions } = await import('../services/geminiService');
      const result = await searchExternalMotions(search);
      setGlobalResults(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingGlobal(false);
    }
  };

  const filteredMotions = MOTIONS.filter(m => {
    const matchesSearch = m.text.toLowerCase().includes(search.toLowerCase()) || 
                         m.tournament?.toLowerCase().includes(search.toLowerCase());
    const matchesFormat = selectedFormat === 'All' || m.format === selectedFormat || m.format === 'Both';
    const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
    return matchesSearch && matchesFormat && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'year') {
      return (b.year || 0) - (a.year || 0);
    }
    if (sortBy === 'tournament') {
      return (a.tournament || '').localeCompare(b.tournament || '');
    }
    return a.text.localeCompare(b.text);
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Motions Database</h1>
        <p className="text-[#78716C]">Search and filter through historical debate motions.</p>
      </header>

      {/* Tab Switcher */}
      <div className="flex p-1 bg-[#E7E5E4] rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('Local')}
          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'Local' ? 'bg-white shadow-sm' : 'text-[#78716C] hover:text-[#1C1917]'}`}
        >
          Local Repository
        </button>
        <button
          onClick={() => setActiveTab('Global')}
          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'Global' ? 'bg-white shadow-sm' : 'text-[#78716C] hover:text-[#1C1917]'}`}
        >
          Global Search (AI)
        </button>
      </div>

      {activeTab === 'Local' ? (
        <div className="space-y-8">
          {/* Filters */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white p-4 border border-[#E7E5E4] rounded-2xl shadow-sm">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A8A29E]" />
              <input
                type="text"
                placeholder="Search motions, tournaments..."
                className="w-full pl-10 pr-4 py-2 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917] transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917] transition-all"
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
            >
              {formats.map(f => <option key={f} value={f}>{f} Format</option>)}
            </select>
            <select
              className="px-4 py-2 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917] transition-all"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              className="px-4 py-2 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917] transition-all"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="year">Sort: Newest First</option>
              <option value="tournament">Sort: Tournament A-Z</option>
              <option value="text">Sort: Motion A-Z</option>
            </select>
          </div>

          {/* Results Table */}
          <div className="bg-white border border-[#E7E5E4] rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E7E5E4] bg-[#FAFAF9]">
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#78716C]">Motion</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#78716C] w-32">Format</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#78716C] w-40">Category</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#78716C] w-40">Tournament</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5E4]">
                  {filteredMotions.map((motion) => (
                    <tr key={motion.id} className="hover:bg-[#FAFAF9] transition-colors group cursor-pointer">
                      <td className="px-6 py-6">
                        <p className="text-sm font-medium leading-relaxed group-hover:text-[#1C1917] transition-colors">
                          {motion.text}
                        </p>
                      </td>
                      <td className="px-6 py-6">
                        <span className={cn(
                          "px-2 py-1 rounded text-[10px] font-bold tracking-wider",
                          motion.format === 'BP' ? "bg-blue-50 text-blue-700" : 
                          motion.format === 'WSDC' ? "bg-green-50 text-green-700" : 
                          "bg-purple-50 text-purple-700"
                        )}>
                          {motion.format}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-xs text-[#78716C]">{motion.category}</span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-[#1C1917]">{motion.tournament}</span>
                          <span className="text-[10px] text-[#A8A29E]">{motion.year}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredMotions.length === 0 && (
              <div className="p-12 text-center space-y-2">
                <p className="text-lg font-medium">No motions found</p>
                <p className="text-sm text-[#78716C]">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Global Search Input */}
          <div className="bg-white p-8 border border-[#E7E5E4] rounded-3xl shadow-sm space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">External Repository Search</h3>
              <p className="text-sm text-[#78716C]">
                Search across Debatabase, HelloMotions, and other external repositories using AI.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A29E]" />
                <input
                  type="text"
                  placeholder="e.g. 'Feminism in developing nations' or 'Universal Basic Income'"
                  className="w-full pl-12 pr-4 py-4 bg-[#F5F5F4] border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#1C1917] transition-all"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button
                onClick={handleGlobalSearch}
                disabled={loadingGlobal || !search.trim()}
                className="px-8 py-4 bg-[#1C1917] text-white rounded-2xl font-bold hover:bg-[#44403C] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loadingGlobal ? 'Searching...' : 'Search Repositories'}
              </button>
            </div>
          </div>

          {/* Global Results */}
          <div className="bg-white border border-[#E7E5E4] rounded-3xl p-8 min-h-[400px]">
            {globalResults ? (
              <div className="prose prose-stone max-w-none">
                <ReactMarkdown>{globalResults}</ReactMarkdown>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#A8A29E]">
                <div className="w-16 h-16 bg-[#F5F5F4] rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 opacity-20" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-[#1C1917]">No external results yet</p>
                  <p className="text-sm">Enter a topic above to search external debate databases.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
