import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { VoterListResults } from '../components/voterlist/voterlist-list-results';
import { VoterListToolbar } from '../components/voterlist/voterlist-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { voterlists } from '../__mocks__/voterlists';

const VoterList = () => (
  <>
    <Head>
      <title>
        voterlists | Voting App
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
        <VoterListToolbar />
        <Box sx={{ mt: 3 }}>
          <VoterListResults voterlists={voterlists} />
        </Box>
      </Container>
    </Box>
  </>
);
VoterList.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default VoterList;
