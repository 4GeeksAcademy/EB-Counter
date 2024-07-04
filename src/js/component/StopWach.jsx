import React, { useEffect, useState, useRef, useCallback } from "react";
import { SecondsCounterView } from "./SecondsCounterView";
import { LapsTable } from "./LapsTable";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

 export function StopWatch() {
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [laps, setLaps] = useState([]);

  const handleReset = () => {
    setCounter(0);
    setIsPaused(false);
    setLaps([]);
  };

  const handleLap = () => {
    const lastLap = laps.length > 0 ? laps[laps.length - 1] : undefined;
    const difference = lastLap ? counter - lastLap.counter : 0;

    setLaps([...laps, { counter, difference }]);
    setCounter(0);
  };

  const handleStop = () => {
    setIsPaused(true);
  };

  useInterval(() => {
    if (!isPaused) {
      setCounter(counter + 1);
    }
  }, 1000);

  return (
    <div>
      <SecondsCounterView seconds={counter} />

      {/* Buttons  */}
      <div className="w-6/12 grid grid-cols-3 mx-auto gap-4 mt-8 font-mono">
        <button
          className="border rounded-md border-green-900 disabled:text-green-700 disabled:bg-green-400 disabled:border-green-300"
          onClick={handleReset}
          disabled={!isPaused}
        >
          Start
        </button>
        <button
          className="border rounded-md border-green-900 disabled:text-green-700 disabled:bg-green-400 disabled:border-green-300"
          onClick={handleLap}
          disabled={isPaused}
        >
          Lap
        </button>
        <button
          className="border rounded-md border-green-900 disabled:text-green-700 disabled:bg-green-400 disabled:border-green-300"
          onClick={handleStop}
          disabled={isPaused}
        >
          Stop
        </button>
      </div>

      <LapsTable laps={laps} />
    </div>
  );
}
export default StopWatch ;