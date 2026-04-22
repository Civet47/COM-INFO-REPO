import React from 'react';
import { Search, Hammer, ChevronRight, Filter, BookOpen } from 'lucide-react';
import { CASE_CONSTRUCTION_GUIDES, GuideSection } from '../data/guides/content';
import { cn } from '../utils';
import ReactMarkdown from 'react-markdown';

export function CaseConstruction() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [selectedGuide, setSelectedGuide] = React.useState<GuideSection | null>(null);

  const categories = ['All', 'Strategic', 'Matter', 'Roles'];

  const filteredGuides = CASE_CONSTRUCTION_GUIDES.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tight text-brand-black flex items-center gap-3">
          <Hammer className="w-10 h-10 text-brand-red" />
          Case Construction Hub
        </h1>
        <p className="text-brand-black/60 font-medium">Local repository for advanced debate strategy and matter files.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar: Search & List */}
        <div className="space-y-6">
          <div className="space-y-4 bg-white p-6 border border-[#E7E5E4] rounded-3xl shadow-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A8A29E]" />
              <input
                type="text"
                placeholder="Search matter, strategy..."
                className="w-full pl-10 pr-4 py-2 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917] transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-tight transition-all",
                    selectedCategory === cat 
                      ? "bg-brand-black text-white" 
                      : "bg-[#F5F5F4] text-brand-black/40 hover:bg-[#E7E5E4]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {filteredGuides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => setSelectedGuide(guide)}
                className={cn(
                  "w-full text-left p-6 border rounded-3xl transition-all group relative overflow-hidden",
                  selectedGuide?.id === guide.id
                    ? "bg-brand-black border-brand-black text-white shadow-lg shadow-brand-black/10"
                    : "bg-white border-[#E7E5E4] hover:border-brand-gold text-brand-black shadow-sm"
                )}
              >
                <div className="relative z-10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded",
                      selectedGuide?.id === guide.id ? "bg-white/10 text-white" : "bg-brand-black/5 text-brand-black/40"
                    )}>
                      {guide.category}
                    </span>
                    <ChevronRight className={cn(
                      "w-4 h-4 transition-transform group-hover:translate-x-1",
                      selectedGuide?.id === guide.id ? "text-brand-gold" : "text-[#A8A29E]"
                    )} />
                  </div>
                  <h3 className="font-bold uppercase tracking-tight leading-tight">{guide.title}</h3>
                  <p className={cn(
                    "text-xs line-clamp-2 leading-relaxed",
                    selectedGuide?.id === guide.id ? "text-white/60 font-medium" : "text-[#78716C]"
                  )}>
                    {guide.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* content Area */}
        <div className="lg:col-span-2">
          {selectedGuide ? (
            <div className="bg-white border border-[#E7E5E4] rounded-3xl p-8 lg:p-12 shadow-sm min-h-[600px] prose prose-stone max-w-none">
              <ReactMarkdown>{selectedGuide.content}</ReactMarkdown>
            </div>
          ) : (
            <div className="h-full bg-[#F5F5F4]/50 border-2 border-dashed border-[#E7E5E4] rounded-3xl flex flex-col items-center justify-center p-12 text-center space-y-4 text-brand-black/20 min-h-[600px]">
              <div className="p-8 bg-white rounded-full shadow-sm text-brand-gold">
                <BookOpen className="w-12 h-12" />
              </div>
              <div className="max-w-xs space-y-2">
                <p className="text-xl font-black uppercase tracking-tight text-brand-black/40">Select a Resource</p>
                <p className="text-sm font-medium">Choose a guide from the repository to view expert research and strategic analysis.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
