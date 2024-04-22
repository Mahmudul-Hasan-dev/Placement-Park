import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { x: 1, y: 50 },
  { x: 2, y: 59 },
  { x: 3, y: 58 },
  { x: 4, y: 60 },
  { x: 5, y: 53 },
  { x: 6, y: 50 },
  { x: 7, y: 60 },
  { x: 8, y: 27 },
];

const Statistics = () => {
  return (
    <div>
      <div className="head">
        <h1>Statistics</h1>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="assignment" />
          <YAxis type="number" dataKey="y" name="Marks" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Assignment Marks" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>

    </div>
  );
};

export default Statistics;