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
import { MyAlert } from '../myAlert';

export const AddCanidate = ({ slugData, props }) => {
  const [alertSeverity, setAlertSeverity] = useState('')
        const [alertMessage, setAlertMessage] = useState('')
        const [showAlert, setShowAlert] = useState(false)
  const router = useRouter()
  // router.push(`/canidates/${slugData}`)
  const [values, setValues] = useState({
    candidateCode: '',
    candidateName: '',
    candidateSign: ''
  });
  const [slug, setSlugData] = useState(slugData)
  const data = slug.split(",")
  const [campaignCode, setCampaignCode] = useState(data[0])
  const [areaCode, setAreaCode] = useState(data[1])
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const addData = async (data) => {  
    await axios.post('https://decentralized-ivoting.herokuapp.com/add-candidate', data) 
    .then(res => {  
      console.log('this test res',res.data) 
      setShowAlert(true);
      clearTimeout(timeout);
      setAlertSeverity('');
      setAlertSeverity('success')
      const timeout = setTimeout(() => {
        setShowAlert(false);
        router.push(`/areas/${campaignCode}`)
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
    const data = {  
                  campaignCode: campaignCode,
                  areaCode: areaCode,
                  candidateCode: values.candidateCode,
                  candidateName: values.candidateName,
                  candidateSign: values.candidateSign
                   }


    addData(data) 
    // const response =  axios.post('https://decentralized-ivoting.herokuapp.com/add-candidate', data)
    // router.push(`/canidates/${slugData}`)
    // this.setState({ articleId: response.data.id })
}

  return(<>

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
          title="Add New Candidate"
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
                helperText="Please specify the Candidate Name"
                label="Candidate Name"
                name="candidateName"
                error={values.candidateName === ""}
                onChange={handleChange}
                required
                value={values.candidateName}
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
                helperText="Please specify the Candidate Code"
                label="Candidate Code"
                name="candidateCode"
                error={values.candidateCode === ""}
                onChange={handleChange}
                required
                value={values.candidateCode}
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
                helperText="Please specify the Candidate Sign"
                label="Candidate Sign"
                name="candidateSign"
                error={values.candidateSign === ""}
                onChange={handleChange}
                required
                value={values.candidateSign}
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
    </>);
};


