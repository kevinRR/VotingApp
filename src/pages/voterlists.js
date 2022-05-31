import Head from "next/head";
import { Box, Container } from "@mui/material";
import { VoterListResults } from "../components/voterlist/voterlist-list-results";
import { VoterListToolbar } from "../components/voterlist/voterlist-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { voterlists } from "../__mocks__/voterlists";
import { useState } from "react";

const VoterList = () => {
  const [voterList, setVoterList] = useState(voterlists);
  const searchVoter = (e) => {
    const searchResults = voterlists.filter((voter) => {
      return voter.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setVoterList(searchResults);
  };
  return (
    <>
      <Head>
        <title>voterList | Voting App</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <VoterListToolbar handleSearch={searchVoter} />
          <Box sx={{ mt: 3 }}>
            <VoterListResults voterlists={voterList} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
VoterList.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default VoterList;
