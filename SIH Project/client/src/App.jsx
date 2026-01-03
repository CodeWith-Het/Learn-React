import React, { useState, useRef, useEffect } from 'react';
import { DiffEditor } from '@monaco-editor/react';
import { Play, ShieldAlert, CheckCircle, XCircle, Code2, User, Zap, RefreshCw } from 'lucide-react';
import io from 'socket.io-client';

// Server connection
const socket = io.connect("http://localhost:3001");

const App = () => {
  const diffEditorRef = useRef(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState(null);

  // Default Code
  const [juniorCode, setJuniorCode] = useState(`// Junior Dev Code
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}`);

  const [seniorCode, setSeniorCode] = useState(`// Senior Dev Code
function calculateSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}`);

  // --- SOCKET LISTENERS ---
  useEffect(() => {
    socket.on("analysis-result", (data) => {
      setAiResult(data);
      setIsAnalyzing(false);
    });

    socket.on("code-update", (newCodeData) => {
      console.log("Code synced from teammate!");
      // Jab server se naya code aaye, to editor update karo
      setJuniorCode(newCodeData.junior);
      setSeniorCode(newCodeData.senior);
      alert("⚠️ Code Updated by Teammate!");
    });

    return () => {
      socket.off("analysis-result");
      socket.off("code-update");
    };
  }, []);

  function handleEditorMount(editor, monaco) {
    diffEditorRef.current = editor;
  }

  // --- BUTTON 1: ANALYZE ---
  const handleAnalyze = () => {
    // Current code editor se nikalo
    const currentJunior = diffEditorRef.current ? diffEditorRef.current.getOriginalEditor().getValue() : juniorCode;
    const currentSenior = diffEditorRef.current ? diffEditorRef.current.getModifiedEditor().getValue() : seniorCode;

    setIsAnalyzing(true);
    socket.emit("request-analysis", {
      junior: currentJunior,
      senior: currentSenior
    });
  };

  // --- BUTTON 2: SYNC (Fix wala) ---
  const handleSync = () => {
    if (diffEditorRef.current) {
      const freshJuniorCode = diffEditorRef.current.getOriginalEditor().getValue();
      const freshSeniorCode = diffEditorRef.current.getModifiedEditor().getValue();

      socket.emit("sync-code", {
        junior: freshJuniorCode,
        senior: freshSeniorCode
      });
      alert("✅ Code Synced with Team!");
    }
  };

  // --- BUTTON 3: MERGE (New Feature) ---
  const handleMerge = () => {
    if (diffEditorRef.current) {
      // Senior ka code nikalo
      const bestCode = diffEditorRef.current.getModifiedEditor().getValue();
      
      // Junior wali side (Original) me daal do
      setJuniorCode(bestCode);
      
      // Popup band karo
      setAiResult(null);
      
      alert("🎉 Code Merged Successfully! Junior code replaced.");
    }
  };

  return (
    <div className="h-screen w-full bg-[#1e1e1e] flex flex-col text-white font-sans overflow-hidden">
      
      {/* NAVBAR */}
      <nav className="h-16 border-b border-gray-700 flex items-center justify-between px-6 bg-[#18181b] shadow-md z-10">
        <div className="flex items-center gap-3 text-blue-500">
          <Code2 size={32} strokeWidth={2.5} />
          <div>
            <h1 className="text-xl font-bold tracking-wide text-white leading-tight">CodeConflict <span className="text-blue-500">AI</span></h1>
            <p className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">Merge Governance System</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-1.5 rounded-full border border-gray-700">
            <User size={16} className="text-gray-400" />
            <span className="text-sm text-gray-300">Logged in as: <span className="font-semibold text-green-400">Senior Dev</span></span>
          </div>
        </div>
      </nav>

      {/* EDITOR ARENA */}
      <div className="flex-1 relative flex">
        <div className="w-full h-full">
          <DiffEditor
            height="100%"
            theme="vs-dark"
            language="javascript"
            original={juniorCode}
            modified={seniorCode}
            onMount={handleEditorMount}
            options={{
              renderSideBySide: true,
              fontSize: 14,
              padding: { top: 20 },
              minimap: { enabled: false },
              automaticLayout: true,
              originalEditable: true, 
            }}
          />
        </div>

        {/* LOADING SPINNER */}
        {isAnalyzing && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-20">
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-2xl flex flex-col items-center animate-in fade-in zoom-in duration-300">
              <div className="relative mb-4">
                <div className="w-16 h-16 border-4 border-blue-500/30 rounded-full animate-spin"></div>
                <div className="w-16 h-16 border-4 border-t-blue-500 rounded-full animate-spin absolute top-0 left-0"></div>
                <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500" fill="currentColor" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Server Processing...</h3>
              <p className="text-gray-400 text-sm">Analyzing Logic & Complexity</p>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER CONTROLS */}
      <div className="h-20 bg-[#18181b] border-t border-gray-700 flex items-center justify-between px-8 z-10">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-gray-400 text-sm font-medium">System Status: <span className="text-green-500">Connected to Socket</span></p>
        </div>
        
        <div className="flex gap-4">
            {/* SYNC BUTTON */}
            <button 
                onClick={handleSync}
                className="flex items-center gap-2 px-6 py-2.5 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all border border-transparent hover:border-gray-600"
            >
                <RefreshCw size={18} />
                Sync Code
            </button>

            {/* ANALYZE BUTTON */}
            <button 
                onClick={handleAnalyze}
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-900/20 hover:shadow-blue-600/40 transition-all transform active:scale-95"
            >
                <Play size={18} fill="currentColor" />
                Analyze Conflict
            </button>
        </div>
      </div>

      {/* RESULT POPUP */}
      {aiResult && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-[#18181b] w-full max-w-3xl rounded-2xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="bg-blue-500/20 text-blue-400 p-1.5 rounded-lg"><Code2 size={24} /></span>
                AI Analysis Report
              </h2>
              <button onClick={() => setAiResult(null)} className="text-gray-500 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
                <XCircle size={24} />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto">
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2 bg-gray-800/50 rounded-xl border border-gray-700 p-6 flex flex-col justify-center">
                        <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Recommendation</p>
                        <h3 className="text-3xl font-bold text-white mb-1">{aiResult.winner}</h3>
                        <p className="text-green-400 flex items-center gap-2 text-sm font-medium"><CheckCircle size={16} /> Best Performance</p>
                    </div>
                    <div className="col-span-1 bg-blue-600 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg">
                        <h3 className="text-5xl font-black text-white mb-1">{aiResult.score}</h3>
                        <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Quality Score</p>
                    </div>
                    <div className="col-span-3 grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50"><p className="text-gray-500 text-xs uppercase font-bold mb-2">Time Complexity</p><p className="font-mono text-yellow-400 text-lg font-semibold">{aiResult.complexity}</p></div>
                        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50"><p className="text-gray-500 text-xs uppercase font-bold mb-2">Security Audit</p><div className="flex items-center gap-2">{aiResult.security_risk ? (<><ShieldAlert className="text-red-500" /> <span className="text-red-400">Risk Found</span></>) : (<><CheckCircle className="text-green-500" /> <span className="text-green-400">Passed</span></>)}</div></div>
                    </div>
                    <div className="col-span-3 bg-gray-800/80 p-5 rounded-xl border-l-4 border-blue-500"><h4 className="text-blue-400 text-sm font-bold flex items-center gap-2 mb-2"><Zap size={16} /> Server Suggestion</h4><p className="text-gray-300 text-sm leading-relaxed">{aiResult.suggestion}</p></div>
                </div>
            </div>
            
            <div className="p-6 bg-[#18181b] border-t border-gray-700 flex justify-end gap-3">
              <button onClick={() => setAiResult(null)} className="px-5 py-2.5 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg font-medium transition-all">Dismiss</button>
              
              {/* MERGE BUTTON (Ab Working Hai!) */}
              <button 
                onClick={handleMerge}
                className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg flex items-center gap-2 transition-transform transform active:scale-95"
              >
                <CheckCircle size={18} /> 
                Merge Senior's Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;