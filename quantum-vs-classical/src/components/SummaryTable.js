// src/components/SummaryTable.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const formatPercent = (value) => `${(value * 100).toFixed(1)}%`;

const SummaryTable = () => {
  const rows = [
    { 
      model: 'Full Feature Models (10 features)', 
      isHeader: true 
    },
    { 
      model: 'Classical SVC', 
      trainScore: 0.98, 
      testScore: 0.96,
      modelType: 'classical' 
    },
    { 
      model: 'Quantum VQC (RealAmplitudes)', 
      trainScore: 0.95, 
      testScore: 0.92,
      modelType: 'quantum' 
    },
    { 
      model: 'PCA Models (2 features)', 
      isHeader: true 
    },
    { 
      model: 'Classical SVC', 
      trainScore: 0.94, 
      testScore: 0.94,
      modelType: 'classical' 
    },
    { 
      model: 'Quantum VQC (RealAmplitudes)', 
      trainScore: 0.93, 
      testScore: 0.92,
      modelType: 'quantum' 
    },
    { 
      model: 'Quantum VQC (EfficientSU2)', 
      trainScore: 0.96, 
      testScore: 0.93,
      modelType: 'quantum' 
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Model</StyledTableCell>
            <StyledTableCell align="right">Train Score</StyledTableCell>
            <StyledTableCell align="right">Test Score</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            row.isHeader ? (
              <TableRow key={index} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}>
                <TableCell colSpan={3} sx={{ fontWeight: 'bold' }}>
                  {row.model}
                </TableCell>
              </TableRow>
            ) : (
              <StyledTableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.model}
                </TableCell>
                <TableCell align="right">{formatPercent(row.trainScore)}</TableCell>
                <TableCell align="right">{formatPercent(row.testScore)}</TableCell>
              </StyledTableRow>
            )
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SummaryTable;