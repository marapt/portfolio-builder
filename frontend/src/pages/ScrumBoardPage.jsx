import React, { useState, useEffect } from 'react';
import { jiraService } from '../data/jiraService';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

const ScrumBoardPage = () => {
  const [boardData, setBoardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await jiraService.fetchLiveBoard();
      setBoardData(data);
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
                    <Card key={issue.key} className="border-0 shadow-sm hover:shadow-md transition-all duration-200">
                      <CardContent className="p-4">
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
      </main>
    </div>
  );
};

export default ScrumBoardPage;