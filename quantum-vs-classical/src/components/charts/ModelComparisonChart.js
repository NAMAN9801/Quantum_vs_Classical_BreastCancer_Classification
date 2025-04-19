import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ModelComparisonChart = () => {
  // Update the options object
const options = {
    plugins: {
      title: {
        display: true,
        text: 'Classical vs Quantum Model Comparison',
        font: {
          size: 16
        }
      },
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
            return `${label}: ${value.toFixed(2)}`;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        min: 0.8,
        max: 1.0,
        ticks: {
          callback: function(value) {
            return (value * 100).toFixed(0) + '%';
          }
        },
        title: {
          display: true,
          text: 'Accuracy',
          font: {
            weight: 'bold'
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        title: {
          display: true,
          text: 'Feature Sets',
          font: {
            weight: 'bold'
          }
        }
      }
    }
  };

  const labels = ['10 Features', '2 Features (PCA)'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Classical SVC',
        data: [0.96, 0.94],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
      },
      {
        label: 'Quantum VQC',
        data: [0.92, 0.93],
        backgroundColor: 'rgba(153, 102, 255, 0.7)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1
      }
    ]
  };

  // Update the return statement
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0
    }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default ModelComparisonChart;