// src/components/charts/TestAccuracyChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const TestAccuracyChart = () => {
  // The 5 models from our results
  const models = [
    'Classical SVC (10)',
    'Quantum VQC - RA (10)',
    'Classical SVC (2)',
    'Quantum VQC - RA (2)',
    'Quantum VQC - SU2 (2)'
  ];
  
  // Test accuracy values (from the results)
  const testScores = [0.96, 0.92, 0.94, 0.92, 0.93];

  const data = {
    labels: models,
    datasets: [
      {
        data: testScores,
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        borderColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 15
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${(value * 100).toFixed(1)}%`;
          }
        }
      }
    }
  };

  return (
    <div style={{ height: 350 }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TestAccuracyChart;