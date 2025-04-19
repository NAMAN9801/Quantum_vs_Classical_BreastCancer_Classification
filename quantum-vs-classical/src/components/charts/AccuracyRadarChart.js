// src/components/charts/AccuracyRadarChart.js
import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const AccuracyRadarChart = () => {
  const data = {
    labels: ['Train Score', 'Test Score', 'Feature Efficiency', 'Model Simplicity', 'Training Speed'],
    datasets: [
      {
        label: 'Classical SVC (10)',
        data: [0.98, 0.96, 0.3, 0.4, 0.9],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Quantum VQC (10)',
        data: [0.95, 0.92, 0.3, 0.2, 0.3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Classical SVC (2)',
        data: [0.94, 0.94, 0.9, 0.6, 0.95],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Quantum VQC-RA (2)',
        data: [0.93, 0.92, 0.9, 0.5, 0.7],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgb(153, 102, 255)',
        pointBackgroundColor: 'rgb(153, 102, 255)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(153, 102, 255)',
      },
      {
        label: 'Quantum VQC-EfficientSU2 (2)',
        data: [0.96, 0.93, 0.9, 0.3, 0.6],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgb(255, 159, 64)',
        pointBackgroundColor: 'rgb(255, 159, 64)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 159, 64)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        min: 0,
        max: 1,
        ticks: {
          stepSize: 0.2,
          callback: function(value) {
            return value.toFixed(1);
          }
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.r !== null) {
              label += context.parsed.r.toFixed(2);
            }
            return label;
          }
        }
      }
    }
  };

  return (
    <div style={{ height: 500 }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default AccuracyRadarChart;