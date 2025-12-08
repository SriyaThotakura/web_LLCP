import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PVACCostCurve = () => {
  const data = [
    { month: 1, PV: 0, AC: 0 },
    { month: 2, PV: 100000, AC: 90000 },
    { month: 3, PV: 250000, AC: 220000 },
    { month: 4, PV: 300000, AC: 280000 },
    { month: 5, PV: 400000, AC: 380000 },
    { month: 6, PV: 450000, AC: 480000 },
    { month: 7, PV: 550000, AC: 580000 },
    { month: 8, PV: 650000, AC: 680000 },
    { month: 9, PV: 750000, AC: 760000 },
    { month: 10, PV: 820000, AC: 800000 },
    { month: 11, PV: 900000, AC: 880000 },
    { month: 12, PV: 1000000, AC: 970000 }
  ];

  const formatYAxis = (value) => {
    return `${(value / 1000000).toFixed(1)}`;
  };

  const formatTooltip = (value) => {
    return `$${(value / 1000000).toFixed(2)}M`;
  };

  return (
    <div className="w-full h-full bg-white p-8 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        PV vs AC Cost Curve for Executive Communications
      </h2>
      
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="month" 
            label={{ value: 'Month', position: 'insideBottom', offset: -10 }}
            tick={{ fontSize: 14 }}
          />
          <YAxis 
            label={{ value: 'Cumulative Cost ($)', angle: -90, position: 'insideLeft', offset: 10 }}
            tickFormatter={formatYAxis}
            tick={{ fontSize: 14 }}
            domain={[0, 1000000]}
          />
          <Tooltip 
            formatter={formatTooltip}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc' }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="PV" 
            stroke="#FFA500" 
            strokeWidth={3}
            name="Planned Value (PV)"
            dot={{ fill: '#FFA500', r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="AC" 
            stroke="#4A90E2" 
            strokeWidth={3}
            name="Actual Cost (AC)"
            dot={{ fill: '#4A90E2', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="mt-6 text-sm text-gray-600">
        <p className="mb-2"><span className="font-semibold">1e6</span> = 1,000,000 (1 million)</p>
        <p>The chart shows cumulative project costs over a 12-month period, comparing planned value against actual costs.</p>
      </div>
    </div>
  );
};

export default PVACCostCurve;