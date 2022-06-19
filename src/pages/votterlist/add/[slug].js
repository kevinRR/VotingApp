import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AddVotterList } from '../../../components/voterlist/add-voterlist';
import { DashboardLayout } from '../../../components/dashboard-layout';

const Addvotterlist = () => (
  <>
    <Head>
      <title>
        Add voterlist | Voting App
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
          Voter List
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
            <AddVotterList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Addvotterlist.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Addvotterlist;