import Head from 'next/head';
import axios from 'axios';
import React, { useEffect ,useState} from "react"
import { Box, Container } from '@mui/material';
import { UserListResults } from '../components/user/user-list-results';
import { UserListToolbar } from '../components/user/user-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
// import { users } from '../__mocks__/users';


const Users = () => {
  const [users, setUsers] = useState([])
      useEffect(() => {
        // {
        //   username: 'john',
        //   role: 'admin'
        // }, {
        //   username: 'anna',
        //   role: 'member'
        // },    
        const getData = async () => {  
          await axios.get('https://decentralized-ivoting.herokuapp.com/user-list')  
          .then(res => {  
            console.log('this res',res.data) 
            setUsers(res.data) 
          })  
          .catch(err => {  
            console.log(err)  
          });  
        }  
        getData()  
      }, [users])
  return (<>
    <Head>
      <title>
        users |  Voting App
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
        <UserListToolbar />
        <Box sx={{ mt: 3 }}>
          <UserListResults users={users} />
        </Box>
      </Container>
    </Box>
  </>)
};
Users.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Users;
