import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { AreaListResults } from '../components/area/area-list-results';
import { AreaListToolbar } from '../components/area/area-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { areas } from '../__mocks__/areas';

const Areas = () => (
  <>
    <Head>
      <title>
        Areas |  Voting App
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
        <AreaListToolbar />
        <Box sx={{ mt: 3 }}>
          <AreaListResults areas={areas} />
        </Box>
      </Container>
    </Box>
  </>
);
Areas.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Areas;
