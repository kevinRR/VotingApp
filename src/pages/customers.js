import Head from 'next/head';
import { Box, Container } from '@mui/material';

import axios from 'axios';
import React, { useEffect ,useState} from "react"
import { CustomerListResults } from '../components/canidate/canidate-list-results';
import { CustomerListToolbar } from '../components/canidate/canidate-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
// import { customers } from '../__mocks__/customers';

const Customers = () => {
  const [areas, setAreas] = useState([])
      useEffect(() => {     
        const getData = async () => {  
          await axios.get('https://decentralized-ivoting.herokuapp.com/customer-list')  
          .then(res => {  
            console.log('this res',res.data) 
            setAreas(res.data) 
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
        Customers | Voting App
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
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>)
};
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
