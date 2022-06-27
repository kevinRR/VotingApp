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
import Alert from '@mui/material/Alert';
import Router , {useRouter}  from 'next/router';
import { MyAlert } from '../myAlert';



export const AddCampion = (props) => {
  const [alertSeverity, setAlertSeverity] = useState('')
        const [alertMessage, setAlertMessage] = useState('')
        const [showAlert, setShowAlert] = useState(false)
  
  const [values, setValues] = useState({
    name: '',
    code: '',
  });
  const router = useRouter()

  const [startDateTime, setStartValues] = useState('');
  const [endDateTime, setEndValues] = useState('');


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeStartDateTime = (newValue) => {
    setStartValues(newValue);
  };

  const handleChangeEndDateTime = (newValue) => {
    setEndValues(newValue);
  };

  const addData = async (data) => {  
    await axios.post('https://decentralized-ivoting.herokuapp.com/create-campaign', data) 
    .then(res => {  
      console.log('this test res',res.data) 
      setShowAlert(true);
      clearTimeout(timeout);
      setAlertSeverity('');
      setAlertSeverity('success')
      const timeout = setTimeout(() => {
        setShowAlert(false); 
        router.push(`/campions`)
      }, 1000);
    })  
    .catch(err => {  
      console.log(err)          
      console.log('this test res',err.message) 
      setShowAlert(true);
      setAlertSeverity('');
      setAlertSeverity('error');
      clearTimeout(timeout);
      const timeout = setTimeout(() => {
        setShowAlert(false);
        // router.push(`/areas/${slug}`)
      }, 1000);
    });  
  }
 function handleSubmit() {
    // POST request using axios with async/await
    const data = {  name: values.name,
                    code: values.code,
                    startDateTime:startDateTime,
                    endDateTime:endDateTime,
                   }

    addData(data) 
    // this.setState({ articleId: response.data.id })
}

  return (<>

   {showAlert && 
    <MyAlert severity={alertSeverity}
message={alertMessage}
setShowAlert = {setShowAlert}/> }
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader=""
          title="Add New Campaign"
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
                helperText="Please specify the Campaign Name"
                label="Campaign Name"
                error={values.name === ""}
                name="name"
                onChange={handleChange}
                required
                value={values.name}
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
                helperText="Please specify the Campaign Code"
                errorText={values.code}
                error={values.code === ""}
                label="Campaign Code"
                name="code"
                onChange={handleChange}
                required
                value={values.code}
                variant="outlined"
              />
            </Grid>
           
            <Grid
              item
              md={6}
              xs={12}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Start Date Time"
                    value={startDateTime}
                    onChange={handleChangeStartDateTime}
                    renderInput={(params) => <TextField {...params} />}
                  />
              </LocalizationProvider>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="End Date Time"
                    value={endDateTime}
                    onChange={handleChangeEndDateTime}
                    renderInput={(params) => <TextField {...params} />}
                  />
              </LocalizationProvider>
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
    </>);
};


