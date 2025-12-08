import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

const TimelineConfidenceChart = () => {
  const data = [
    { month: 1, expected: 0, optimistic: 0, pessimistic: 0 },
    { month: 2, expected: 10, optimistic: 8, pessimistic: 12 },
    { month: 3, expected: 20, optimistic: 17, pessimistic: 23 },
    { month: 4, expected: 27, optimistic: 24, pessimistic: 32 },
    { month: 5, expected: 38, optimistic: 33, pessimistic: 43 },
    { month: 6, expected: 46, optimistic: 41, pessimistic: 52 },
    { month: 7, expected: 55, optimistic: 50, pessimistic: 63 },
    { month: 8, expected: 64, optimistic: 58, pessimistic: 73 },
    { month: 9, expected: 73, optimistic: 66, pessimistic: 84 },
    { month: 10, expected: 82, optimistic: 74, pessimistic: 95 },
    { month: 11, expected: 91, optimistic: 82, pessimistic: 105 },
    { month: 12, expected: 100, optimistic: 90, pessimistic: 115 }
  ];

  return (
    <div className="w-full h-full bg-white p-8 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Timeline Confidence Chart
      </h2>
      
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="month" 
            label={{ value: 'Month', position: 'insideBottom', offset: -10 }}
            tick={{ fontSize: 14 }}
            domain={[1, 12]}
          />
          <YAxis 
            label={{ value: 'Project Completion (%)', angle: -90, position: 'insideLeft', offset: 10 }}
            tick={{ fontSize: 14 }}
            domain={[0, 120]}
          />
          <Tooltip 
            formatter={(value) => `${value}%`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc' }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          
          {/* Shaded area between optimistic and pessimistic */}
          <defs>
            <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFD700" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#FFD700" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          
          {/* Area fill */}
          <Area
            type="monotone"
            dataKey="pessimistic"
            stroke="none"
            fill="url(#confidenceGradient)"
            fillOpacity={1}
          />
          <Area
            type="monotone"
            dataKey="optimistic"
            stroke="none"
            fill="#ffffff"
            fillOpacity={1}
          />
          
          {/* Lines */}
          <Line 
            type="monotone" 
            dataKey="expected" 
            stroke="#FF8C00" 
            strokeWidth={3}
            name="Expected Timeline"
            dot={{ fill: '#FF8C00', r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="optimistic" 
            stroke="#4A90E2" 
            strokeWidth={2.5}
            strokeDasharray="5 5"
            name="Optimistic Scenario"
            dot={{ fill: '#4A90E2', r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="pessimistic" 
            stroke="#2ECC71" 
            strokeWidth={2.5}
            strokeDasharray="5 5"
            name="Pessimistic Scenario"
            dot={{ fill: '#2ECC71', r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="mt-6 text-sm text-gray-600 max-w-3xl">
        <p className="mb-2">
          This chart shows project completion forecasts across three scenarios over a 12-month period.
        </p>
        <p>
          The <span className="font-semibold text-orange-600">Expected Timeline</span> represents the most likely completion path, 
          while the <span className="font-semibold text-blue-600">Optimistic</span> and <span className="font-semibold text-green-600">Pessimistic</span> scenarios 
          show best-case and worst-case projections. The shaded area represents the confidence interval.
        </p>
      </div>
    </div>
  );
};

export default TimelineConfidenceChart;