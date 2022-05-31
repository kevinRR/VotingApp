import { useState } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import { UserListResults } from "../components/user/user-list-results";
import { UserListToolbar } from "../components/user/user-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { mockUsers } from "../__mocks__/users";

const Users = () => {
  const [users, setUsers] = useState(mockUsers);


  const searchUser = (e) => {
    const searchResults = mockUsers.filter((user) => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setUsers(searchResults);
  };
  return (
    <>
      <Head>
        <title>users | Voting App</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <UserListToolbar handleSearch={searchUser} />
          <Box sx={{ mt: 3 }}>
            <UserListResults users={users} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Users.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Users;
