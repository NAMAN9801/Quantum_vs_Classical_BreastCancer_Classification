// src/App.js
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    quantum: {
      main: '#7b1fa2',
      light: '#9c27b0',
      dark: '#6a1b9a',
      contrastText: '#fff',
    },
    classical: {
      main: '#1565c0',
      light: '#1976d2',
      dark: '#0d47a1',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.1rem',
    },
  },
});

function App() {
  const [documentationOpen, setDocumentationOpen] = useState(false);

  const handleDocumentationOpen = () => setDocumentationOpen(true);
  const handleDocumentationClose = () => setDocumentationOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header 
        documentationOpen={documentationOpen} 
        handleDocumentationOpen={handleDocumentationOpen}
        handleDocumentationClose={handleDocumentationClose}
      />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Dashboard />
      </Container>
      <Footer handleDocumentationOpen={handleDocumentationOpen} />
    </ThemeProvider>
  );
}

export default App;