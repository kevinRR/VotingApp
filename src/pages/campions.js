import Head from 'next/head';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import { CampionListResults } from '../components/campion/campion-list-results';
import { CampionListToolbar } from '../components/campion/campion-list-toolbar';
import React, { useEffect ,useState} from "react"
import { DashboardLayout } from '../components/dashboard-layout';
// import { campions } from '../__mocks__/campions';


const Campions = () => {
    const [campions, setCampions] = useState([])
        useEffect(() => {     
          const getData = async () => {  
            await axios.get('https://decentralized-ivoting.herokuapp.com/campaign-list')  
            .then(res => {  
              console.log('this res',res.data) 
              setCampions(res.data) 
            })  
            .catch(err => {  
              console.log(err)  
            });  
          }  
          getData()  
        }, [])
  return (<>
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
  </>)
};

Campions.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Campions;
