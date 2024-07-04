import React from "react";

export const SecondsCounterView = ({ seconds }) => {
  const secondsArray = String(seconds).padStart(6, '0').split('');

  return (
    <>
      <div className="container flex flex-row justify-evenly w-81 h-20 rounded-md font-mono">
        {secondsArray.map((digit, index) => (
          <div key={index} className="bg-green-400 w-16 rounded-lg border border-green-950 border-t-4 border-b-4 border-l-2 border-r-2 flex justify-center text-green-950 text-5xl items-center">
            {digit}
          </div>
        ))}
      </div>
    </>
  );
};

export default SecondsCounterView;
