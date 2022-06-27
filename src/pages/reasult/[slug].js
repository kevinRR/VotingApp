import Head from 'next/head';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import { CanidateListResults } from '../../components/canidate/canidate-list-results';
import { CanidateListToolbar } from '../../components/canidate/canidate-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
import React, { useEffect ,useState} from "react"
import Router , {useRouter}  from 'next/router';
import { ResultData } from 'src/components/result';

// import { canidates } from '../__mocks__/canidates';

const Result = () => {
  // const isBrowser = window && window.addEventListener(.......blabla)
  const router = useRouter()
  const slug = router.query.slug
  const [slugData, setSlugData] = useState(slug)
  console.log('this is slugData',slugData)

  const data = slugData.split(",")
  console.log('this is test',data,slug)

  return (<>
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
        <Box sx={{ mt: 3 }}>
          <ResultData slugData={data} />
        </Box>
      </Container>
    </Box>
  </>)
};
Result.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Result;
