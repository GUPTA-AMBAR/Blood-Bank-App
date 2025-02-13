import React, { useEffect, useRef } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarController } from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = ({ labels, label, bloodGroups }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (!Array.isArray(labels) || !Array.isArray(bloodGroups)) {
      console.error("Invalid data format: labels and bloodGroups must be arrays.");
      return;
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: bloodGroups,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            ticks: {
              autoSkip: false, // Ensures all labels are displayed
              maxRotation: 45, // Rotates labels if they are too long
              minRotation: 0,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [labels, label, bloodGroups]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
