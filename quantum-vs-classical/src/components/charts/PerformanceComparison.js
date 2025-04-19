// src/components/charts/PerformanceComparison.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceComparison = () => {
  const data = {
    labels: [
      'Classical SVC (10 features)', 
      'Quantum VQC - RealAmplitudes (10 features)',
      'Classical SVC (2 features - PCA)',
      'Quantum VQC - RealAmplitudes (2 features - PCA)',
      'Quantum VQC - EfficientSU2 (2 features - PCA)'
    ],
    datasets: [
      {
        label: 'Training Accuracy',
        data: [0.98, 0.95, 0.94, 0.93, 0.96],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
      },
      {
        label: 'Testing Accuracy',
        data: [0.96, 0.92, 0.94, 0.92, 0.93],
        backgroundColor: 'rgba(255, 159, 64, 0.7)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${(context.parsed.y * 100).toFixed(1)}%`;
          }
        }
      }
    },
    scales: {
      y: {
        min: 0.7,
        max: 1.0,
        ticks: {
          callback: function(value) {
            return (value * 100).toFixed(0) + '%';
          }
        },
        title: {
          display: true,
          text: 'Accuracy'
        }
      },
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 45
        }
      }
    }
  };

  return (
    <div style={{ height: 400 }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PerformanceComparison;
