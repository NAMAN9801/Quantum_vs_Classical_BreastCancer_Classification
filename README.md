# Quantum vs Classical Breast Cancer Classification

## Project Overview

This project compares classical machine learning approaches with quantum machine learning techniques for breast cancer classification using the Breast Cancer Wisconsin Dataset. The project includes both a Jupyter notebook implementation and a React-based dashboard for visualizing results.

## Objectives

- Compare quantum and classical approaches for breast cancer classification
- Evaluate the impact of dimensionality reduction on model performance
- Assess different quantum circuit designs (ansatz architectures)
- Determine the viability of quantum machine learning for medical applications

## Dataset

The Breast Cancer Wisconsin (Diagnostic) Dataset contains features computed from digitized images of fine needle aspirates (FNA) of breast masses. Key characteristics:

- Number of samples: 569
- Number of features: 10 (after preprocessing)
- Classes: Benign (357) and Malignant (212)
- Features describe characteristics of cell nuclei present in the images

## Repository Structure

- **Jupyter Notebooks**
  - Mini Project.ipynb: Main analysis notebook
  - Quantum_vs_Classical_Prediction.ipynb: Additional comparative analysis
  
- **Web Application**
  - quantum-vs-classical/: React application for visualizing results

- **Models & Data**
  - reast-cancer.csv: Dataset file
    
esults.csv: Prediction results from models
  - svm_model.pkl: Saved classical model

## Key Findings

### Accuracy Comparison

| Model                            | Train Score | Test Score |
|----------------------------------|------------|------------|
| Classical SVC (10 features)      | 0.96       | 0.96       |
| Quantum VQC (RealAmplitudes, 10) | 0.44       | 0.61       |
| Classical SVC (2 features - PCA) | 0.92       | 0.95       |
| Quantum VQC (RealAmplitudes, 2)  | 0.67       | 0.67       |
| Quantum VQC (EfficientSU2, 2)    | 0.89       | 0.88       |

### Key Observations

1. **Classical vs. Quantum Performance**: Classical SVC outperformed quantum approaches on full features, but the gap narrowed with PCA-reduced features.
2. **Dimensionality Reduction Impact**: PCA significantly improved quantum model performance while maintaining classical model performance.
3. **Quantum Circuit Design**: EfficientSU2 ansatz showed substantially better performance than RealAmplitudes for quantum classification.
4. **Feature Efficiency**: Both approaches benefit from dimensionality reduction, with quantum models showing greater relative improvement.

## Technologies Used

### Quantum Machine Learning
- Qiskit - IBM's quantum computing framework
- Variational Quantum Classifier (VQC)
- ZZFeatureMap for data encoding
- RealAmplitudes and EfficientSU2 ansatz

### Classical Machine Learning
- Scikit-learn for Support Vector Classifiers
- Principal Component Analysis (PCA)
- Data preprocessing techniques
- Performance metrics evaluation

### Visualization
- React with Material UI
- Chart.js with react-chartjs-2
- Streamlit (alternative dashboard)

## Running the Web Application

### React Application
1. Navigate to the quantum-vs-classical directory
2. Install dependencies: 
pm install
3. Start the development server: 
pm start
4. Access the application at [http://localhost:3000](http://localhost:3000)


## Future Research Directions

- Explore different quantum feature maps
- Test with noisy quantum simulation to model real quantum hardware
- Investigate hybrid architectures combining classical and quantum components
- Apply to other medical diagnostic datasets

## Authors

- Naman Dhingra - Student Researcher at Guru Nanak Dev University
- Sachin Singh - Student Researcher at Guru Nanak Dev University

## License

This project is licensed under the MIT License - see the LICENSE file for details.

