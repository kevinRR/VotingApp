import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import React, { useEffect ,useState} from "react"
import axios from 'axios';



export const ResultData = ({ slugData, props }) => {
 
  const [finalData, setFinalData] = useState([])

  const [labels, setLabels] = useState([])
  const [votes, setVotes] = useState([])
  const [totalVotes, setTotalVotes] = useState()


      useEffect(() => {     
        const getData = async () => {  
          await axios.get(`https://decentralized-ivoting.herokuapp.com/details?campaignCode=${slugData[0]}&areaCode=${slugData[1]}`)  
          .then(res => {  
            console.log('this res',res.data) 
            setFinalData(res.data) 
            const label =finalData.map((key) => 
             key.name
             );
             const vote =finalData.map((key) => 
             key.votes
             );
             let sum = 0;
             const votecount =finalData.map((key) => 
             sum += parseInt(key.votes)
             );
             setLabels(label);
             setVotes(vote);

             setTotalVotes(sum)
           
             console.log('final data',finalData)
          })  
          .catch(err => {  
            console.log(err)  
          });  
        }  
        getData()  
      }, [finalData, slugData, totalVotes])
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: votes,
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: labels

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
      title: 'Antara',
      value: (1/1)*100,
      icon: LaptopMacIcon,
    //   color: '#3F51B5'
    },
    {
      title: 'Emily',
      value: (0/1)*100,
      icon: TabletIcon,
    //   color: '#E53935'
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
          {finalData.map(({
            color,
            // icon: Icon,
            name,
            votes
          }) => (
            <Box
              key={name}
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
                {name}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {(votes/totalVotes)*100}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
