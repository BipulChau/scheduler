import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (second, replaceSecond = false) => {
    setMode(second);
    setHistory(prev => {
      const prevState = [...prev]
      replaceSecond && prevState.pop()
      return [...prevState, second]
    })
  };

  const back = () => {
    if(history.length > 1)
    {const newHistory = [...history];
      newHistory.pop();
      setMode(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
  };}

  return { mode, transition, back };
};

export default useVisualMode;
