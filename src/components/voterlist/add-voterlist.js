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
import Router , {useRouter}  from 'next/router';


export const AddVotterList = (props) => {
  const router = useRouter()

  const slug = router.query.slug
  const [values, setValues] = useState({
    voterId: "",
    phoneNumber: "",

  });


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

 
 function handleSubmit() {
    // POST request using axios with async/await
    const data = {  voterId: values.voterId,
                    phoneNumber: values.phoneNumber,
                    areaCode:slug
                   }
    const response =  axios.post('https://decentralized-ivoting.herokuapp.com/add-voter', data)
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
          title="Add New Votter List"
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
                helperText="Please specify the Votter ID"
                label="Voter Id"
                name="voterId"
                onChange={handleChange}
                required
                value={values.voterId}
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
                helperText="Please specify the Votter Phonenumber"
                label="voter ID Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                required
                value={values.phoneNumber}
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


