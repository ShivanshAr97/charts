import React from 'react';
import jsonFile from "../new.json";
import { Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

Chart.register(Title, Tooltip, Legend);

function Linechart() {
  const timestamps = {};

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  jsonFile.forEach(item => {
    const timestamp = formatDate(item.timestamp);
    if (timestamps[timestamp]) {
      timestamps[timestamp]++;
    } else {
      timestamps[timestamp] = 1;
    }
  });

  const labels = Object.keys(timestamps);
  const dataValues = Object.values(timestamps);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Traffic Over Time',
        data: dataValues,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="border p-4 rounded-md border-gray-400">
      <h2 className='mb-2 font-semibold'>Graph displaying traffic over the period of time</h2>
      <Line
        data={data}
        options={{
          
          responsive: true,
          scales: {
            y: {
              grid: {
                color: 'gray'
              },
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Events',
              },
            },
            x: {
              grid: {
                color: 'gray'
              },
              title: {
                display: true,
                text: 'Timestamp',
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Linechart;
