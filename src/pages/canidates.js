import { useState } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CanidateListResults } from "../components/canidate/canidate-list-results";
import { CanidateListToolbar } from "../components/canidate/canidate-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { mockCanidates } from "../__mocks__/canidates";

const Canidates = () => {
  const [canidates, setCanidates] = useState(mockCanidates);

  const searchUser = (e) => {
    const searchResults = mockCanidates.filter((user) => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setCanidates(searchResults);
  };
  return (
    <>
      <Head>
        <title>Canidates | Voting App</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CanidateListToolbar handleSearch={searchUser} />
          <Box sx={{ mt: 3 }}>
            <CanidateListResults canidates={canidates} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
Canidates.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Canidates;
