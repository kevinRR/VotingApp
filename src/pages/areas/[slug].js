import Head from 'next/head';
import axios from 'axios';
import React, { useEffect ,useState} from "react"
import { Box, Container } from '@mui/material';
import { AreaListResults } from '../../components/area/area-list-results';
import { AreaListToolbar } from '../../components/area/area-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
// import { areas } from '../__mocks__/areas';
import Router , {useRouter}  from 'next/router';


const Areas = () => {
  const router = useRouter()
  const slug = router.query.slug
  console.log('this is ',slug) 
  const [areas, setAreas] = useState([])
      useEffect(() => {     
        const getData = async () => {  
          await axios.get(`https://decentralized-ivoting.herokuapp.com/area-list?campaignCode=${slug}`)   
          .then(res => {  
            console.log('this res',res.data) 
            setAreas(res.data) 
          })  
          .catch(err => {  
            console.log(err)  
          });  
        }  
        getData()  
      }, [slug])
  return (<>
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
)};
Areas.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Areas;
