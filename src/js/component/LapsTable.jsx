import React from "react";

export const LapsTable = ({ laps }) => {
  return (
    <>
    <table className="w-full text-center mt-4 text-green-900 border-t-4 border-b-2 border-l-2 border-r-2 bg-green-100">
      <thead>
        <tr>
          <th>Lap</th>
          <th>Time</th>
          <th>Difference</th>
        </tr>
      </thead>
      <tbody>
        {laps.map((lap, index) => (
          <tr key={index} className="bg-green-200 text-xl">
            <td>{index + 1}</td>
            <td>{lap.counter}</td>
            <td>{lap.difference}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default LapsTable;
