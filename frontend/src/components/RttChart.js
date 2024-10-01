import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';

const RttChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottomRight', offset: -10 }} />
      <YAxis label={{ value: 'RTT', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="min" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
      <Area type="monotone" dataKey="max" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
      <Line type="monotone" dataKey="mean" stroke="#ff7300" name="Mean RTT" />
    </LineChart>
  </ResponsiveContainer>
);

export default RttChart;