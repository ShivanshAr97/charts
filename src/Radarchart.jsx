import React from 'react';
import { Bubble } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import jsonData from '../new.json';

const processData = (data) => {
  const filteredData = data.filter(item => item.alert && item.alert.signature);
  const signatureCounts = filteredData.reduce((acc, curr) => {
    const signature = curr.alert.signature;
    acc[signature] = (acc[signature] || 0) + 1;
    return acc;
  }, {});
  const sortedSignatures = Object.entries(signatureCounts).sort((a, b) => b[1] - a[1]);
  const bubbleData = sortedSignatures.slice(0, 10).map(([signature, count], index) => ({
    x: index + 1,
    y: count,
    r: count / 2,
    label: signature,
  }));

  return {
    datasets: [{
      label: 'Alert Signatures',
      data: bubbleData,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }],
  };
};

const Radarchart = () => {
  const data = processData(jsonData);

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Signatures'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Alert Count'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.raw.label || '';
            return `${label}: ${context.raw.y}`;
          }
        }
      }
    }
  };

  return (      
    <div className="border p-4 rounded-md border-gray-400">
      <h2 className='mb-2 font-semibold'>Bubble Chart of Alert Signatures</h2>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default Radarchart;
