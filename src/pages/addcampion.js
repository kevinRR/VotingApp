import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AddCampion } from '../components/campion/add-campion';
import { DashboardLayout } from '../components/dashboard-layout';

const Account = () => (
  <>
    <Head>
      <title>
        Add Campion | Voting App
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
          Campaign
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
            <AddCampion />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Account.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Account;