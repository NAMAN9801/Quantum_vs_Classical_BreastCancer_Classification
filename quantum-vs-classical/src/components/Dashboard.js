// src/components/Dashboard.js
import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Tabs, Tab } from '@mui/material';
import PerformanceComparison from './charts/PerformanceComparison';
import AccuracyRadarChart from './charts/AccuracyRadarChart';
import TestAccuracyChart from './charts/TestAccuracyChart';
import SummaryTable from './SummaryTable';
import ModelInsights from './ModelInsights';
import DatasetInfo from './DatasetInfo';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper 
        elevation={3}
        sx={{ 
          p: 3, 
          mb: 4, 
          borderRadius: 2,
          backgroundImage: 'linear-gradient(120deg, #f6f9fc 0%, #edf1f7 100%)'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Breast Cancer Classification: Quantum vs Classical Approaches
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          This dashboard presents the results of applying both classical and quantum machine learning 
          algorithms to breast cancer diagnosis. We compare Support Vector Classifiers (SVC) with 
          Variational Quantum Classifiers (VQC) using different feature sets and quantum ansatz architectures.
        </Typography>
      </Paper>

      <Tabs 
        value={tabValue} 
        onChange={handleTabChange} 
        variant="fullWidth" 
        sx={{ mb: 3 }}
      >
        <Tab label="Performance Visualization" />
        <Tab label="Dataset Information" />
        <Tab label="Model Details" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 2, borderRadius: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom>Performance Comparison</Typography>
              <PerformanceComparison />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2, borderRadius: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom>Test Accuracy</Typography>
              <TestAccuracyChart />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>Model Performance Metrics</Typography>
              <AccuracyRadarChart />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>Results Summary</Typography>
              <SummaryTable />
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <DatasetInfo />
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <ModelInsights />
      </TabPanel>
    </Box>
  );
};

export default Dashboard;