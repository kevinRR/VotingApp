import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AddArea } from '../../../components/area/add-area';
import { DashboardLayout } from '../../../components/dashboard-layout';

const Addarea = () => (
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
          Area
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
            <AddArea />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Addarea.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Addarea;