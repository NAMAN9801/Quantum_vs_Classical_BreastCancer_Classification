// src/components/Header.js
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Link,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

// Import researcher images with correct extensions
import researcher1Image from '../assets/researcher1.jpeg';  // Changed from .jpg to .jpeg
import researcher2Image from '../assets/researcher2.jpg';

const Header = ({ documentationOpen, handleDocumentationOpen, handleDocumentationClose }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleAboutOpen = () => setAboutOpen(true);
  const handleAboutClose = () => setAboutOpen(false);
  
  const handleResultsOpen = () => setResultsOpen(true);
  const handleResultsClose = () => setResultsOpen(false);
  
  const handleContactOpen = () => setContactOpen(true);
  const handleContactClose = () => setContactOpen(false);

  return (
    <>
      <AppBar 
        position="static" 
        elevation={2}
        sx={{
          background: 'linear-gradient(45deg, #3f51b5 30%, #7b1fa2 90%)',
          mb: 2
        }}
      >
        <Toolbar>
          <ScienceIcon sx={{ mr: 2, fontSize: 28 }} />
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
          >
            Quantum vs Classical Breast Cancer Classification
          </Typography>
          <Box>
            <Button color="inherit" onClick={handleDocumentationOpen}>Documentation</Button>
            <Button color="inherit" onClick={handleResultsOpen}>Results</Button>
            <Button color="inherit" onClick={handleContactOpen}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Results Dialog */}
      <Dialog
        open={resultsOpen}
        onClose={handleResultsClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Key Findings
          <IconButton
            aria-label="close"
            onClick={handleResultsClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText component="div">
            <Typography variant="h6" gutterBottom>Summary of Results:</Typography>
            <Typography paragraph>
              Our experiments compared classical Support Vector Classifiers (SVC) with quantum 
              Variational Quantum Classifiers (VQC) on the Breast Cancer Wisconsin dataset, both 
              with original features (10) and PCA-reduced features (2).
            </Typography>
            
            <Card sx={{ mb: 3, backgroundColor: '#f5f5f5' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Accuracy Comparison</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Model</TableCell>
                        <TableCell align="center">Train Score</TableCell>
                        <TableCell align="center">Test Score</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Classical SVC (10 features)</TableCell>
                        <TableCell align="center">0.96</TableCell>
                        <TableCell align="center">0.96</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Quantum VQC (RealAmplitudes, 10)</TableCell>
                        <TableCell align="center">0.44</TableCell>
                        <TableCell align="center">0.61</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Classical SVC (2 features - PCA)</TableCell>
                        <TableCell align="center">0.92</TableCell>
                        <TableCell align="center">0.95</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Quantum VQC (RealAmplitudes, 2)</TableCell>
                        <TableCell align="center">0.67</TableCell>
                        <TableCell align="center">0.67</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Quantum VQC (EfficientSU2, 2)</TableCell>
                        <TableCell align="center">0.89</TableCell>
                        <TableCell align="center">0.88</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>

            <Typography variant="h6" gutterBottom>Key Observations:</Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              <ol>
                <li><strong>Classical vs. Quantum Performance:</strong> Classical SVC outperformed quantum approaches on full features, but the gap narrowed with PCA-reduced features.</li>
                <li><strong>Dimensionality Reduction Impact:</strong> PCA significantly improved quantum model performance while maintaining classical model performance.</li>
                <li><strong>Quantum Circuit Design:</strong> EfficientSU2 ansatz showed substantially better performance than RealAmplitudes for quantum classification.</li>
                <li><strong>Feature Efficiency:</strong> Both approaches benefit from dimensionality reduction, with quantum models showing greater relative improvement.</li>
              </ol>
            </Typography>
            
            <Typography variant="h6" gutterBottom>Implications:</Typography>
            <Typography paragraph>
              While classical methods currently outperform quantum approaches for this task, the results suggest that quantum classifiers may become competitive with further advances in quantum hardware and algorithms, especially for high-dimensional data that can be effectively reduced.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleResultsClose}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog
        open={contactOpen}
        onClose={handleContactClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Research Team
          <IconButton
            aria-label="close"
            onClick={handleContactClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={4}>
            {/* First Researcher */}
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                      <Avatar 
                        src={researcher1Image}
                        sx={{ 
                          width: 100, 
                          height: 100, 
                          margin: '0 auto',
                          bgcolor: 'primary.main'
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Typography variant="h6">Naman Dhingra</Typography>
                      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        Student Researcher
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Department of Electronics and Technology<br />
                        Guru Nanak Dev University<br />
                        Email: dhingranaman0@gmail.com
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider sx={{ mb: 2 }} />
                      <Typography variant="body2" paragraph>
                      Naman Dhingra specializes in AI-driven embedded systems and Quantum Computing. His work focuses on developing real-time machine learning models for healthcare, space-tech, and automation.
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                        <IconButton color="primary" aria-label="email" href="mailto:dhingranaman0@gmail.com">
                          <MailOutlineIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="github" href="https://github.com/Naman9801" target="_blank">
                          <GitHubIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="linkedin" href="https://www.linkedin.com/in/naman-dhingra-iaf2005/" target="_blank">
                          <LinkedInIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Second Researcher */}
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                      <Avatar 
                        src={researcher2Image}
                        sx={{ 
                          width: 100, 
                          height: 100, 
                          margin: '0 auto',
                          bgcolor: 'secondary.main'
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Typography variant="h6">Sachin Singh</Typography>
                      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        Student Researcher
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Department of Electronics and Technology<br />
                        Guru Nanak Dev University<br />
                        Email: sachinsingh23703@gmail.com
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider sx={{ mb: 2 }} />
                      <Typography variant="body2" paragraph>
                        Sachin works with a focus on 
                        classical and quantum approaches to medical image analysis 
                        and cancer detection algorithms.
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                        <IconButton color="secondary" aria-label="email" href="mailto:sachinsingh23703@gmail.com">
                          <MailOutlineIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="github" href="https://github.com/prof-mchen" target="_blank">
                          <GitHubIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="linkedin" href="https://www.linkedin.com/in/sachin-singh-13s69/" target="_blank">
                          <LinkedInIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContactClose}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Documentation Dialog */}
      <Dialog
        open={documentationOpen}
        onClose={handleDocumentationClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Project Documentation
          <IconButton
            aria-label="close"
            onClick={handleDocumentationClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText component="div">
            <Typography variant="h4" gutterBottom>Quantum vs Classical Breast Cancer Classification</Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>Project Overview</Typography>
            <Typography paragraph>
              This project explores the application of quantum computing to medical diagnostics, specifically 
              comparing classical machine learning approaches with quantum machine learning for breast cancer 
              classification using the Breast Cancer Wisconsin Dataset. The project includes both a Jupyter 
              notebook implementation and a React-based dashboard for visualizing results.
            </Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>Objectives</Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              <ul>
                <li>Compare quantum and classical approaches for breast cancer classification</li>
                <li>Evaluate the impact of dimensionality reduction on model performance</li>
                <li>Assess different quantum circuit designs (ansatz architectures)</li>
                <li>Determine the viability of quantum machine learning for medical applications</li>
              </ul>
            </Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>Dataset</Typography>
            <Typography paragraph>
              The Breast Cancer Wisconsin (Diagnostic) Dataset contains features computed from digitized images of fine needle aspirates (FNA) of breast masses. Key characteristics:
            </Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              <ul>
                <li>Number of samples: 569</li>
                <li>Number of features: 10 (after preprocessing)</li>
                <li>Classes: Benign (357) and Malignant (212)</li>
                <li>Features describe characteristics of cell nuclei present in the images</li>
              </ul>
            </Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>Repository Structure</Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              <ul>
                <li>
                  <strong>Jupyter Notebooks</strong>
                  <ul>
                    <li>Mini Project.ipynb: Main analysis notebook</li>
                    <li>Quantum_vs_Classical_Prediction.ipynb: Additional comparative analysis</li>
                  </ul>
                </li>
                <li>
                  <strong>Web Application</strong>
                  <ul>
                    <li>quantum-vs-classical/: React application for visualizing results</li>
                  </ul>
                </li>
                <li>
                  <strong>Models & Data</strong>
                  <ul>
                    <li>breast-cancer.csv: Dataset file</li>
                    <li>results.csv: Prediction results from models</li>
                    <li>svm_model.pkl: Saved classical model</li>
                  </ul>
                </li>
              </ul>
            </Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>Key Findings</Typography>
            <Typography variant="h6" gutterBottom>Accuracy Comparison</Typography>
            <TableContainer component={Paper} sx={{ mb: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Model</TableCell>
                    <TableCell align="center">Train Score</TableCell>
                    <TableCell align="center">Test Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Classical SVC (10 features)</TableCell>
                    <TableCell align="center">0.96</TableCell>
                    <TableCell align="center">0.96</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Quantum VQC (RealAmplitudes, 10)</TableCell>
                    <TableCell align="center">0.44</TableCell>
                    <TableCell align="center">0.61</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Classical SVC (2 features - PCA)</TableCell>
                    <TableCell align="center">0.92</TableCell>
                    <TableCell align="center">0.95</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Quantum VQC (RealAmplitudes, 2)</TableCell>
                    <TableCell align="center">0.67</TableCell>
                    <TableCell align="center">0.67</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Quantum VQC (EfficientSU2, 2)</TableCell>
                    <TableCell align="center">0.89</TableCell>
                    <TableCell align="center">0.88</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            
            <Typography variant="h6" gutterBottom>Key Observations</Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              <ol>
                <li><strong>Classical vs. Quantum Performance</strong>: Classical SVC outperformed quantum approaches on full features, but the gap narrowed with PCA-reduced features.</li>
                <li><strong>Dimensionality Reduction Impact</strong>: PCA significantly improved quantum model performance while maintaining classical model performance.</li>
                <li><strong>Quantum Circuit Design</strong>: EfficientSU2 ansatz showed substantially better performance than RealAmplitudes for quantum classification.</li>
                <li><strong>Feature Efficiency</strong>: Both approaches benefit from dimensionality reduction, with quantum models showing greater relative improvement.</li>
              </ol>
            </Typography>
            
            <Typography paragraph>
              While classical methods currently outperform quantum approaches for this task, the results suggest that quantum classifiers may become competitive with further advances in quantum hardware and algorithms, especially for high-dimensional data that can be effectively reduced.
            </Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>Technologies Used</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Quantum Machine Learning:</Typography>
                <ul>
                  <li>Qiskit - IBM's quantum computing framework</li>
                  <li>Variational Quantum Classifier (VQC)</li>
                  <li>ZZFeatureMap for data encoding</li>
                  <li>RealAmplitudes and EfficientSU2 ansatz</li>
                </ul>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Classical Machine Learning:</Typography>
                <ul>
                  <li>Scikit-learn for Support Vector Classifiers</li>
                  <li>Principal Component Analysis (PCA)</li>
                  <li>Data preprocessing techniques</li>
                  <li>Performance metrics evaluation</li>
                </ul>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Visualization:</Typography>
                <ul>
                  <li>React with Material UI</li>
                  <li>Chart.js with react-chartjs-2</li>
                  <li>Streamlit (alternative dashboard)</li>
                </ul>
              </Grid>
            </Grid>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>Running the Web Application</Typography>
            <Typography variant="h6" gutterBottom>React Application</Typography>
            <Paper sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 1, my: 2 }}>
              <Typography component="div" variant="body2" sx={{ fontFamily: 'monospace' }}>
                <ol>
                  <li>Navigate to the quantum-vs-classical directory</li>
                  <li>Install dependencies: <code>npm install</code></li>
                  <li>Start the development server: <code>npm start</code></li>
                  <li>Access the application at <Link href="http://localhost:3000" target="_blank">http://localhost:3000</Link></li>
                </ol>
              </Typography>
            </Paper>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>Future Research Directions</Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              <ul>
                <li>Explore different quantum feature maps</li>
                <li>Test with noisy quantum simulation to model real quantum hardware</li>
                <li>Investigate hybrid architectures combining classical and quantum components</li>
                <li>Apply to other medical diagnostic datasets</li>
              </ul>
            </Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>Authors</Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              <ul>
                <li>Naman Dhingra-Student Researcher at Guru Nanak Dev University</li>
                <li>Sachin Singh-Student Researcher at Guru Nanak Dev University</li>
              </ul>
            </Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>License</Typography>
            <Typography paragraph>
              This project is licensed under the MIT License - see the LICENSE file for details.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDocumentationClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;