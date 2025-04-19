// src/components/ModelInsights.js
import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Divider, Chip } from '@mui/material';

const ModelInsights = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>Model Architectures</Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>Classical Machine Learning</Typography>
                <Chip label="Support Vector Classifier (SVC)" color="primary" size="small" sx={{ mb: 2 }} />
                <Typography variant="body2" paragraph>
                  The Support Vector Classifier is a classical machine learning algorithm that works by 
                  finding the hyperplane that best separates the classes in the feature space. It's 
                  particularly effective for high-dimensional spaces and cases where the number of dimensions 
                  exceeds the number of samples.
                </Typography>
                <Typography variant="subtitle2">Implementation Details:</Typography>
                <Typography variant="body2">• Kernel: RBF (default)</Typography>
                <Typography variant="body2">• Regularization: C=1.0 (default)</Typography>
                <Typography variant="body2">• Gamma: 'scale' (default)</Typography>
                <Typography variant="body2">• Applied to both full features and PCA-reduced features</Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="secondary" gutterBottom>Quantum Machine Learning</Typography>
                <Chip label="Variational Quantum Classifier (VQC)" color="secondary" size="small" sx={{ mb: 2 }} />
                <Typography variant="body2" paragraph>
                  The Variational Quantum Classifier is a hybrid quantum-classical algorithm that uses 
                  parameterized quantum circuits to classify data. It encodes classical data into quantum 
                  states, applies a trainable circuit, and measures the output.
                </Typography>
                <Typography variant="subtitle2">Implementation Details:</Typography>
                <Typography variant="body2">• Feature Encoding: ZZFeatureMap</Typography>
                <Typography variant="body2">• Ansatz Variants: RealAmplitudes, TwoLocal, EfficientSU2</Typography>
                <Typography variant="body2">• Optimizer: COBYLA</Typography>
                <Typography variant="body2">• Maximum Iterations: 40-200 depending on complexity</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>Key Observations</Typography>
        <Typography variant="body1" paragraph>
          1. <strong>High Accuracy Across Models:</strong> Both classical and quantum models achieved high 
          accuracy (90%) on breast cancer classification.
        </Typography>
        <Typography variant="body1" paragraph>
          2. <strong>Dimensionality Reduction Impact:</strong> PCA reduced features from 10 to 2 while 
          maintaining similar performance, suggesting the presence of redundant information in the 
          original features.
        </Typography>
        <Typography variant="body1" paragraph>
          3. <strong>Quantum Ansatz Architecture Matters:</strong> Different quantum circuit designs 
          (RealAmplitudes vs EfficientSU2) showed variations in performance, with EfficientSU2 generally 
          performing better.
        </Typography>
        <Typography variant="body1" paragraph>
          4. <strong>Classical vs Quantum:</strong> Classical SVC slightly outperformed quantum VQC models on 
          the full feature set, but the gap narrowed with dimensionality reduction.
        </Typography>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>Implications and Future Directions</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">Advantages of Quantum Approach:</Typography>
            <Typography variant="body2">• Potential for handling complex feature spaces</Typography>
            <Typography variant="body2">• Non-linear transformations through quantum feature maps</Typography>
            <Typography variant="body2">• May show advantages with larger datasets or different problem structures</Typography>
            <Typography variant="body2">• Shows promising results even with significant dimensionality reduction</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">Future Research Directions:</Typography>
            <Typography variant="body2">• Explore different quantum feature maps</Typography>
            <Typography variant="body2">• Test with noisy quantum simulation to model real quantum hardware</Typography>
            <Typography variant="body2">• Investigate hybrid architectures combining classical and quantum components</Typography>
            <Typography variant="body2">• Apply to other medical diagnostic datasets</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ModelInsights;