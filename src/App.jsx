import { useState } from "react";
import Questions from "./components/Questions";

function App() {
  const [appState, setAppState] = useState("START");

  return (
    <div className="min-h-screen bg-[#020617] bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1)_0%,transparent_50%)] text-white flex items-center justify-center p-4 selection:bg-violet-500/30">
      
      {appState === "START" && (
        <div className="max-w-xl w-full text-center space-y-12 animate-in fade-in slide-in-from-top-10 duration-1000">
          
          <div className="space-y-6">
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              PUSH YOUR <br />
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">LIMITS.</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
              Experience the multi-step engine designed to test core engineering principles and logic.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <div className="bg-slate-800/20 border border-slate-700/50 p-4 rounded-2xl backdrop-blur-xl">
              <p className="text-violet-400 font-black text-2xl">10</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Questions</p>
            </div>
            <div className="bg-slate-800/20 border border-slate-700/50 p-4 rounded-2xl backdrop-blur-xl">
              <p className="text-fuchsia-400 font-black text-2xl">High</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Difficulty</p>
            </div>
          </div>

          <button
            onClick={() => setAppState("QUIZ")}
            className="group relative w-full max-w-sm inline-flex items-center justify-center bg-white text-slate-950 px-8 py-6 rounded-2xl font-black text-xl transition-all hover:bg-violet-500 hover:text-white hover:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.5)] active:scale-95 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 uppercase tracking-widest">Launch Session</span>
            <div className="absolute inset-0 bg-linear-to-r from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      )}

      {appState === "QUIZ" && (
        <Questions onRestart={() => setAppState("START")} />
      )}
      
    </div>
  );
}

export default App;