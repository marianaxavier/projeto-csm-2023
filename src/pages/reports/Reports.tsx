import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { reportsInfo } from '../../data';
import ReportCard from '../../components/report-card';


const Reports = () => {
  return (
    <>
      <Typography variant="h3" mt={5} mb={2.5}>
        Relatórios de Laboratórios
      </Typography>
      <Divider style={{marginBottom: 2.5}}/>
      <Grid container alignContent='center'>
        {reportsInfo.map((report) => (
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <ReportCard
              id={report.id}
              title={report.title}
              description={report.description}
              image={report.image}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Reports;
