import React from "react";

export const LapsTable = ({ laps }) => {
  return (
    <>
    <table className="w-full text-center mt-4 text-green-900">
      <thead>
        <tr>
          <th>Lap</th>
          <th>Time</th>
          <th>Difference</th>
        </tr>
      </thead>
      <tbody>
        {laps.map((lap, index) => (
          <tr key={index}>
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
