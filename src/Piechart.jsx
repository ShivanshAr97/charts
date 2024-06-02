import React from "react";
import jsonFile from "../new.json";
import { Title, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
Chart.defaults.color = "#fff";

Chart.register(Title, Tooltip, Legend);

function Piechart() {
  console.log(jsonFile);
  const protocols = {};

  jsonFile.forEach((item) => {
    const protocol = item.proto;
    if (protocol) {
      if (protocols[protocol]) {
        protocols[protocol]++;
      } else {
        protocols[protocol] = 1;
      }
    }
  });

  console.log(protocols);
  const labels = Object.keys(protocols).filter(
    (protocol) => protocol !== "undefined"
  );
  const dataValues = Object.values(protocols).filter(
    (protocol) => protocol !== "undefined"
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Traffic by Protocol",
        data: dataValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };

  return (
    <div className="border p-4 rounded-md border-gray-400">
      <h2 className='mb-2 font-semibold'>Graph displaying the traffic by different protocols</h2>
      <Pie
        data={data}
        options={{
          responsive: true,
          aspectRatio: 2,
          plugins: {
            title: {
              display: true,
              text: "Traffic by Protocol",
              fontSize: 16,
            },
            legend: {
              position: "right",
            },
          },
        }}
      />
    </div>
  );
}

export default Piechart;
