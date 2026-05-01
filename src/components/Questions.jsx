import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Which economic concept describes the total market value of all final goods and services produced within a country's borders in a specific time period?",
    options: ["Gross National Product (GNP)", "Consumer Price Index (CPI)", "Gross Domestic Product (GDP)", "Net National Income (NNI)"],
    answer: "Gross Domestic Product (GDP)",
  },
  {
    id: 2,
    question: "In literature, a 'bildungsroman' is a genre of novel that focuses on what theme?",
    options: ["A satirical look at political corruption", "The moral and psychological growth of the protagonist from youth to adulthood", "A collection of poems written in response to a tragic event", "A story told entirely through a series of letters or documents"],
    answer: "The moral and psychological growth of the protagonist from youth to adulthood",
  },
  {
    id: 3,
    question: "In the context of the human brain, which lobe is primarily responsible for processing visual information?",
    options: ["Frontal Lobe", "Parietal Lobe", "Temporal Lobe", "Occipital Lobe"],
    answer: "Occipital Lobe",
  },
  {
    id: 4,
    question: "The 'Meiji Restoration' was a 19th-century political revolution that ended the shogunate and restored imperial rule in which country?",
    options: ["China", "Korea", "Japan", "Vietnam"],
    answer: "Japan",
  },
  {
    id: 5,
    question: "Which fundamental force of nature is responsible for holding the nucleus of an atom together?",
    options: ["Gravity", "Electromagnetic Force", "Strong Nuclear Force", "Weak Nuclear Force"],
    answer: "Strong Nuclear Force",
  },
  {
    id: 6,
    question: "Which philosophical movement, associated with Jean-Paul Sartre and Albert Camus, emphasizes individual existence, freedom, and choice?",
    options: ["Stoicism", "Existentialism", "Utilitarianism", "Nihilism"],
    answer: "Existentialism",
  },
  {
    id: 7,
    question: "In geography, what is the term for the point on the Earth's surface directly above where an earthquake originates?",
    options: ["Hypocenter", "Epicenter", "Fault Line", "Seismic Zone"],
    answer: "Epicenter",
  },
  {
    id: 8,
    question: "Which of the following is an example of a 'covalent bond'?",
    options: ["The attraction between Na+ and Cl- ions", "The sharing of electrons between two Oxygen atoms (O₂)", "The attraction between water molecules due to polarity", "The bond between metal ions in a 'sea of electrons'"],
    answer: "The sharing of electrons between two Oxygen atoms (O₂)",
  },
  {
    id: 9,
    question: "The 'Magna Carta', signed in 1215, is significant in political history because it:",
    options: ["Declared the independence of the American colonies", "Established the principle that everyone, including the king, is subject to the law", "Formally ended the French Revolution", "Abolished the system of feudalism across Europe"],
    answer: "Established the principle that everyone, including the king, is subject to the law",
  },
  {
    id: 10,
    question: "What is the main purpose of 'mitosis' in multicellular organisms?",
    options: ["To produce gametes (sperm and egg cells) for reproduction", "To create genetic diversity through crossing over", "Growth and the repair of tissues by creating identical daughter cells", "To reduce the chromosome count by half"],
    answer: "Growth and the repair of tissues by creating identical daughter cells",
  },
];

function Questions({ onRestart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = (option) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(option);

    if (option === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }

    // Auto-advance after 1.2s
    setTimeout(() => {
      handleNext();
    }, 1200);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedAnswer(null);
    }
  };

  if (showResult) {
    return (
      <div className="w-full max-w-lg p-10 text-center bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] shadow-2xl animate-in zoom-in duration-300">
        <div className="mb-6 inline-flex p-5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
          <span className="text-4xl">🏆</span>
        </div>
        <h2 className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Quiz Complete</h2>
        <p className="mt-4 text-slate-300 text-lg">
          Mastery Level: <span className="font-bold text-white text-2xl">{(score/questions.length)*100}%</span>
        </p>
        <p className="text-slate-400 mt-2 font-medium">You got {score} out of {questions.length} correct.</p>
        
        <button
          onClick={onRestart}
          className="mt-10 w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-violet-500/25 cursor-pointer uppercase tracking-widest text-sm"
        >
          Re-Initialize
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="w-full max-w-3xl bg-slate-800/30 backdrop-blur-md border border-slate-700/50 p-6 md:p-12 rounded-[2.5rem] shadow-2xl animate-in slide-in-from-bottom-8 duration-700">
      
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div className="px-5 py-2 bg-violet-500/10 text-violet-300 text-xs font-bold rounded-full border border-violet-500/20 uppercase tracking-tighter">
          Module {currentIndex + 1} / {questions.length}
        </div>
        <div className="w-full md:w-48 h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-700 ease-out" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h1 className="text-2xl md:text-3xl font-bold leading-tight text-white mb-10 min-h-[100px]">
        {currentQ.question}
      </h1>

      {/* Options */}
      <div className="grid gap-4 mb-12">
        {currentQ.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentQ.answer;
          
          let buttonStyles = "bg-slate-700/30 hover:bg-slate-700/60 border-slate-600/50 text-slate-300 hover:text-white";
          
          if (selectedAnswer !== null) {
            if (isCorrect) {
              buttonStyles = "bg-emerald-500/20 border-emerald-500/50 text-emerald-100 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]";
            } else if (isSelected) {
              buttonStyles = "bg-rose-500/20 border-rose-500/50 text-rose-100 shadow-[0_0_20px_-5px_rgba(244,63,94,0.4)]";
            } else {
              buttonStyles = "bg-slate-900/40 opacity-40 border-slate-800 text-slate-500 scale-[0.98]";
            }
          }

          return (
            <button
              key={option}
              disabled={selectedAnswer !== null}
              onClick={() => handleSubmit(option)}
              className={`${buttonStyles} text-left p-5 rounded-2xl border-2 transition-all duration-300 active:scale-[0.97] cursor-pointer font-semibold text-base md:text-lg`}
            >
              <div className="flex items-center gap-4">
                <span className={`w-8 h-8 flex items-center justify-center rounded-lg border border-inherit text-xs`}>
                  {isSelected ? "●" : "○"}
                </span>
                {option}
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 items-center pt-8 border-t border-slate-700/30">
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0 || selectedAnswer !== null}
          className="flex-1 px-6 py-4 rounded-xl font-bold bg-slate-700/40 hover:bg-slate-700 border border-slate-600/30 text-slate-300 disabled:opacity-0 transition-all cursor-pointer"
        >
          Previous
        </button>
        <button 
          onClick={handleNext} 
          disabled={selectedAnswer === null}
          className="flex-[2] px-6 py-4 rounded-xl font-black bg-violet-600 hover:bg-violet-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-violet-900/20 cursor-pointer text-white border border-violet-400/20"
        >
          {currentIndex === questions.length - 1 ? "Finalize" : "Next Question"}
        </button>
      </div>
    </div>
  );
}
export default Questions;