import React from "react";
import jsonFile from "../new.json";
import { Title, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

Chart.register(Title, Tooltip, Legend);

function Horizontal() {
  const sourceIPs = {};

  jsonFile.forEach((item) => {
    const sourceIP = item.src_ip;
    if (sourceIP) {
      if (sourceIPs[sourceIP]) {
        sourceIPs[sourceIP]++;
      } else {
        sourceIPs[sourceIP] = 1;
      }
    }
  });

  const sortedSourceIPs = Object.keys(sourceIPs).sort(
    (a, b) => sourceIPs[b] - sourceIPs[a]
  );

  const topSourceIPs = sortedSourceIPs.slice(0, 10);
  const dataValues = topSourceIPs.map((ip) => sourceIPs[ip]);
  const labels = topSourceIPs;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Top Source IPs",
        data: dataValues,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="border p-4 rounded-md border-gray-400">
      <h2 className='mb-2 font-semibold'>Graph displaying the Top Source IPs</h2>
      <Bar
        data={data}
        options={{
          indexAxis: "y",
          plugins: {
            title: {
              display: true,
              text: "Top Source IPs",
              fontSize: 16,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default Horizontal;
