import Head from 'next/head';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import { CanidateListResults } from '../../components/canidate/canidate-list-results';
import { CanidateListToolbar } from '../../components/canidate/canidate-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
import React, { useEffect ,useState} from "react"
import Router , {useRouter}  from 'next/router';

// import { canidates } from '../__mocks__/canidates';

const Canidates = () => {
  // const isBrowser = window && window.addEventListener(.......blabla)
  const router = useRouter()
  const slug = router.query.slug
  const [slugData, setSlugData] = useState(slug)
  console.log('this is slugData',slugData)

  const data = slugData.split(",")
  console.log('this is test',data,slug)

  const [canidates, setCanidates] = useState([])
      useEffect(() => {     
        const getData = async () => {  
          await axios.get(`https://decentralized-ivoting.herokuapp.com/candidate-list?campaignCode=${data[0]}&areaCode=${data[1]}`)  
          .then(res => {  
            console.log('this res',res.data) 
            setCanidates(res.data) 
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
          <CanidateListResults canidates={canidates}
data={data} />
        </Box>
      </Container>
    </Box>
  </>)
};
Canidates.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Canidates;
