import React from 'react';
import { Book, ChevronRight, Shield, ShieldAlert, Plus, X, Trash2 } from 'lucide-react';
import { CASE_FILES as INITIAL_CASE_FILES, CaseFile, Argument } from '../data/caseFiles';
import { cn } from '../utils';

export function CaseFiles() {
  const [caseFiles, setCaseFiles] = React.useState<CaseFile[]>(INITIAL_CASE_FILES);
  const [selectedCase, setSelectedCase] = React.useState<CaseFile | null>(null);
  const [isCreating, setIsCreating] = React.useState(false);

  // Form State
  const [newCase, setNewCase] = React.useState<Partial<CaseFile>>({
    title: '',
    category: '',
    summary: '',
    proposition: [{ title: '', points: [''] }],
    opposition: [{ title: '', points: [''] }]
  });

  const handleAddArgument = (side: 'proposition' | 'opposition') => {
    setNewCase(prev => ({
      ...prev,
      [side]: [...(prev[side] || []), { title: '', points: [''] }]
    }));
  };

  const handleRemoveArgument = (side: 'proposition' | 'opposition', index: number) => {
    setNewCase(prev => ({
      ...prev,
      [side]: prev[side]?.filter((_, i) => i !== index)
    }));
  };

  const handleAddPoint = (side: 'proposition' | 'opposition', argIndex: number) => {
    setNewCase(prev => {
      const updatedSide = [...(prev[side] || [])];
      updatedSide[argIndex] = {
        ...updatedSide[argIndex],
        points: [...updatedSide[argIndex].points, '']
      };
      return { ...prev, [side]: updatedSide };
    });
  };

  const handlePointChange = (side: 'proposition' | 'opposition', argIndex: number, pointIndex: number, value: string) => {
    setNewCase(prev => {
      const updatedSide = [...(prev[side] || [])];
      const updatedPoints = [...updatedSide[argIndex].points];
      updatedPoints[pointIndex] = value;
      updatedSide[argIndex] = { ...updatedSide[argIndex], points: updatedPoints };
      return { ...prev, [side]: updatedSide };
    });
  };

  const handleArgTitleChange = (side: 'proposition' | 'opposition', argIndex: number, value: string) => {
    setNewCase(prev => {
      const updatedSide = [...(prev[side] || [])];
      updatedSide[argIndex] = { ...updatedSide[argIndex], title: value };
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
      proposition: [{ title: '', points: [''] }],
      opposition: [{ title: '', points: [''] }]
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Case Files & Matter</h1>
          <p className="text-[#78716C]">Structured arguments and substantive matter for common debate themes.</p>
        </div>
        <button 
          onClick={() => setIsCreating(true)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1C1917] text-white rounded-2xl font-bold hover:bg-[#44403C] transition-all shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Create New Case
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* List of Case Files */}
        <div className="lg:col-span-1 space-y-4">
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
              <h3 className="font-bold text-lg leading-tight group-hover:text-[#1C1917]">{cf.title}</h3>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2">
          {isCreating ? (
            <form onSubmit={handleSubmit} className="bg-white border border-[#E7E5E4] rounded-3xl p-8 shadow-sm space-y-8 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">New Case File</h2>
                <button type="button" onClick={() => setIsCreating(false)} className="p-2 hover:bg-[#F5F5F4] rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#78716C]">Title</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917]"
                    placeholder="e.g. Universal Basic Income"
                    value={newCase.title}
                    onChange={e => setNewCase({...newCase, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#78716C]">Category</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917]"
                    placeholder="e.g. Economics"
                    value={newCase.category}
                    onChange={e => setNewCase({...newCase, category: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#78716C]">Summary</label>
                <textarea 
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-[#F5F5F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1C1917]"
                  placeholder="Brief overview of the debate..."
                  value={newCase.summary}
                  onChange={e => setNewCase({...newCase, summary: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Proposition Form */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-green-700 font-bold uppercase tracking-widest text-xs">
                      <Shield className="w-4 h-4" />
                      Proposition
                    </div>
                    <button type="button" onClick={() => handleAddArgument('proposition')} className="text-[10px] font-bold uppercase text-green-700 hover:underline">
                      + Add Argument
                    </button>
                  </div>
                  
                  {newCase.proposition?.map((arg, argIdx) => (
                    <div key={argIdx} className="p-4 bg-green-50/50 rounded-2xl space-y-4 relative group/arg">
                      <button 
                        type="button" 
                        onClick={() => handleRemoveArgument('proposition', argIdx)}
                        className="absolute top-2 right-2 opacity-0 group-hover/arg:opacity-100 p-1 text-red-400 hover:text-red-600 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <input 
                        required
                        className="w-full bg-transparent border-b border-green-200 focus:border-green-500 outline-none font-bold text-sm pb-1"
                        placeholder="Argument Title"
                        value={arg.title}
                        onChange={e => handleArgTitleChange('proposition', argIdx, e.target.value)}
                      />
                      <div className="space-y-2">
                        {arg.points.map((point, ptIdx) => (
                          <input 
                            key={ptIdx}
                            required
                            className="w-full bg-white px-3 py-2 rounded-lg text-xs border border-green-100 focus:ring-1 focus:ring-green-500 outline-none"
                            placeholder={`Point ${ptIdx + 1}`}
                            value={point}
                            onChange={e => handlePointChange('proposition', argIdx, ptIdx, e.target.value)}
                          />
                        ))}
                        <button type="button" onClick={() => handleAddPoint('proposition', argIdx)} className="text-[10px] font-bold text-green-600 hover:text-green-800">
                          + Add Point
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Opposition Form */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-red-700 font-bold uppercase tracking-widest text-xs">
                      <ShieldAlert className="w-4 h-4" />
                      Opposition
                    </div>
                    <button type="button" onClick={() => handleAddArgument('opposition')} className="text-[10px] font-bold uppercase text-red-700 hover:underline">
                      + Add Argument
                    </button>
                  </div>
                  
                  {newCase.opposition?.map((arg, argIdx) => (
                    <div key={argIdx} className="p-4 bg-red-50/50 rounded-2xl space-y-4 relative group/arg">
                      <button 
                        type="button" 
                        onClick={() => handleRemoveArgument('opposition', argIdx)}
                        className="absolute top-2 right-2 opacity-0 group-hover/arg:opacity-100 p-1 text-red-400 hover:text-red-600 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <input 
                        required
                        className="w-full bg-transparent border-b border-red-200 focus:border-red-500 outline-none font-bold text-sm pb-1"
                        placeholder="Argument Title"
                        value={arg.title}
                        onChange={e => handleArgTitleChange('opposition', argIdx, e.target.value)}
                      />
                      <div className="space-y-2">
                        {arg.points.map((point, ptIdx) => (
                          <input 
                            key={ptIdx}
                            required
                            className="w-full bg-white px-3 py-2 rounded-lg text-xs border border-red-100 focus:ring-1 focus:ring-red-500 outline-none"
                            placeholder={`Point ${ptIdx + 1}`}
                            value={point}
                            onChange={e => handlePointChange('opposition', argIdx, ptIdx, e.target.value)}
                          />
                        ))}
                        <button type="button" onClick={() => handleAddPoint('opposition', argIdx)} className="text-[10px] font-bold text-red-600 hover:text-red-800">
                          + Add Point
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E5E4] flex justify-end gap-4">
                <button 
                  type="button" 
                  onClick={() => setIsCreating(false)}
                  className="px-6 py-3 text-sm font-bold text-[#78716C] hover:text-[#1C1917] transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-8 py-3 bg-[#1C1917] text-white rounded-2xl font-bold hover:bg-[#44403C] transition-all shadow-md"
                >
                  Save Case File
                </button>
              </div>
            </form>
          ) : selectedCase ? (
            <div className="bg-white border border-[#E7E5E4] rounded-3xl p-8 shadow-sm space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">{selectedCase.title}</h2>
                <p className="text-[#78716C] leading-relaxed">{selectedCase.summary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#E7E5E4] pt-8">
                {/* Proposition */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-green-700 font-bold uppercase tracking-widest text-xs">
                    <Shield className="w-4 h-4" />
                    Proposition / Government
                  </div>
                  <div className="space-y-8">
                    {selectedCase.proposition.map((arg, i) => (
                      <div key={i} className="space-y-3">
                        <h4 className="font-bold text-[#1C1917] text-lg">{arg.title}</h4>
                        <ul className="space-y-3">
                          {arg.points.map((point, j) => (
                            <li key={j} className="text-sm text-[#44403C] pl-4 border-l-2 border-green-100 leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Opposition */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-red-700 font-bold uppercase tracking-widest text-xs">
                    <ShieldAlert className="w-4 h-4" />
                    Opposition
                  </div>
                  <div className="space-y-8">
                    {selectedCase.opposition.map((arg, i) => (
                      <div key={i} className="space-y-3">
                        <h4 className="font-bold text-[#1C1917] text-lg">{arg.title}</h4>
                        <ul className="space-y-3">
                          {arg.points.map((point, j) => (
                            <li key={j} className="text-sm text-[#44403C] pl-4 border-l-2 border-red-100 leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[500px] bg-white border border-[#E7E5E4] border-dashed rounded-3xl flex flex-col items-center justify-center text-center p-12 text-[#A8A29E]">
              <Book className="w-12 h-12 mb-4 opacity-20" />
              <p className="font-bold text-[#1C1917]">Select a case file</p>
              <p className="text-sm max-w-xs">Choose a topic from the list or create a new one to start building your case.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
