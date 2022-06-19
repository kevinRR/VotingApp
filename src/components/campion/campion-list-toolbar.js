import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography,

} from '@mui/material';
import Link from 'next/link'

import React, { useEffect ,useState} from "react"
// import {
//   Link
// } from "react-router-dom";

// import { useNavigation } from '@react-navigation/native';
// import { useRouter } from 'next/router';


//import { Modal } from 'react-bootstrap';

import { Search as SearchIcon } from '../../icons/search';
import { redirect } from 'next/dist/server/api-utils';
import Router , {useRouter}  from 'next/router';

export const CampionListToolbar = (props) => {
  // const navigation = useNavigation();
const router = useRouter()
  const [show, setShow] = useState(false);
  const redirect = () => {
    router.push('/addcampion')
  }

  return (<>
  <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Campaign
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => router.push('/addcampion')}
        >
          Add Campaign
        </Button>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search "
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>

  </>)
};
