import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AddCanidate } from '../../../components/canidate/add-canidate';
import { DashboardLayout } from '../../../components/dashboard-layout';

const Canidate = () => (
  <>
    <Head>
      <title>
        Add Canidates | Voting App
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Canidate
        </Typography>
        <Grid
          container
          spacing={3}
        >
          
          <Grid
            item
            lg={12}
            md={8}
            xs={12}
          >
            <AddCanidate />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Canidate.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Canidate;