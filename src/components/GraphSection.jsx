// src/components/GraphSection.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function GraphSection({ data }) {
  return (
    <div>
      <h2>Graphique</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="A2" stroke="#8884d8" />
        <Line type="monotone" dataKey="CreanceMyriade" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default GraphSection;