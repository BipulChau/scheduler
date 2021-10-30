import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (second) => {
    setMode(second);
    setHistory(prev => {
      return [...prev, second]
    })
  };

  const back = () => {
  
    const newHistory = [...history];
      newHistory.pop();
      setMode(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
  };

  return { mode, transition, back };
};

export default useVisualMode;
