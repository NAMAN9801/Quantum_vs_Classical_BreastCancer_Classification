// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = ({ handleDocumentationOpen }) => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Quantum vs Classical Breast Cancer Classification
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          A comparison of machine learning approaches for medical diagnostics
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' | '}
          <Link color="inherit" href="#" onClick={(e) => {
            e.preventDefault();
            handleDocumentationOpen();
          }}>
            Project Documentation
          </Link>
          {' | '}
          <Link color="inherit" href="https://github.com/Naman9801/quantum-breast-cancer-classification" target="_blank">
            GitHub Repository
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;