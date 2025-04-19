// src/components/DatasetInfo.js
import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { Pie } from 'react-chartjs-2';  // Changed PieChart to Pie
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

const DatasetInfo = () => {
  const pieData = {
    labels: ['Benign (0)', 'Malignant (1)'],
    datasets: [
      {
        data: [357, 212],  // Approximation from your notebook
        backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)'],
        borderColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>Breast Cancer Dataset Overview</Typography>
        <Typography paragraph>
          The dataset used in this analysis is the Breast Cancer Wisconsin (Diagnostic) Dataset,
          which contains features computed from a digitized image of a fine needle aspirate (FNA)
          of a breast mass. The features describe characteristics of the cell nuclei present in the image.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Dataset Statistics</Typography>
                <Typography variant="body2" gutterBottom>• Number of samples: 569</Typography>
                <Typography variant="body2" gutterBottom>• Number of features: 10 (after preprocessing)</Typography>
                <Typography variant="body2" gutterBottom>• Train-test split: 80%-20%</Typography>
                <Typography variant="body2" gutterBottom>• Features were normalized using MinMaxScaler</Typography>
                <Typography variant="body2" gutterBottom>• PCA was used to reduce dimensions to 2 features in some models</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Class Distribution</Typography>
                <div style={{ height: 250 }}>
                  <Pie data={pieData} options={pieOptions} />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>Feature Description</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">Key Features:</Typography>
            <Typography variant="body2">• radius (mean of distances from center to points on the perimeter)</Typography>
            <Typography variant="body2">• texture (standard deviation of gray-scale values)</Typography>
            <Typography variant="body2">• perimeter</Typography>
            <Typography variant="body2">• area</Typography>
            <Typography variant="body2">• smoothness (local variation in radius lengths)</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2">• compactness (perimeter² / area - 1.0)</Typography>
            <Typography variant="body2">• concavity (severity of concave portions of the contour)</Typography>
            <Typography variant="body2">• concave points (number of concave portions of the contour)</Typography>
            <Typography variant="body2">• symmetry</Typography>
            <Typography variant="body2">• fractal dimension ("coastline approximation" - 1)</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default DatasetInfo;