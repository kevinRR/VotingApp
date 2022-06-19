import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AddCanidate } from '../../../components/canidate/add-canidate';
import { DashboardLayout } from '../../../components/dashboard-layout';
import React, { useEffect ,useState} from "react"
import Router , {useRouter}  from 'next/router';

const Canidate = () => {
  const router = useRouter()
  const slug = router.query.slug
  console.log('this is slug',slug)
  const [slugData, setSlugData] = useState(slug)
  return (
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
          Candidate
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
            <AddCanidate slugData={slugData}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  )
};

Canidate.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Canidate;