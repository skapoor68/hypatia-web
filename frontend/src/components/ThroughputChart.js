import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MaxFlowChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottomRight', offset: -10 }} />
      <YAxis label={{ value: 'Max Flow', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#82ca9d" name="Max Flow" />
    </LineChart>
  </ResponsiveContainer>
);

export default MaxFlowChart;