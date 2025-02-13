import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { year: "2015", livesLost: 15000 },
  { year: "2016", livesLost: 14000 },
  { year: "2017", livesLost: 16000 },
  { year: "2018", livesLost: 18000 },
  { year: "2019", livesLost: 20000 },
  { year: "2020", livesLost: 25000 },
  { year: "2021", livesLost: 23000 },
  { year: "2022", livesLost: 21000 },
  { year: "2023", livesLost: 19000 },
  { year: "2024", livesLost: 17000 },
];

const LivesLostChart = () => {
  return (
    <div className="w-full h-96 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">
        Total Lives Lost Due to Blood Shortages (2015 - 2024)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="livesLost" fill="#FFC300" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LivesLostChart;
