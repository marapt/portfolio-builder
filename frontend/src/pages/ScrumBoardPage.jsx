import React, { useState, useEffect } from 'react';
import { jiraService } from '../data/jiraService';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Loader2, AlertCircle, RefreshCw, ExternalLink, Calendar, Tag, ChevronRight, BarChart3, Clock, Rocket, ShieldCheck } from 'lucide-react';
import { Progress } from '../components/ui/progress';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription,
  SheetFooter
} from '../components/ui/sheet';
import { Button } from '../components/ui/button';

const ScrumBoardPage = () => {
  const [boardData, setBoardData] = useState(null);
  const [sprints, setSprints] = useState([]);
  const [roadmapData, setRoadmapData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isLocalFallback, setIsLocalFallback] = useState(false);

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
    setIsSheetOpen(true);
  };

  const loadData = async () => {
    setLoading(true);
    setIsLocalFallback(false);
    try {
      // 1. Try to fetch live Jira data
      const [board, sprintList, roadmap] = await Promise.allSettled([
        jiraService.fetchLiveBoard(),
        jiraService.fetchSprints(),
        jiraService.fetchRoadmap()
      ]);

      let finalBoard = board.status === 'fulfilled' ? board.value : null;
      let finalSprints = sprintList.status === 'fulfilled' ? sprintList.value : [];
      let finalRoadmap = roadmap.status === 'fulfilled' ? roadmap.value : null;

      // 2. Fallback logic: If Jira fails but local roadmap (project_status.json) is available
      if (!finalBoard && finalRoadmap) {
        console.warn("Jira Live Sync failed. Falling back to local project status.");
        setIsLocalFallback(true);
        
        // Transform local tasks into board-like structure
        finalBoard = {
          issues: (finalRoadmap.tasks || []).map(t => ({
            key: t.key,
            summary: t.summary,
            status: t.status,
            priority: t.priority || 'Medium',
            updated: new Date().toISOString(),
            description: t.description || 'Synced from local project status.',
            labels: t.labels || [],
            url: '#'
          })),
          last_synced: new Date().toISOString()
        };

        if (finalRoadmap.sprint) {
          finalSprints = [{
            id: finalRoadmap.sprint.id,
            name: finalRoadmap.sprint.name,
            state: 'active',
            goal: finalRoadmap.sprint.goal,
            endDate: null
          }];
        }
      }

      setBoardData(finalBoard);
      setSprints(finalSprints);
      setRoadmapData(finalRoadmap);
      
      if (!finalBoard && !finalRoadmap) {
        setError("Unable to connect to Jira or retrieve local project status.");
      } else {
        setError(null);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns = ['To Do', 'In Progress', 'Done'];

  // Map Jira statuses to our board columns safely
  const getIssuesByColumn = (col) => {
    if (!boardData?.issues) return [];
    return boardData.issues.filter(i => {
      const status = i.status.toLowerCase();
      if (col === 'To Do') return status === 'to do' || status === 'open' || status === 'backlog';
      if (col === 'In Progress') return status === 'in progress' || status === 'doing' || status === 'in review';
      if (col === 'Done') return status === 'done' || status === 'completed' || status === 'closed';
      return false;
    });
  };

  // Hardcoded phases but with dynamic highlighting potential if we find a match
  const roadmapPhases = [
    { label: 'Discovery', status: 'completed' },
    { label: 'Strategy & IA', status: 'completed' },
    { label: 'Infrastructure', status: 'completed' },
    { label: 'Production', status: 'current' },
    { label: 'Launch', status: 'upcoming' }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <main className="pt-28 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">Live Agile Board</h1>
              {isLocalFallback && (
                <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200 flex items-center gap-1 py-1">
                  <ShieldCheck size={12} /> Local Snapshot
                </Badge>
              )}
            </div>
            <p className="text-gray-500 max-w-2xl text-lg font-medium leading-relaxed">
              Real-time synchronization with Jira Cloud. This board demonstrates how I manage 
              complex workstreams with enterprise-grade transparency and agility.
            </p>
          </div>
          <button 
            onClick={loadData}
            disabled={loading}
            className="group flex items-center gap-3 bg-white border border-gray-200 px-5 py-2.5 rounded-full text-indigo-600 font-bold hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300 shadow-sm"
          >
            <RefreshCw size={18} className={`${loading ? 'animate-spin text-indigo-400' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
            Sync Data
          </button>
        </div>

        {/* Managerial Overview Section */}
        {!loading && (boardData || roadmapData) && (
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Sprint Summary */}
            <Card className="lg:col-span-1 border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white/80 backdrop-blur-xl overflow-hidden ring-1 ring-black/[0.03]">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 text-indigo-600 mb-8">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <BarChart3 size={20} />
                  </div>
                  <span className="font-bold text-[10px] uppercase tracking-[0.2em]">Active Sprint</span>
                </div>
                {sprints.filter(s => s.state === 'active').map(sprint => (
                  <div key={sprint.id} className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{sprint.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed italic opacity-80 font-medium">"{sprint.goal || 'No goal set'}"</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-[11px] font-black text-gray-400 uppercase tracking-wider">
                        <span>Sprint Completion</span>
                        <span className="text-indigo-600">
                          {boardData.issues.length > 0 ? Math.round((getIssuesByColumn('Done').length / boardData.issues.length) * 100) : 0}%
                        </span>
                      </div>
                      <Progress 
                        value={boardData.issues.length > 0 ? (getIssuesByColumn('Done').length / boardData.issues.length) * 100 : 0} 
                        className="h-2.5 bg-gray-100" 
                      />
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-2 text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <Clock size={14} className="text-indigo-400" />
                        <span className="text-[11px] font-bold">
                          Ends: {sprint.endDate ? new Date(sprint.endDate).toLocaleDateString() : 'Rolling'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {sprints.filter(s => s.state === 'active').length === 0 && (
                  <div className="py-10 text-center border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/50">
                    <p className="text-sm font-semibold text-gray-400">No active sprint found.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* End-to-End Project Roadmap */}
            <Card className="lg:col-span-2 border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white/80 backdrop-blur-xl ring-1 ring-black/[0.03]">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-2 text-purple-600">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Rocket size={20} />
                    </div>
                    <span className="font-bold text-[10px] uppercase tracking-[0.2em]">Strategic Roadmap</span>
                  </div>
                  <Badge className="bg-purple-600 text-white hover:bg-purple-700 border-0 px-3 py-1 text-[10px] font-bold shadow-lg shadow-purple-200 uppercase tracking-widest">Phase 04: Build</Badge>
                </div>

                <div className="relative flex justify-between px-2">
                  <div className="absolute top-5 left-0 w-full h-[3px] bg-gray-100 -z-0 rounded-full" />
                  <div className="absolute top-5 left-0 w-[70%] h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 -z-0 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)]" />
                  
                  {roadmapPhases.map((phase, idx) => (
                    <div key={idx} className="relative z-10 flex flex-col items-center gap-5">
                      <div className={`w-10 h-10 rounded-2xl border-4 border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-500 group-hover:scale-110
                        ${phase.status === 'completed' ? 'bg-indigo-500 text-white' : 
                          phase.status === 'current' ? 'bg-white border-purple-500 text-purple-600' : 'bg-gray-100 text-gray-400'}`}>
                        {phase.status === 'completed' ? <ChevronRight size={18} /> : <div className="w-2.5 h-2.5 rounded-full bg-current animate-pulse" />}
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest 
                        ${phase.status === 'upcoming' ? 'text-gray-400' : 'text-gray-900 status-glow'}`}>{phase.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {loading && !boardData ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <div className="relative">
                <Loader2 className="w-16 h-16 animate-spin text-indigo-600 opacity-20" />
                <Loader2 className="w-16 h-16 animate-spin text-indigo-600 absolute top-0 left-0" style={{ animationDirection: 'reverse', animationDuration: '3s' }} />
            </div>
            <p className="text-gray-400 font-bold tracking-tighter uppercase text-xs">Establishing Secure Tunnel to Jira...</p>
          </div>
        ) : error && !boardData ? (
          <div className="bg-white border border-red-100 p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Sync Unavailable</h3>
            <p className="text-gray-500 mb-8 font-medium leading-relaxed">{error}</p>
            <Button onClick={loadData} className="bg-gray-900 text-white hover:bg-black px-8 py-6 rounded-2xl font-bold">Try Again</Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {columns.map(col => (
              <div key={col} className="flex flex-col gap-6">
                <div className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${col === 'Done' ? 'bg-green-500' : col === 'In Progress' ? 'bg-amber-500' : 'bg-gray-400'}`} />
                    <h2 className="font-black text-gray-900 uppercase tracking-[0.25em] text-[11px]">{col}</h2>
                  </div>
                  <Badge variant="outline" className="bg-white text-gray-400 border-gray-100 font-bold px-3">
                    {getIssuesByColumn(col).length}
                  </Badge>
                </div>
                
                <div className="bg-gray-200/40 p-4 rounded-[2rem] min-h-[650px] flex flex-col gap-4 ring-1 ring-black/[0.02]">
                  {getIssuesByColumn(col).map(issue => (
                    <Card 
                      key={issue.key} 
                      className={`border-0 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer group bg-white hover:-translate-y-1.5 active:scale-95
                        ${issue.summary.includes('Portfolio') ? 'border-l-[6px] border-indigo-500' : ''}`}
                      onClick={() => handleIssueClick(issue)}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[10px] font-black tracking-widest text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg uppercase">{issue.key}</span>
                          <Badge className={`${issue.priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'} border-0 text-[9px] font-black uppercase tracking-tighter`}>
                             {issue.priority}
                          </Badge>
                        </div>
                        <h3 className="text-base font-bold text-gray-800 leading-[1.4] line-clamp-2 min-h-[2.8rem] group-hover:text-indigo-600 transition-colors duration-300">
                          {issue.summary}
                        </h3>
                        <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                             <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-[10px] text-white font-black shadow-lg shadow-indigo-100">
                                MM
                             </div>
                             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Mara Martins</span>
                          </div>
                          <span className="text-[10px] text-gray-300 font-black">{new Date(issue.updated).toLocaleDateString()}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent className="sm:max-w-xl border-l-[12px] border-indigo-600/5 p-0 overflow-y-auto">
            {selectedIssue && (
              <div className="flex flex-col h-full bg-white">
                <SheetHeader className="p-10 border-b border-gray-100 bg-[#fafafa]/50">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="outline" className="text-indigo-600 border-indigo-200 bg-white font-black px-4 py-1 tracking-widest text-xs">
                      {selectedIssue.key}
                    </Badge>
                    <Badge className={`${selectedIssue.priority === 'High' ? 'bg-red-500' : 'bg-emerald-500'} font-black text-[10px] px-3 py-1 shadow-lg shadow-black/5`}>
                      {selectedIssue.priority} PRIORITY
                    </Badge>
                  </div>
                  <SheetTitle className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                    {selectedIssue.summary}
                  </SheetTitle>
                  <SheetDescription className="hidden">Issue details for {selectedIssue.key}</SheetDescription>
                </SheetHeader>

                <div className="flex-1 p-10 space-y-10">
                  {/* Status & Metadata */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-5 bg-gray-50 rounded-[1.5rem] border border-gray-100 shadow-inner">
                      <p className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Current Status</p>
                      <p className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${selectedIssue.status === 'Done' ? 'bg-emerald-500' : 'bg-indigo-500'}`} />
                        {selectedIssue.status}
                      </p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-[1.5rem] border border-gray-100 shadow-inner">
                      <p className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Delivery Target</p>
                      <p className={`text-lg font-extrabold flex items-center gap-2 ${selectedIssue.duedate && new Date(selectedIssue.duedate) < new Date() ? 'text-red-600' : 'text-gray-900'}`}>
                        <Calendar size={18} className="text-indigo-600" />
                        {selectedIssue.duedate ? new Date(selectedIssue.duedate).toLocaleDateString() : 'Rolling'}
                      </p>
                    </div>
                  </div>

                  {/* Labels Section */}
                  {selectedIssue.labels?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedIssue.labels.map(label => (
                        <Badge key={label} variant="secondary" className="text-[10px] bg-white text-gray-700 border-gray-200 font-bold px-3 py-1 shadow-sm">
                          #{label}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Description Section */}
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                      <Tag size={16} className="text-indigo-400" /> Executive Summary
                    </h4>
                    <div className="text-gray-600 leading-relaxed text-base whitespace-pre-wrap bg-white border border-gray-100 p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] font-medium">
                      {selectedIssue.description || "No strategic overview provided for this workstream."}
                    </div>
                  </div>

                  {/* Program Management Insights */}
                  <div className="p-6 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2rem] text-white shadow-xl shadow-indigo-100">
                    <h4 className="text-[10px] font-black text-white/50 uppercase mb-3 tracking-widest">Stakeholder Insights</h4>
                    <p className="text-sm text-white/90 leading-relaxed font-bold italic tracking-tight">
                      "Tracking this workstream through live Jira automation maintains velocity and ensures 
                      100% architectural transparency across the localization pipeline."
                    </p>
                    <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[9px] text-white/40 font-black tracking-[0.2em] flex items-center gap-2">
                         <ShieldCheck size={12} /> ENTERPRISE SYNC ACTIVE
                      </span>
                      <span className="text-[9px] text-white/40 italic font-bold">{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <SheetFooter className="p-10 mt-auto border-t border-gray-100 bg-white sticky bottom-0">
                  <div className="w-full space-y-4 text-center">
                    <Button 
                      asChild 
                      className="w-full bg-indigo-600 hover:bg-black text-white font-black py-8 rounded-[1.5rem] shadow-2xl shadow-indigo-200 text-lg transition-all duration-500"
                    >
                      <a href="https://calendly.com/maramartins" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                        REQUEST FULL ACCESS <ExternalLink size={20} />
                      </a>
                    </Button>
                    <p className="text-[10px] text-gray-300 font-extrabold uppercase tracking-widest">
                       &copy; {new Date().getFullYear()} MARA MARTINS &bull; ALL RIGHTS RESERVED
                    </p>
                  </div>
                </SheetFooter>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </main>
      <style jsx>{`
        .status-glow {
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.2);
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.33); opacity: 0; }
          80%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ScrumBoardPage;