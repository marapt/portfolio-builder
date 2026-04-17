import React, { useState, useEffect } from 'react';
import { jiraService } from '../data/jiraService';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Loader2, AlertCircle, RefreshCw, ExternalLink, Calendar, Tag, ChevronRight, BarChart3, Clock, Rocket } from 'lucide-react';
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
    setIsSheetOpen(true);
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [board, sprintList] = await Promise.all([
        jiraService.fetchLiveBoard(),
        jiraService.fetchSprints()
      ]);
      setBoardData(board);
      setSprints(sprintList || []);
      setError(null);
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-28 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Agile Board</h1>
            <p className="text-gray-600 max-w-2xl">
              Real-time synchronization with Jira Cloud. This board demonstrates how I manage 
              complex localization workstreams with transparency and agility.
            </p>
          </div>
          <button 
            onClick={loadData}
            disabled={loading}
            className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            Refresh Data
          </button>
        </div>

        {/* Managerial Overview Section */}
        {!loading && boardData && (
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Sprint Summary */}
            <Card className="lg:col-span-1 border-0 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-indigo-600 mb-6">
                  <BarChart3 size={20} />
                  <span className="font-bold text-xs uppercase tracking-wider">Active Sprint</span>
                </div>
                {sprints.filter(s => s.state === 'active').map(sprint => (
                  <div key={sprint.id} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{sprint.name}</h3>
                      <p className="text-sm text-gray-500 italic">"{sprint.goal || 'No goal set'}"</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-gray-400 uppercase">
                        <span>Sprint Completion</span>
                        <span>{boardData.issues.length > 0 ? Math.round((boardData.issues.filter(i => i.status === 'Done').length / boardData.issues.length) * 100) : 0}%</span>
                      </div>
                      <Progress value={boardData.issues.length > 0 ? (boardData.issues.filter(i => i.status === 'Done').length / boardData.issues.length) * 100 : 0} className="h-2" />
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock size={14} />
                        <span className="text-xs font-medium">
                          Ends: {sprint.endDate ? new Date(sprint.endDate).toLocaleDateString() : 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {sprints.filter(s => s.state === 'active').length === 0 && (
                  <div className="py-6 text-center border-2 border-dashed border-gray-100 rounded-xl">
                    <p className="text-sm text-gray-400">No active sprint found. Displaying overall board velocity.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* End-to-End Project Roadmap */}
            <Card className="lg:col-span-2 border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 text-purple-600">
                    <Rocket size={20} />
                    <span className="font-bold text-xs uppercase tracking-wider">Strategic Roadmap</span>
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Phase 04: Build</Badge>
                </div>

                <div className="relative flex justify-between">
                  {/* Progress Line */}
                  <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-100 -z-0" />
                  <div className="absolute top-4 left-0 w-3/4 h-0.5 bg-purple-500 -z-0" />
                  
                  {[
                    { label: 'Discovery', status: 'completed' },
                    { label: 'Infrastructure', status: 'completed' },
                    { label: 'Production', status: 'current' },
                    { label: 'Launch', status: 'upcoming' }
                  ].map((phase, idx) => (
                    <div key={idx} className="relative z-10 flex flex-col items-center gap-3">
                      <div className={`w-8 h-8 rounded-full border-4 border-white shadow-sm flex items-center justify-center 
                        ${phase.status === 'completed' ? 'bg-purple-500 text-white' : 
                          phase.status === 'current' ? 'bg-white border-purple-500 text-purple-600' : 'bg-gray-100 text-gray-400'}`}>
                        {phase.status === 'completed' ? <ChevronRight size={16} /> : <div className="w-2 h-2 rounded-full bg-current" />}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-tight 
                        ${phase.status === 'upcoming' ? 'text-gray-400' : 'text-gray-900'}`}>{phase.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {loading && !boardData ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-indigo-600 mb-4" />
            <p className="text-gray-500">Connecting to Jira...</p>
          </div>
        ) : error ? (
          <div className="bg-white border border-red-100 p-8 rounded-2xl shadow-sm text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Sync Unavailable</h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <p className="text-sm text-gray-400 italic">Ensure your FastAPI backend is running and configured with your Jira API Token.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {columns.map(col => (
              <div key={col} className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-2">
                  <h2 className="font-bold text-gray-500 uppercase tracking-widest text-xs">{col}</h2>
                  <Badge variant="outline" className="text-gray-400 border-gray-200">
                    {boardData?.issues?.filter(i => i.status === col).length || 0}
                  </Badge>
                </div>
                
                <div className="bg-gray-100/80 p-3 rounded-2xl min-h-[600px] flex flex-col gap-3">
                  {boardData?.issues?.filter(i => i.status === col).map(issue => (
                    <Card 
                      key={issue.key} 
                      className={`border-0 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group 
                        ${issue.summary.includes('Portfolio') ? 'border-l-4 border-indigo-400' : ''}`}
                      onClick={() => handleIssueClick(issue)}
                    >
                      <CardContent className="p-4">
                        {issue.summary.includes('Portfolio') && (
                          <div className="flex items-center gap-1 mb-2">
                            <Badge className="bg-indigo-600 text-[8px] py-0 px-1 uppercase leading-tight font-bold">Build Task</Badge>
                          </div>
                        )}
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded uppercase">{issue.key}</span>
                          <div className={`w-2 h-2 rounded-full ${issue.priority === 'High' ? 'bg-red-500' : 'bg-green-500'}`} title={`Priority: ${issue.priority}`} />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 leading-snug">
                          {issue.summary}
                        </h3>
                        <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold">
                            MM
                          </div>
                          <span className="text-[10px] text-gray-400 font-medium">{new Date(issue.updated).toLocaleDateString()}</span>
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
          <SheetContent className="sm:max-w-md border-l border-gray-100 p-0 overflow-y-auto">
            {selectedIssue && (
              <div className="flex flex-col h-full">
                <SheetHeader className="p-6 border-b border-gray-50 bg-gray-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-indigo-600 border-indigo-100 bg-indigo-50 font-bold px-2 py-0">
                      {selectedIssue.key}
                    </Badge>
                    <Badge className={`${selectedIssue.priority === 'High' ? 'bg-red-500' : 'bg-green-500'}`}>
                      {selectedIssue.priority} Priority
                    </Badge>
                  </div>
                  <SheetTitle className="text-2xl font-bold text-gray-900 leading-tight">
                    {selectedIssue.summary}
                  </SheetTitle>
                  <SheetDescription className="hidden">Issue details for {selectedIssue.key}</SheetDescription>
                </SheetHeader>

                <div className="flex-1 p-6 space-y-8">
                  {/* Status & Metadata */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                      <p className="text-sm font-semibold text-gray-700">{selectedIssue.status}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Last Updated</p>
                      <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Calendar size={14} className="text-gray-400" />
                        {new Date(selectedIssue.updated).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">
                      <Tag size={14} /> Description
                    </h4>
                    <div className="text-gray-600 leading-relaxed text-sm whitespace-pre-wrap bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                      {selectedIssue.description || "No description provided for this task."}
                    </div>
                  </div>

                  {/* Program Management Insights */}
                  <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100/50">
                    <h4 className="text-[10px] font-bold text-indigo-400 uppercase mb-2">PM Insights</h4>
                    <p className="text-xs text-indigo-600/80 leading-relaxed italic">
                      Tracking this task via the Agile Scrum Board ensures cross-functional transparency and 
                      maintains the localization cycle's velocity.
                    </p>
                  </div>
                </div>

                <SheetFooter className="p-6 mt-auto border-t border-gray-50 bg-white sticky bottom-0">
                  <div className="w-full space-y-3">
                    <Button 
                      asChild 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-6 rounded-xl shadow-lg shadow-indigo-200"
                    >
                      <a href="https://calendly.com/maramartins" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        Schedule a Strategy Session <ExternalLink size={16} />
                      </a>
                    </Button>
                    <p className="text-[10px] text-center text-gray-400 italic">
                      Private board access is restricted. Let's connect to discuss how I can implement these workflows for your team.
                    </p>
                  </div>
                </SheetFooter>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
};
export default ScrumBoardPage;