import React from 'react';
import { 
  Book, 
  ChevronRight, 
  Shield, 
  ShieldAlert, 
  Plus, 
  X, 
  Trash2, 
  Link as LinkIcon, 
  Quote, 
  BarChart3, 
  FileSearch, 
  Search,
  Sparkles,
  Tag,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  ExternalLink
} from 'lucide-react';
import { 
  CASE_FILES as INITIAL_CASE_FILES, 
  CaseFile, 
  Argument, 
  Evidence, 
  EvidenceStrength, 
  EvidenceType 
} from '../data/caseFiles';
import { cn } from '../utils';
import { searchGlobalDebateRepository } from '../services/groqService';
import ReactMarkdown from 'react-markdown';

export function CaseFiles() {
  const [caseFiles, setCaseFiles] = React.useState<CaseFile[]>(INITIAL_CASE_FILES);
  const [selectedCase, setSelectedCase] = React.useState<CaseFile | null>(null);
  const [isCreating, setIsCreating] = React.useState(false);
  
  // Global Search State
  const [globalSearch, setGlobalSearch] = React.useState('');
  const [globalResults, setGlobalResults] = React.useState<string | null>(null);
  const [loadingGlobal, setLoadingGlobal] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'Local' | 'Global'>('Local');

  // Form State
  const [newCase, setNewCase] = React.useState<Partial<CaseFile>>({
    title: '',
    category: '',
    summary: '',
    tags: [],
    proposition: [{ title: '', points: [''], evidence: [] }],
    opposition: [{ title: '', points: [''], evidence: [] }]
  });

  const handleGlobalSearch = async () => {
    if (!globalSearch.trim()) return;
    setLoadingGlobal(true);
    try {
      const result = await searchGlobalDebateRepository(globalSearch);
      setGlobalResults(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingGlobal(false);
    }
  };

  const handleAddArgument = (side: 'proposition' | 'opposition') => {
    setNewCase(prev => ({
      ...prev,
      [side]: [...(prev[side] || []), { title: '', points: [''], evidence: [] }]
    }));
  };

  const handleRemoveArgument = (side: 'proposition' | 'opposition', index: number) => {
    setNewCase(prev => ({
      ...prev,
      [side]: prev[side]?.filter((_, i) => i !== index)
    }));
  };

  const handleAddEvidence = (side: 'proposition' | 'opposition', argIndex: number) => {
    setNewCase(prev => {
      const updatedSide = [...(prev[side] || [])];
      updatedSide[argIndex] = {
        ...updatedSide[argIndex],
        evidence: [
          ...(updatedSide[argIndex].evidence || []),
          { id: Math.random().toString(36).substr(2, 9), type: 'statistic', content: '', strength: 'strong' } as Evidence
        ]
      };
      return { ...prev, [side]: updatedSide };
    });
  };

  const handleEvidenceChange = (
    side: 'proposition' | 'opposition', 
    argIndex: number, 
    evIndex: number, 
    field: keyof Evidence, 
    value: string
  ) => {
    setNewCase(prev => {
      const updatedSide = [...(prev[side] || [])];
      const updatedEv = [...(updatedSide[argIndex].evidence || [])];
      updatedEv[evIndex] = { ...updatedEv[evIndex], [field]: value };
      updatedSide[argIndex] = { ...updatedSide[argIndex], evidence: updatedEv };
      return { ...prev, [side]: updatedSide };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = (newCase.title || '').toLowerCase().replace(/\s+/g, '-');
    const createdCase = { ...newCase, id } as CaseFile;
    setCaseFiles(prev => [createdCase, ...prev]);
    setSelectedCase(createdCase);
    setIsCreating(false);
    setNewCase({
      title: '',
      category: '',
      summary: '',
      tags: [],
      proposition: [{ title: '', points: [''], evidence: [] }],
      opposition: [{ title: '', points: [''], evidence: [] }]
    });
  };

  const getStrengthIcon = (strength: EvidenceStrength) => {
    switch (strength) {
      case 'strong': return <ThumbsUp className="w-3 h-3 text-green-600" />;
      case 'weak': return <ThumbsDown className="w-3 h-3 text-amber-600" />;
      case 'disputed': return <AlertCircle className="w-3 h-3 text-red-600" />;
    }
  };

  const getEvidenceIcon = (type: EvidenceType) => {
    switch (type) {
      case 'statistic': return <BarChart3 className="w-4 h-4" />;
      case 'quote': return <Quote className="w-4 h-4" />;
      case 'research': return <FileSearch className="w-4 h-4" />;
      case 'link': return <LinkIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Case Files & Evidence</h1>
          <p className="text-[#78716C]">Management system for debate arguments and verified supporting evidence.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a 
            href="https://drive.google.com/drive/folders/15u1Af2YlyTkNqyNnhymkwgRNQuVcKB_h"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 border border-blue-100 rounded-2xl font-bold hover:bg-blue-100 transition-all shadow-sm"
          >
            <ExternalLink className="w-5 h-5 text-blue-600" />
            Team Drive
          </a>
          <button 
            onClick={() => {
              setActiveTab('Global');
              setSelectedCase(null);
              setIsCreating(false);
            }}
            className={cn(
              "flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all shadow-sm",
              activeTab === 'Global' ? "bg-[#1C1917] text-white" : "bg-white border border-[#E7E5E4] text-[#78716C]"
            )}
          >
            <Sparkles className="w-5 h-5" />
            Global Repository
          </button>
          <button 
            onClick={() => {
              setIsCreating(true);
              setActiveTab('Local');
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1C1917] text-white rounded-2xl font-bold hover:bg-[#44403C] transition-all shadow-sm"
          >
            <Plus className="w-5 h-5" />
            Create Case
          </button>
        </div>
      </header>

      {/* Tab Switcher */}
      <div className="flex p-1 bg-[#E7E5E4] rounded-xl w-fit">
        <button 
          onClick={() => setActiveTab('Local')}
          className={cn("px-6 py-2 rounded-lg text-sm font-bold transition-all", activeTab === 'Local' ? "bg-white shadow-sm" : "text-[#78716C]")}
        >
          My Evidence Hub
        </button>
        <button 
          onClick={() => setActiveTab('Global')}
          className={cn("px-6 py-2 rounded-lg text-sm font-bold transition-all", activeTab === 'Global' ? "bg-white shadow-sm" : "text-[#78716C]")}
        >
          Global Search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {activeTab === 'Local' ? (
            <>
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl space-y-3 mb-6">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-widest flex items-center gap-2">
                  <Shield className="w-3 h-3" /> Shared Knowledge
                </h4>
                <a 
                  href="https://drive.google.com/drive/folders/15u1Af2YlyTkNqyNnhymkwgRNQuVcKB_h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-amber-200 rounded-xl hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-amber-900 leading-tight">Team Evidence Drive</p>
                      <p className="text-[10px] text-amber-700 uppercase tracking-tighter">Shared Repository</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              {caseFiles.map((cf) => (
                <button
                  key={cf.id}
                  onClick={() => {
                    setSelectedCase(cf);
                    setIsCreating(false);
                  }}
                  className={cn(
                    "w-full text-left p-6 bg-white border rounded-2xl transition-all hover:shadow-md group",
                    selectedCase?.id === cf.id && !isCreating ? "border-[#1C1917] ring-1 ring-[#1C1917]" : "border-[#E7E5E4]"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8A29E]">{cf.category}</span>
                    <ChevronRight className={cn("w-4 h-4 transition-transform", selectedCase?.id === cf.id && !isCreating ? "translate-x-1" : "text-[#E7E5E4]")} />
                  </div>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-[#1C1917] mb-3">{cf.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {cf.tags.map(tag => (
                      <span key={tag} className="text-[9px] px-2 py-0.5 bg-[#F5F5F4] text-[#78716C] rounded-full flex items-center gap-1">
                        <Tag className="w-2 h-2" /> {tag}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </>
          ) : (
            <div className="bg-white border border-[#E7E5E4] rounded-2xl p-6 space-y-4">
              <h3 className="font-bold flex items-center gap-2">
                <Search className="w-4 h-4" /> Global Search
              </h3>
              <p className="text-xs text-[#78716C]">Ground your research in deep internal AI analysis for world-class evidence digests.</p>
              <div className="space-y-4">
                <input 
                  type="text" 
                  value={globalSearch}
                  onChange={e => setGlobalSearch(e.target.value)}
                  placeholder="Topic or issue..."
                  className="w-full px-4 py-3 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917]"
                />
                <button 
                  onClick={handleGlobalSearch}
                  disabled={loadingGlobal || !globalSearch.trim()}
                  className="w-full py-3 bg-[#1C1917] text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loadingGlobal ? 'Researching...' : 'Search Repository'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2">
          {activeTab === 'Global' ? (
            <div className="bg-white border border-[#E7E5E4] rounded-3xl p-8 shadow-sm min-h-[500px]">
              {globalResults ? (
                <div className="prose prose-stone max-w-none prose-sm">
                  <ReactMarkdown>{globalResults}</ReactMarkdown>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#A8A29E] mt-20">
                  <BarChart3 className="w-16 h-16 opacity-20" />
                  <div className="space-y-1">
                    <p className="font-bold text-[#1C1917]">No results yet</p>
                    <p className="text-sm">Search for evidence, statistics, or broad topics to generate a comprehensive debate digest.</p>
                  </div>
                </div>
              )}
            </div>
          ) : isCreating ? (
            <form onSubmit={handleSubmit} className="bg-white border border-[#E7E5E4] rounded-3xl p-8 shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">New Evidence File</h2>
                <button type="button" onClick={() => setIsCreating(false)} className="p-2 hover:bg-[#F5F5F4] rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#78716C]">Title</label>
                  <input required value={newCase.title} onChange={e => setNewCase({...newCase, title: e.target.value})} type="text" className="w-full px-4 py-3 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917]" placeholder="Motion or Theme Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#78716C]">Category</label>
                  <input required value={newCase.category} onChange={e => setNewCase({...newCase, category: e.target.value})} type="text" className="w-full px-4 py-3 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917]" placeholder="e.g. Health, Economics" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#78716C]">Tags (Comma separated)</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917]"
                  placeholder="e.g. Economy, Policy, Future"
                  onChange={e => setNewCase({...newCase, tags: e.target.value.split(',').map(t => t.trim())})}
                />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {['proposition', 'opposition'].map(side => (
                    <div key={side} className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className={cn("flex items-center gap-2 font-bold uppercase tracking-widest text-xs", side === 'proposition' ? "text-green-700" : "text-red-700")}>
                          {side === 'proposition' ? <Shield className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
                          {side}
                        </div>
                        <button type="button" onClick={() => handleAddArgument(side as any)} className="text-[10px] uppercase font-bold hover:underline">+ Add Argument</button>
                      </div>

                      {newCase[side as 'proposition' | 'opposition']?.map((arg, argIdx) => (
                        <div key={argIdx} className="p-4 bg-[#F5F5F4] rounded-2xl space-y-4 relative group/arg">
                          <button 
                            type="button" 
                            onClick={() => handleRemoveArgument(side as any, argIdx)}
                            className="absolute top-2 right-2 opacity-0 group-hover/arg:opacity-100 p-1 text-red-400 hover:text-red-600 transition-opacity"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                          <input required value={arg.title} onChange={e => {
                            const updated = [...newCase[side as 'proposition' | 'opposition']!];
                            updated[argIdx] = { ...updated[argIdx], title: e.target.value };
                            setNewCase({ ...newCase, [side]: updated });
                          }} className="w-full bg-transparent border-b border-zinc-200 outline-none font-bold text-sm pb-1" placeholder="Argument Title" />
                          
                          <div className="space-y-2">
                            {arg.points.map((pt, ptIdx) => (
                              <div key={ptIdx} className="flex gap-2">
                                <input 
                                  required
                                  value={pt}
                                  onChange={e => {
                                    const updated = [...newCase[side as 'proposition' | 'opposition']!];
                                    const points = [...updated[argIdx].points];
                                    points[ptIdx] = e.target.value;
                                    updated[argIdx] = { ...updated[argIdx], points };
                                    setNewCase({ ...newCase, [side]: updated });
                                  }}
                                  className="w-full bg-white px-3 py-2 rounded-lg text-xs border border-zinc-100"
                                  placeholder={`Core Point ${ptIdx + 1}`}
                                />
                              </div>
                            ))}
                            <button 
                              type="button" 
                              onClick={() => {
                                const updated = [...newCase[side as 'proposition' | 'opposition']!];
                                updated[argIdx] = { ...updated[argIdx], points: [...updated[argIdx].points, ''] };
                                setNewCase({ ...newCase, [side]: updated });
                              }}
                              className="text-[9px] font-bold text-[#78716C]"
                            >
                              + Add Point
                            </button>
                          </div>

                          <div className="space-y-3 pt-2">
                            {arg.evidence?.map((ev, evIdx) => (
                              <div key={evIdx} className="p-3 bg-white border border-zinc-100 rounded-xl space-y-2">
                                <select 
                                  value={ev.type}
                                  onChange={e => handleEvidenceChange(side as any, argIdx, evIdx, 'type', e.target.value)}
                                  className="text-[10px] font-bold uppercase bg-transparent outline-none border-b"
                                >
                                  <option value="statistic">Statistic</option>
                                  <option value="quote">Quote</option>
                                  <option value="research">Research</option>
                                  <option value="link">Link</option>
                                </select>
                                <textarea 
                                  required
                                  value={ev.content}
                                  onChange={e => handleEvidenceChange(side as any, argIdx, evIdx, 'content', e.target.value)}
                                  placeholder="Evidence content..."
                                  className="w-full text-xs p-1 bg-transparent border-none outline-none resize-none"
                                />
                                <div className="flex items-center justify-between pt-1">
                                  <input 
                                    className="text-[10px] bg-transparent border-b outline-none w-1/2"
                                    placeholder="Source..."
                                    value={ev.source}
                                    onChange={e => handleEvidenceChange(side as any, argIdx, evIdx, 'source', e.target.value)}
                                  />
                                  <select 
                                    value={ev.strength}
                                    onChange={e => handleEvidenceChange(side as any, argIdx, evIdx, 'strength', e.target.value)}
                                    className={cn(
                                      "text-[10px] font-bold px-2 py-0.5 rounded",
                                      ev.strength === 'strong' ? "bg-green-100 text-green-700" :
                                      ev.strength === 'weak' ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                                    )}
                                  >
                                    <option value="strong">Strong</option>
                                    <option value="weak">Weak</option>
                                    <option value="disputed">Disputed</option>
                                  </select>
                                </div>
                              </div>
                            ))}
                            <button type="button" onClick={() => handleAddEvidence(side as any, argIdx)} className="text-[10px] font-bold text-[#1C1917]">+ Link Evidence</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 flex justify-end gap-4 border-t border-[#E7E5E4]">
                <button type="button" onClick={() => setIsCreating(false)} className="px-6 py-3 text-sm font-bold text-[#78716C]">Cancel</button>
                <button type="submit" className="px-8 py-3 bg-[#1C1917] text-white rounded-2xl font-bold">Save System Case</button>
              </div>
            </form>
          ) : selectedCase ? (
            <div className="bg-white border border-[#E7E5E4] rounded-3xl p-8 shadow-sm space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {selectedCase.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-[#F5F5F4] text-[#1C1917] rounded-full flex items-center gap-1 font-medium">
                      <Tag className="w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold tracking-tight">{selectedCase.title}</h2>
                <p className="text-[#78716C] leading-relaxed">{selectedCase.summary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#E7E5E4] pt-8">
                {['proposition', 'opposition'].map(side => (
                  <div key={side} className="space-y-8">
                    <div className={cn("flex items-center gap-2 font-bold uppercase tracking-widest text-xs", side === 'proposition' ? "text-green-700" : "text-red-700")}>
                      {side === 'proposition' ? <Shield className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
                      {side}
                    </div>
                    <div className="space-y-10">
                      {selectedCase[side as 'proposition' | 'opposition'].map((arg, i) => (
                        <div key={i} className="space-y-4 group">
                          <h4 className="font-bold text-[#1C1917] text-xl leading-tight border-b-2 border-transparent group-hover:border-[#F5F5F4] pb-2 transition-all">{arg.title}</h4>
                          <ul className="space-y-3">
                            {arg.points.map((pt, j) => (
                              <li key={j} className="text-sm text-[#44403C] pl-4 border-l-2 border-[#E7E5E4] leading-relaxed italic">{pt}</li>
                            ))}
                          </ul>
                          
                          {arg.evidence && arg.evidence.length > 0 && (
                            <div className="space-y-3 mt-4">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-[#A8A29E]">Linked Evidence</label>
                              {arg.evidence.map(ev => (
                                <div key={ev.id} className="p-4 bg-[#F5F5F4] rounded-2xl space-y-3 border border-transparent hover:border-[#E7E5E4] transition-all">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-[#78716C]">
                                      {getEvidenceIcon(ev.type)}
                                      <span className="text-[10px] font-bold uppercase tracking-tighter">{ev.type}</span>
                                    </div>
                                    <div className={cn(
                                      "flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                                      ev.strength === 'strong' ? "bg-green-100 text-green-700" :
                                      ev.strength === 'weak' ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                                    )}>
                                      {getStrengthIcon(ev.strength)}
                                      {ev.strength}
                                    </div>
                                  </div>
                                  <p className="text-sm font-medium text-[#1C1917] leading-relaxed">{ev.content}</p>
                                  {ev.source && (
                                    <div className="flex items-center justify-between pt-2 border-t border-zinc-200">
                                      <span className="text-[10px] text-[#A8A29E] italic">Source: {ev.source}</span>
                                      {ev.url && (
                                        <a href={ev.url} target="_blank" rel="noopener noreferrer" className="text-[#1C1917] hover:underline flex items-center gap-1 text-[10px] font-bold">
                                          Verify <ExternalLink className="w-3 h-3" />
                                        </a>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[500px] bg-white border border-[#E7E5E4] border-dashed rounded-3xl flex flex-col items-center justify-center text-center p-12 text-[#A8A29E]">
              <Book className="w-12 h-12 mb-4 opacity-20" />
              <p className="font-bold text-[#1C1917]">Select or Build a Case</p>
              <p className="text-sm max-w-xs">Organize your arguments and verified research in one place, or search the global repository for new insights.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
