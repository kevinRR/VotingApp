import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import axios from 'axios';
//import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Router , {useRouter}  from 'next/router';

export const AddArea = (props) => {
  const router = useRouter()

  const slug = router.query.slug
  console.log('this is slug',slug)
  const [values, setValues] = useState({
    areaName: '',
    areaCode: '',
  });



  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };



 function handleSubmit() {
    // POST request using axios with async/await
    const data = {  areaName: values.areaName,
                    areaCode: values.areaCode,
                    campaignCode:slug
                   }
    const response =  axios.post('https://decentralized-ivoting.herokuapp.com/add-area', data)

    router.push(`/areas/${slug}`)
    // this.setState({ articleId: response.data.id })
}

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader=""
          title="Add New Area"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the Area Name"
                label="Area Name"
                name="areaName"
                onChange={handleChange}
                required
                value={values.areaName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the Area Code"
                label="Area Code"
                name="areaCode"
                onChange={handleChange}
                required
                value={values.areaCode}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit} 
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};


