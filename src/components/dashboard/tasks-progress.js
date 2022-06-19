import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
// import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';


export const TasksProgress = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            VOTER LIST
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            10
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <BabyChangingStationIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
);
