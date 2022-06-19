import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import React, { useEffect ,useState} from "react"
import axios from 'axios';



export const VotingInfo = (props) => {
  const [campions, setCampions] = useState([])
      useEffect(() => {     
        const getData = async () => {  
          await axios.get('https://decentralized-ivoting.herokuapp.com/campaign-list')  
          .then(res => {  
            console.log('this res',res.data) 
            setCampions(res.data) 
          })  
          .catch(err => {  
            console.log(err)  
          });  
        }  
        getData()  
      }, [])
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [3,1],
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Antara', 'Emily']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Candidates A',
      value: (3/4)*100,
      icon: LaptopMacIcon,
      color: '#3F51B5'
    },
    {
      title: 'Candidates B',
      value: (1/4)*100,
      icon: TabletIcon,
      color: '#E53935'
    },
    // {
    //   title: 'Candidates C',
    //   value: 23,
    //   icon: PhoneIcon,
    //   color: '#FB8C00'
    // }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Voting information" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            // icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              {/* <Icon color="action" /> */}
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
