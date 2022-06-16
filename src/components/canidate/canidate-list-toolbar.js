import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import Router , {useRouter}  from 'next/router';
import React, { useEffect ,useState} from "react"


export const CanidateListToolbar = (props) =>  {

  const router = useRouter()
  const slug = router.query.slug
  console.log('this is slug',slug)
  const [slugData, setSlugData] = useState(slug)
  console.log('this is slugData',slugData)

  const data = slugData.split(",")
  console.log('this is test',data,slug)

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
        Canidates
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => router.push(`/canidates/add/${slugData}`)}
        >
          Add Canidate
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
