import React from "react";
import jsonFile from "../new.json";
import { Title, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

Chart.register(Title, Tooltip, Legend);

function DoughnutGraph() {
  const categories = {};
  jsonFile.forEach((item) => {
    const category = item.alert ? item.alert.category : null;
    if (category !== null && category !== undefined && category !== " ") {
      if (categories[category]) {
        categories[category]++;
      } else {
        categories[category] = 1;
      }
    }
  });
  const dataValues = Object.values(categories);
  const labels = Object.keys(categories);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Traffic by Category",
        data: dataValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };

  return (
    <div className="border p-4 rounded-md border-gray-400">
      <h2 className='mb-2 font-semibold'>Graph displaying the traffic by category</h2>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          aspectRatio: 2,
          plugins: {
            title: {
              display: true,
              text: "Traffic by Category",
              fontSize: 16,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
}

export default DoughnutGraph;
