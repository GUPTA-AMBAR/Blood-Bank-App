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
  { year: "2015", livesSaved: 30000 },
  { year: "2016", livesSaved: 35000 },
  { year: "2017", livesSaved: 41000 },
  { year: "2018", livesSaved: 47000 },
  { year: "2019", livesSaved: 50000 },
  { year: "2020", livesSaved: 62000 },
  { year: "2021", livesSaved: 75000 },
  { year: "2022", livesSaved: 89000 },
  { year: "2023", livesSaved: 102000 },
  { year: "2024", livesSaved: 115000 },
];

const BloodDonationChart = () => {
  console.log("Chart Data:", data); // Debugging step to check data in console

  return (
    <div className="w-full h-96 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">
        Total Lives Saved from Blood Donation (Past Years)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="livesSaved" fill="#FF4136" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BloodDonationChart;
