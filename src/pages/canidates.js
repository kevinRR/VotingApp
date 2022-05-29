import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CanidateListResults } from '../components/canidate/canidate-list-results';
import { CanidateListToolbar } from '../components/canidate/canidate-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { canidates } from '../__mocks__/canidates';

const Canidates = () => (
  <>
    <Head>
      <title>
        Canidates | Voting App
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
        <CanidateListToolbar />
        <Box sx={{ mt: 3 }}>
          <CanidateListResults canidates={canidates} />
        </Box>
      </Container>
    </Box>
  </>
);
Canidates.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Canidates;
