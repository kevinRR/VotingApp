import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CampionListResults } from '../components/campion/campion-list-results';
import { CampionListToolbar } from '../components/campion/campion-list-toolbar';

import { DashboardLayout } from '../components/dashboard-layout';
import { campions } from '../__mocks__/campions';

const Campions = () => (
  <>
    <Head>
      <title>
        Campions |  Voting App
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CampionListToolbar />
        <Box sx={{ mt: 3 }}>
          <CampionListResults campions={campions} />
        </Box>
      </Container>
    </Box>
  </>
);
Campions.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Campions;
